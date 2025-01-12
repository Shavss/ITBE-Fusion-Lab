import random

def delete_random_vertices(input_file, output_file, keep_ratio=0.5):
    with open(input_file, 'r') as infile:
        lines = infile.readlines()

    header = []
    data_start = 0
    vertex_count = 0

    # Parse the header
    for i, line in enumerate(lines):
        header.append(line)
        if line.startswith("element vertex"):
            # Extract the number of vertices
            vertex_count = int(line.split()[-1])
        if line.strip() == "end_header":
            data_start = i + 1
            break

    # Calculate the number of vertices to keep
    keep_count = int(vertex_count * keep_ratio)
    print(f"Original vertex count: {vertex_count}")
    print(f"Keeping {keep_count} vertices ({keep_ratio * 100}%)")

    # Randomly shuffle indices and select vertices to keep
    all_indices = list(range(vertex_count))
    random.shuffle(all_indices)
    keep_indices = set(all_indices[:keep_count])

    # Filter the vertices
    cleaned_data = [
        line for idx, line in enumerate(lines[data_start:], start=0) if idx in keep_indices
    ]

    # Update the vertex count in the header
    updated_header = []
    for line in header:
        if line.startswith("element vertex"):
            updated_header.append(f"element vertex {keep_count}\n")
        else:
            updated_header.append(line)

    # Write the cleaned file
    with open(output_file, 'w') as outfile:
        outfile.writelines(updated_header)
        outfile.writelines(cleaned_data)

    print(f"Cleaned PLY file saved as: {output_file}")


# Input and output file paths
input_ply = "test-project/public/cloud_rgb.ply"
output_ply = "test-project/public/random2.ply"

# Delete 50% of vertices
delete_random_vertices(input_ply, output_ply, keep_ratio=0.1)
