export const testList = [
	{
		type: "attack",
		info:{
			who:{
				color: "green",
				name: "Hero"
			},
		  what:{
				abilityText: " smashed ",
				valueText: " for 200 damage"
			},
			to:{
				color: "red",
				name: "Goblin"
			}
		}
	},
	{
		type: "check-movement",
		info:{
			locations:[
				{
					name: "Easy",
					danger:5
				},
				{
					name: "Medium",
					danger:15
				},
				{
					name: "Hard",
					danger:25
				}
			]
		}
	},
	{
		type: "dialog",
		info:{
			what:"Hola como estas?",
			who:{
				name: "Village Joe",
				color: "gray"
			}
		}
	},
	{
		type: "event",
		info:{
			what:{
				text: "It's a trap!",
				color: "red"
			}
		}
	},
	{
		type: "movement",
		info:{
			hasParty:false,
			to: "Hell",
			color: "red"
		}
	},
	{
		type: "movement",
		info:{
			hasParty:true,
			to: "Heaven"
		}
	}
]
