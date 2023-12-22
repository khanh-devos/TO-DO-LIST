const path = require('path');


//https://kettanaito.com/blog/writing-custom-webpack-loader
module.exports = function (source) {
    const filename = path.basename(this.resourcePath);
    
    //create an asset from the filename.
    const assetInfo = { sourceFilename: filename }
    
    //building while bundling
    this.emitFile(filename, source, null, assetInfo)

    //Now the imported audio file will be 
    //emitted alongside our JavaScript modules
    return filename
}


// Mark the loader as "raw" 
// so that the emitted audio binary does not get processed in any way.
module.exports.raw = true;