AFRAME.registerComponent("scuba-diver", {
  init: function () {
    this.el.setAttribute('gltf-model', '#scuba-diver-model');
  }


.const,scubaDiverModel = `
{
  "scene": {
    "nodes": [
      {
        "name": "scuba-diver",
        "mesh": 1,
        "skin": 0,
        "primitive": {
          "type": "SkinnedMesh"
        },
        "material": 0,
        "animation": [
          {
            "name": "Armature",
            "fps": 25,
            "tracks": [
              {
                "name": "Hips",
                "node": 0,
                "tracks": [
                  {
                    "name": "translation",
                    "times": [0, 0.1],
                    "values": [0, 0, 0],
                    "easing": "linear"
                  }
                ]
              }
            ]
          }
        ]
      }
    ]
  }
}
`,

AFRAME.registerAsset("scuba-diver-model", {
  type: 'json',
  value: scubaDiverModel
}),
});
coinEL.setAttribute("static-body",{
  shape:"shpere",
  shpereRadius:2
});