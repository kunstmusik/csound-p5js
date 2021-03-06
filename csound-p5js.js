/** Csound p5.js Example
 *  Author: Steven Yi <stevenyi@gmail.com>
 *  Description: Application code to load Csound, livecode.orc, and 
 *  run custom Csound code embedded within JS file.
 */

// Signals when csound is loaded and used from sketch.js file
var csoundLoaded = false;
var cs = null;

// Using ES6 template literal to put in multiline string 
var myCsoundCode = `

seed(0)

instr Runner

  Sinstr = sprintf("Sub%d", rand(array(2, 1, 3)))
  schedule(Sinstr, 0, p3 * rand(array(1,2,4,8)),
    		in_scale(rand(array(-2,0,2)), rand(array(0, 4, 7))),
    		ampdbfs(rand(array(-16, -20, -24, -30))))

  schedule(p1, p3 * random(1, 4), p3)
endin

schedule("Runner", 0, 11)
schedule("Runner", 2, 7)
schedule("Runner", 1, 2)
`;

// Called when Csound WASM completes loading
function setupCsound() {
  fetch('livecode.orc').then((response) => {
    return response.text().then((txt) => {

      cs = new CsoundObj();
      cs.setOption("-m0");
      cs.compileOrc(
        "sr=48000\nksmps=32\n0dbfs=1\nnchnls=2\n" + txt + myCsoundCode)
      cs.start(); 
      CSOUND_AUDIO_CONTEXT.resume();
      csoundLoaded = true;
    }); 
  });
}


CsoundObj.importScripts("./csound/").then(() => {
  setupCsound();
});

