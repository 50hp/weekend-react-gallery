CREATE TABLE pictures (
	id SERIAL PRIMARY KEY,
	path varchar(100),
	description varchar(240),
	likes int
);
INSERT INTO pictures ("path", "description", "likes") 
VALUES ('images/goat_small_1.jpg', 'Photo of a goat taken at Glacier National Park.', '10' ),
('images/goat_small_2.jpg', 'Photo of a goat taken at Glacier National Park.', '13' ),
('images/goat_small_3.jpg', '.ʞɹɐԀ ʅɐuoᴉʇɐN ɹǝᴉɔɐʅ⅁ ʇɐ uǝʞɐʇ ʇɐoƃ ɐ ⅎo oʇoɥԀ', '100' ),
('images/goat_small_4.jpg', 'Photo of a goat taken at Glacier National Park.', '20');
