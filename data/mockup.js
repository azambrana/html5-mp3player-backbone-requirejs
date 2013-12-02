define(
	[ /* Sin dependencias */ ],
	{
		"artists": [
			{
				"id": 1,
				"name": "Apocalyptica",
				"albums": [
					{
						"id": 1,
						"title": "Apocalyptica Plays Metallica",
						"year": 2008
					}
				],
			},
			{
				"id": 2,
				"name": "Aerosmith",
				"albums": [
					{
						"id": 2,
						"title": "Aerosmith album",
						"year": 2005
					}
				],
			},
			{
				"id": 3,
				"name": "Air Suply",
				"albums": [
					{
						"id": 3,
						"title": "Air Suply album",
						"year": 2000
					}
				],
			}
		],

		"files": [
			{
				"id": 1,
				"title": "Master of Puppets",
				"artist": 1, /*"Apocalyptica",*/
				"album": 1, /*"Apocalyptica Plays Metallica",*/
				"path": "Apocalyptica - Master of Puppets.mp3", /* relative path to /mp3 folder */
			},
			{
				"id": 2,
				"title": "Without You",
				"artist": 3,
				"album": 3,
				"path": "AIR SUPLY without you.mp3", /* relative path to /mp3 folder */
			},
			{
				"id": 3,
				"title": "Angel",
				"artist": 2,
				"album": 2,
				"path": "AEROSMITH angel.mp3", /* relative path to /mp3 folder */
			}
		],

		"playlists": [
			{
				"id": 1,
				"title": "Metal",
				"files": [
					1
				]
			},
			{
				"id": 2,
				"title": "Baladas",
				"files": [
					2, 3
				]
			}
		]
	}
);