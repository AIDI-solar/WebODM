// Auto-generated with extract_odm_strings.py, do not edit!

_("The maximum vertex count of the output mesh. Default: %(default)s");
_("Skip normalization of colors across all images. Useful when processing radiometric data. Default: %(default)s");
_("End processing at this stage. Can be one of: %(choices)s. Default: %(default)s");
_("Delete heavy intermediate files to optimize disk space usage. This affects the ability to restart the pipeline from an intermediate stage, but allows datasets to be processed on machines that don't have sufficient disk space available. Default: %(default)s");
_("Use images' GPS exif data for reconstruction, even if there are GCPs present.This flag is useful if you have high precision GPS measurements. If there are no GCPs, this flag does nothing. Default: %(default)s");
_("Generates a benchmark file with runtime info. Default: %(default)s");
_("Simple Morphological Filter window radius parameter (meters). Default: %(default)s");
_("Rerun this stage only and stop. Can be one of: %(choices)s. Default: %(default)s");
_("Run local bundle adjustment for every image added to the reconstruction and a global adjustment every 100 images. Speeds up reconstruction for very large datasets. Default: %(default)s");
_("Permanently delete all previous results and rerun the processing pipeline.");
_("Print additional messages to the console. Default: %(default)s");
_("Use this tag if you have a GCP File but want to use the EXIF information for georeferencing instead. Default: %(default)s");
_("DSM/DTM resolution in cm / pixel. Note that this value is capped by a ground sampling distance (GSD) estimate. To remove the cap, check --ignore-gsd also. Default: %(default)s");
_("Path to the image groups file that controls how images should be split into groups. The file needs to use the following format: image_name group_nameDefault: %(default)s");
_("When processing multispectral datasets, ODM will automatically align the images for each band. If the images have been postprocessed and are already aligned, use this option. Default: %(default)s");
_("Legacy option (use --feature-quality instead). Resizes images by the largest side for feature extraction purposes only. Set to -1 to disable. This does not affect the final orthophoto resolution quality and will not resize the original images. Default: %(default)s");
_("Legacy option (use --pc-quality instead). Controls the density of the point cloud by setting the resolution of the depthmap images. Higher values take longer to compute but produce denser point clouds. Default: %(default)s");
_("Name of dataset (i.e subfolder name within project folder). Default: %(default)s");
_("Simple Morphological Filter elevation threshold parameter (meters). Default: %(default)s");
_("Set this parameter if you want to generate a PNG rendering of the orthophoto. Default: %(default)s");
_("Path to the project folder. Your project folder should contain subfolders for each dataset. Each dataset should have an \"images\" folder.");
_("Matcher algorithm, Fast Library for Approximate Nearest Neighbors or Bag of Words. FLANN is slower, but more stable. BOW is faster, but can sometimes miss valid matches. Can be one of: %(choices)s. Default: %(default)s");
_("Choose what to merge in the merge step in a split dataset. By default all available outputs are merged. Options: %(choices)s. Default: %(default)s");
_("Export the georeferenced point cloud in Entwine Point Tile (EPT) format. Default: %(default)s");
_("When processing multispectral datasets, you can specify the name of the primary band that will be used for reconstruction. It's recommended to choose a band which has sharp details and is in focus. Default: %(default)s");
_("Use a full 3D mesh to compute the orthophoto instead of a 2.5D mesh. This option is a bit faster and provides similar results in planar areas. Default: %(default)s");
_("Displays version number and exits. ");
_("When texturing the 3D mesh, for each triangle, choose to prioritize images with sharp features (gmi) or those that cover the largest area (area). Default: %(default)s");
_("URL to a ClusterODM instance for distributing a split-merge workflow on multiple nodes in parallel. Default: %(default)s");
_("Use this tag to build a DTM (Digital Terrain Model, ground only) using a simple morphological filter. Check the --dem* and --smrf* parameters for finer tuning. Default: %(default)s");
_("Use this tag to build a DSM (Digital Surface Model, ground + objects) using a progressive morphological filter. Check the --dem* parameters for finer tuning. Default: %(default)s");
_("Generates a polygon around the cropping area that cuts the orthophoto around the edges of features. This polygon can be useful for stitching seamless mosaics with multiple overlapping orthophotos. Default: %(default)s");
_("Turn on gamma tone mapping or none for no tone mapping. Can be one of %(choices)s. Default: %(default)s ");
_("Set the compression to use for orthophotos. Can be one of: %(choices)s. Default: %(default)s");
_("Set this parameter if you want a striped GeoTIFF. Default: %(default)s");
_("Simple Morphological Filter elevation scalar parameter. Default: %(default)s");
_("Rerun processing from this stage. Can be one of: %(choices)s. Default: %(default)s");
_("Simple Morphological Filter slope parameter (rise over run). Default: %(default)s");
_("Classify the point cloud outputs using a Simple Morphological Filter. You can control the behavior of this option by tweaking the --dem-* parameters. Default: %(default)s");
_("Export the georeferenced point cloud in LAS format. Default: %(default)s");
_("Number of nearest images to pre-match based on GPS exif data. Set to 0 to skip pre-matching. Neighbors works together with Distance parameter, set both to 0 to not use pre-matching. Default: %(default)s");
_("Set this parameter if you want to generate a Google Earth (KMZ) rendering of the orthophoto. Default: %(default)s");
_("Path to the file containing the ground control points used for georeferencing. The file needs to use the following format: EPSG:<code> or <+proj definition>geo_x geo_y geo_z im_x im_y image_name [gcp_name] [extra1] [extra2]Default: %(default)s");
_("Reduce the memory usage needed for depthmap fusion by splitting large scenes into tiles. Turn this on if your machine doesn't have much RAM and/or you've set --pc-quality to high or ultra. Experimental. Default: %(default)s");
_("Radius of the overlap between submodels. After grouping images into clusters, images that are closer than this radius to a cluster are added to the cluster. This is done to ensure that neighboring submodels overlap. Default: %(default)s");
_("Average number of images per submodel. When splitting a large dataset into smaller submodels, images are grouped into clusters. This value regulates the number of images that each cluster should have on average. Default: %(default)s");
_("Minimum number of features to extract per image. More features can be useful for finding more matches between images, potentially allowing the reconstruction of areas with little overlap or insufficient features. More features also slow down processing. Default: %(default)s");
_("Distance threshold in meters to find pre-matching images based on GPS exif data. Set both matcher-neighbors and this to 0 to skip pre-matching. Default: %(default)s");
_("Skip the blending of colors near seams. Default: %(default)s");
_("Improve the accuracy of the point cloud by computing geometrically consistent depthmaps. This increases processing time, but can improve results in urban scenes. Default: %(default)s");
_("Computes an euclidean raster map for each DEM. The map reports the distance from each cell to the nearest NODATA value (before any hole filling takes place). This can be useful to isolate the areas that have been filled. Default: %(default)s");
_("Filters the point cloud by removing points that deviate more than N standard deviations from the local mean. Set to 0 to disable filtering. Default: %(default)s");
_("Set point cloud quality. Higher quality generates better, denser point clouds, but requires more memory and takes longer. Each step up in quality increases processing time roughly by a factor of 4x.Can be one of: %(choices)s. Default: %(default)s");
_("Skip generation of PDF report. This can save time if you don't need a report. Default: %(default)s");
_("Generate static tiles for orthophotos and DEMs that are suitable for viewers like Leaflet or OpenLayers. Default: %(default)s");
_("Ignore Ground Sampling Distance (GSD). GSD caps the maximum resolution of image outputs and resizes images when necessary, resulting in faster processing and lower memory usage. Since GSD is an estimate, sometimes ignoring it can result in slightly better image output quality. Default: %(default)s");
_("Choose the algorithm for extracting keypoints and computing descriptors. Can be one of: %(choices)s. Default: %(default)s");
_("Perform ground rectification on the point cloud. This means that wrongly classified ground points will be re-classified and gaps will be filled. Useful for generating DTMs. Default: %(default)s");
_("Build orthophoto overviews for faster display in programs such as QGIS. Default: %(default)s");
_("show this help message and exit");
_("Copy output results to this folder after processing.");
_("Octree depth used in the mesh reconstruction, increase to get more vertices, recommended values are 8-12. Default: %(default)s");
_("Turn off camera parameter optimization during bundle adjustment. This can be sometimes useful for improving results that exhibit doming/bowling or when images are taken with a rolling shutter camera. Default: %(default)s");
_("Set a camera projection type. Manually setting a value can help improve geometric undistortion. By default the application tries to determine a lens type from the images metadata. Can be one of: %(choices)s. Default: %(default)s");
_("Automatically crop image outputs by creating a smooth buffer around the dataset boundaries, shrinked by N meters. Use 0 to disable cropping. Default: %(default)s");
_("Number of steps used to fill areas with gaps. Set to 0 to disable gap filling. Starting with a radius equal to the output resolution, N different DEMs are generated with progressively bigger radius using the inverse distance weighted (IDW) algorithm and merged together. Remaining gaps are then merged using nearest neighbor interpolation. Default: %(default)s");
_("Skips dense reconstruction and 3D model generation. It generates an orthophoto directly from the sparse reconstruction. If you just need an orthophoto and do not need a full 3D model, turn on this option. Default: %(default)s");
_("Use the camera parameters computed from another dataset instead of calculating them. Can be specified either as path to a cameras.json file or as a JSON string representing the contents of a cameras.json file. Default: %(default)s");
_("Path to the image geolocation file containing the camera center coordinates used for georeferencing. Note that omega/phi/kappa are currently not supported (you can set them to 0). The file needs to use the following format: EPSG:<code> or <+proj definition>image_name geo_x geo_y geo_z [omega (degrees)] [phi (degrees)] [kappa (degrees)] [horz accuracy (meters)] [vert accuracy (meters)]Default: %(default)s");
_("Filters the point cloud by keeping only a single point around a radius N (in meters). This can be useful to limit the output resolution of the point cloud and remove duplicate points. Set to 0 to disable sampling. Default: %(default)s");
_("Set the radiometric calibration to perform on images. When processing multispectral and thermal images you should set this option to obtain reflectance/temperature values (otherwise you will get digital number values). [camera] applies black level, vignetting, row gradient gain/exposure compensation (if appropriate EXIF tags are found) and computes absolute temperature values. [camera+sun] is experimental, applies all the corrections of [camera], plus compensates for spectral radiance registered via a downwelling light sensor (DLS) taking in consideration the angle of the sun. Can be one of: %(choices)s. Default: %(default)s");
_("Type of photometric outlier removal method. Can be one of: %(choices)s. Default: %(default)s");
_("Skip generation of a full 3D model. This can save time if you only need 2D results such as orthophotos and DEMs. Default: %(default)s");
_("Orthophoto resolution in cm / pixel. Note that this value is capped by a ground sampling distance (GSD) estimate. To remove the cap, check --ignore-gsd also. Default: %(default)s");
_("Decimate the points before generating the DEM. 1 is no decimation (full quality). 100 decimates ~99%% of the points. Useful for speeding up generation of DEM results in very large datasets. Default: %(default)s");
_("Set feature extraction quality. Higher quality generates better features, but requires more memory and takes longer. Can be one of: %(choices)s. Default: %(default)s");
_("The maximum number of processes to use in various processes. Peak memory requirement is ~1GB per thread and 2 megapixel image resolution. Default: %(default)s");
_("Export the georeferenced point cloud in CSV format. Default: %(default)s");
_("Print debug messages. Default: %(default)s");
_("Keep faces in the mesh that are not seen in any camera. Default:  %(default)s");
_("Set a value in meters for the GPS Dilution of Precision (DOP) information for all images. If your images are tagged with high precision GPS information (RTK), this value will be automatically set accordingly. You can use this option to manually set it in case the reconstruction fails. Lowering this option can sometimes help control bowling-effects over large areas. Default: %(default)s");
_("Create Cloud-Optimized GeoTIFFs instead of normal GeoTIFFs. Default: %(default)s");
