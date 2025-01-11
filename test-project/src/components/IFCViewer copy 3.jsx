import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';
import * as OBC from '@thatopen/components';
import * as BUI from '@thatopen/ui';   // For UI web components
import Stats from 'stats.js';

const IFCViewer = () => {
  const containerRef = useRef(null);
  const statsRef = useRef(null);

  useEffect(() => {
    BUI.Manager.init();

    const container = document.getElementById("container");

    const components = new OBC.Components();
    const worlds = components.get(OBC.Worlds);
    const world = worlds.create();

    world.scene = new OBC.SimpleScene(components);
    world.renderer = new OBC.SimpleRenderer(components, container);
    world.camera = new OBC.SimpleCamera(components);
    components.init();

    world.camera.controls.setLookAt(12, 6, 8, 0, 0, -10);
    world.scene.setup();

    const grids = components.get(OBC.Grids);
    grids.create(world);

    world.scene.three.background = null;

    const fragments = components.get(OBC.FragmentsManager);
    const fragmentIfcLoader = components.get(OBC.IfcLoader);

    fragmentIfcLoader.settings.wasm = {
      path: 'https://unpkg.com/web-ifc@0.0.66/',
      absolute: true,
    };
    fragmentIfcLoader.settings.webIfc.COORDINATE_TO_ORIGIN = true;

    let model;

    function download(file) {
      const link = document.createElement('a');
      link.href = URL.createObjectURL(file);
      link.download = file.name;
      document.body.appendChild(link);
      link.click();
      link.remove();
    }

    async function loadIfc() {
      try {
        const file = await fetch('/dummy.ifc');
        const data = await file.arrayBuffer();
        const buffer = new Uint8Array(data);

        model = await fragmentIfcLoader.load(buffer);
        model.name = 'example';
        world.scene.three.add(model);
      } catch (error) {
        console.error('Error loading IFC model:', error);
      }
    }

    async function exportFragments() {
      if (!fragments.groups.size) return;
      const group = Array.from(fragments.groups.values())[0];
      const fragData = fragments.export(group);

      download(new File([new Blob([fragData])], 'demo.frag'));

      const properties = group.getLocalProperties();
      if (properties) {
        download(new File([JSON.stringify(properties)], 'demo.json'));
      }
    }

    function disposeFragments() {
      fragments.dispose();
    }

    const panel = BUI.Component.create<BUI.PanelSection>(() => {
      return BUI.html`
      <bim-panel active label="IFC Loader Tutorial" class="options-menu">
        <bim-panel-section collapsed label="Controls">
          <bim-panel-section style="padding-top: 12px;">
            <bim-button label="Load IFC"
              @click="${() => {
                loadIfc();
              }}">
            </bim-button>  
                
            <bim-button label="Export fragments"
              @click="${() => {
                exportFragments();
              }}">
            </bim-button>  
                
            <bim-button label="Dispose fragments"
              @click="${() => {
                disposeFragments();
              }}">
            </bim-button>
          </bim-panel-section>
        </bim-panel>
      `;
    });

    document.body.append(panel);

    const button = BUI.Component.create<BUI.PanelSection>(() => {
      return BUI.html`
        <bim-button class="phone-menu-toggler" icon="solar:settings-bold"
          @click="${() => {
            if (panel.classList.contains("options-menu-visible")) {
              panel.classList.remove("options-menu-visible");
            } else {
              panel.classList.add("options-menu-visible");
            }
          }}">
        </bim-button>
      `;
    });

    document.body.append(button);

    const stats = new Stats();
    stats.showPanel(2); 
    if (statsRef.current) {
      statsRef.current.appendChild(stats.dom);
      stats.dom.style.left = '10px';
      stats.dom.style.top = '10px';
      stats.dom.style.zIndex = '100';
    }

    world.renderer.onBeforeUpdate.add(() => stats.begin());
    world.renderer.onAfterUpdate.add(() => stats.end());

    fragments.onFragmentsLoaded.add((loadedModel) => {
      console.log('Fragments loaded:', loadedModel);
    });

    return () => {
      world.scene.three.clear();
      world.renderer.dispose();
      world.camera.dispose();
      fragmentIfcLoader.cleanUp();

      if (model) {
        model.traverse((child) => {
          if (child instanceof THREE.Mesh) {
            child.geometry.dispose();
            if (Array.isArray(child.material)) {
              child.material.forEach((mat) => mat.dispose());
            } else {
              child.material.dispose();
            }
          }
        });
      }
    };
  }, []);

  return (
    <div>
      <h1>3D IFC Viewer</h1>
      <div
        id="container"
        ref={containerRef}
        style={{ width: '100%', height: '500px', position: 'relative' }}
      >
        <div
          ref={statsRef}
          style={{ position: 'absolute', top: '0px', left: '0px' }}
        />
      </div>
    </div>
  );
};

export default IFCViewer;
