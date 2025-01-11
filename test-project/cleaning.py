def remove_alpha(input_file, output_file):
    with open(input_file, 'r') as infile:
        lines = infile.readlines()

    header = []
    data_start = 0

    # Parse the header
    for i, line in enumerate(lines):
        header.append(line)
        if line.strip() == "end_header":
            data_start = i + 1
            break

    # Modify the header to remove the alpha property
    updated_header = []
    for line in header:
        if "property uchar alpha" not in line:
            updated_header.append(line)

    # Process the data: Remove the last value from each line
    cleaned_data = []
    for line in lines[data_start:]:
        values = line.strip().split()
        if len(values) > 3:  # Ensure there are enough columns to process
            cleaned_data.append(" ".join(values[:-1]) + "\n")  # Remove the last value

    # Write the updated PLY file
    with open(output_file, 'w') as outfile:
        outfile.writelines(updated_header)
        outfile.writelines(cleaned_data)

    print(f"Cleaned PLY file saved as: {output_file}")


# Input and output file names (relative to the current script location)
input_ply = "test-project/public/cloud_rgb.ply"  # Replace with your .ply file name
output_ply = "cloud_cleaned.ply"  # Output file name

# Remove the alpha column from the PLY file
remove_alpha(input_ply, output_ply)
