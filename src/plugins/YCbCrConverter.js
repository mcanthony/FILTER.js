/**
*
* YCbCr Converter Plugin
* @package FILTER.js
*
**/
!function(FILTER){
@@USE_STRICT@@

var RGB2YCBCR=FILTER.Color.RGB2YCbCr;

// a plugin to convert an RGB Image to an YCbCr Image
FILTER.Create({
    name: "YCbCrConverterFilter"
    
    ,path: FILTER.getPath( exports.AMD )
    
    // this is the filter actual apply method routine
    ,apply: function(im, w, h) {
        // im is a copy of the image data as an image array
        // w is image width, h is image height
        // for this filter, no need to clone the image data, operate in-place
        var self = this;
        if ( !self._isOn ) return im;
        var r,g,b, i, l=im.length, ycbcr;
        
        for (i=0; i<l; i+=4)
        {
            //r = im[i]; g = im[i+1]; b = im[i+2];
            ycbcr = RGB2YCBCR(im.subarray(i,i+3));
            im[i] = ycbcr[2]; im[i+1] = ycbcr[0]; im[i+2] = ycbcr[1];
        }
        
        // return the new image data
        return im;
    }
});

}(FILTER);