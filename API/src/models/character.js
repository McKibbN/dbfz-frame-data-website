var mongoose = require("mongoose")

var CharacterSchema = new mongoose.Schema({
  charName: {
    type: String,
    required: true
  },
  moveList: [
    {
      assist: [
        {
          moveName: {
            type: String,
            required: true
          },
          moveData: [
            {
              generalProps: [
                {
                  damage: {
                    type: Number,
                    required: true
                  }
                }
              ]
            },
            {
              frameData: [
                {
                  startup: {
                    type: Number,
                    required: true
                  }
                },
                {
                  active: {
                    type: Number,
                    required: true
                  }
                },
                {
                  recovery: {
                    type: Number,
                    required: true
                  }
                },
                {
                  blockstun: {
                    type: Number,
                    required: true
                  }
                },
                {
                  hitstun: {
                    type: Number,
                    required: true
                  }
                }
              ]
            },
            {
              specialProps: [
                {
                  damage: {
                    type: Number,
                    required: true
                  }
                },
              ]
            }
          ]
        }
      ]
    },
    {
      normals: [
        {
          moveNotation: {
            type: String,
            required: true
          },
          moveData: [
            {
              generalProps: [
                {
                  damage: {
                    type: Number,
                    required: true
                  },
                  smashType: {
                    type: String,
                    required: false
                  },
                  guardType: {
                    type: String,
                    required: true
                  }
                }
              ]
            },
            {
              frameData: [
                {
                  startup: {
                    type: Number,
                    required: true
                  }
                },
                {
                  active: {
                    type: Number,
                    required: true
                  }
                },
                {
                  recovery: {
                    type: Number,
                    required: true
                  }
                },
                {
                  onBlock: {
                    type: Number,
                    required: true
                  }
                }
              ]
            },
            {
              specialProps: [
                {
                  armor: {
                    type: String,
                    required: false
                  },
                  invuln: {
                    type: String,
                    required: false
                  }
                },
              ]
            }
          ]
        }
      ]
    },
    {
      specials: [
        {
          moveName: {
            type: String,
            required: true
          },
          moveNotation: {
            type: String,
            required: true
          },
          moveData: [
            {
              generalProps: [
                {
                  damage: {
                    type: Number,
                    required: true
                  },
                  smashType: {
                    type: String,
                    required: false
                  },
                  guardType: {
                    type: String,
                    required: true
                  }
                }
              ]
            },
            {
              frameData: [
                {
                  startup: {
                    type: Number,
                    required: true
                  }
                },
                {
                  active: {
                    type: Number,
                    required: true
                  }
                },
                {
                  recovery: {
                    type: Number,
                    required: true
                  }
                },
                {
                  onBlock: {
                    type: Number,
                    required: true
                  }
                },
                {
                  onHit: {
                    type: Number,
                    required: false
                  }
                }
              ]
            },
            {
              specialProps: [
                {
                  armor: {
                    type: String,
                    required: false
                  },
                  invuln: {
                    type: String,
                    required: false
                  }
                },
              ]
            }
          ]
        }
      ]
    },
    {
      specials: [
        {
          moveName: {
            type: String,
            required: true
          },
          moveNotation: {
            type: String,
            required: true
          },
          moveData: [
            {
              generalProps: [
                {
                  damage: {
                    type: Number,
                    required: true
                  },
                  smashType: {
                    type: String,
                    required: false
                  },
                  guardType: {
                    type: String,
                    required: true
                  }
                }
              ]
            },
            {
              frameData: [
                {
                  startup: {
                    type: Number,
                    required: true
                  }
                },
                {
                  active: {
                    type: Number,
                    required: true
                  }
                },
                {
                  recovery: {
                    type: Number,
                    required: true
                  }
                },
                {
                  onBlock: {
                    type: Number,
                    required: true
                  }
                },
                {
                  onHit: {
                    type: Number,
                    required: false
                  }
                }
              ]
            },
            {
              specialProps: [
                {
                  armor: {
                    type: String,
                    required: false
                  },
                  invuln: {
                    type: String,
                    required: false
                  }
                },
              ]
            }
          ]
        }
      ]
    }
  ]
})

var Character = mongoose.model("Character", CharacterSchema);
module.exports = Character;
