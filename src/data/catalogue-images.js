// Image sets for the Design Source Catalogue: three Wikimedia Commons files per source,
// chosen to show the kind of material each site holds. They are stand-ins from Commons,
// not images taken from the sources themselves. Keyed by source name.
// `p` is the path after /wikipedia/commons/ (330px thumbnail).
const C = "https://upload.wikimedia.org/wikipedia/commons/";
const raw = {
  "Siteinspire": [
    ["thumb/7/79/Responsive_design_-_Commons_Android_app.jpg/330px-Responsive_design_-_Commons_Android_app.jpg", "Responsive layouts on four devices", "tfinc", "CC BY-SA 3.0"],
    ["thumb/0/0f/Wikimedia_Italia_website_screenshot_February_2021_-_homepage_desktop_full.jpg/330px-Wikimedia_Italia_website_screenshot_February_2021_-_homepage_desktop_full.jpg", "Full-page website screenshot, 2021", "Valerio Bozzolan", "CC BY-SA 3.0"],
    ["thumb/f/f2/Wolfplex-Wiki-WorkshopsIdeaList-wireframe-20130929-v02.png/330px-Wolfplex-Wiki-WorkshopsIdeaList-wireframe-20130929-v02.png", "Page wireframe", "Dereckson", "CC BY 3.0"],
  ],
  "A24 concept site": [
    ["thumb/3/3e/AGFA_Vista_200_35_mm_film_strip.jpg/330px-AGFA_Vista_200_35_mm_film_strip.jpg", "35 mm film strip", "Santeri Viinamäki", "CC BY-SA 4.0"],
    ["thumb/c/cf/Super-8-mm-film-on-a-spool-02.jpg/330px-Super-8-mm-film-on-a-spool-02.jpg", "Super 8 film on a spool", "CEphoto, Uwe Aranas", "CC BY-SA 3.0"],
    ["thumb/8/85/1950_-_Earl_Theater_Ticket_Stub.jpg/330px-1950_-_Earl_Theater_Ticket_Stub.jpg", "Earle Theatre ticket stub, 1950", "Unknown", "Public domain"],
  ],
  "Meng To": [
    ["thumb/c/cf/Notebooks-of-Leonardo-da-Vinci_Plate-XLVI_Sketches-for-The-Last-Supper.jpg/330px-Notebooks-of-Leonardo-da-Vinci_Plate-XLVI_Sketches-for-The-Last-Supper.jpg", "Notebook sketches for The Last Supper", "Leonardo da Vinci", "Public domain"],
    ["thumb/d/d8/Still-life_with_Book_and_Magnifying_Glass_-_Ozias_Leduc.jpg/330px-Still-life_with_Book_and_Magnifying_Glass_-_Ozias_Leduc.jpg", "Still life with book and magnifying glass", "Ozias Leduc", "Public domain"],
    ["thumb/b/bd/Magnifying_glass_on_the_page_of_a_book.jpg/330px-Magnifying_glass_on_the_page_of_a_book.jpg", "Magnifying glass on a book page", "Karbyn", "CC BY-SA 4.0"],
  ],
  "Visuelle": [
    ["thumb/2/22/AIP_Style_Manual_3ed_1978_-_Paperback_-_Standing_upright.jpg/330px-AIP_Style_Manual_3ed_1978_-_Paperback_-_Standing_upright.jpg", "AIP Style Manual, 1978", "Blue.painting", "CC BY-SA 4.0"],
    ["thumb/3/39/Wikimedia_Brand_Guidelines_Update_2022_-_Wikimedia_Typography_Usage.png/330px-Wikimedia_Brand_Guidelines_Update_2022_-_Wikimedia_Typography_Usage.png", "Brand guidelines: typography page", "Wikimedia Foundation", "CC BY-SA 4.0"],
    ["thumb/3/3e/WuXi_AppTec_Building_Signage_and_Logo_Detail_Shanghai_2026.jpg/330px-WuXi_AppTec_Building_Signage_and_Logo_Detail_Shanghai_2026.jpg", "Building signage and logo detail", "HelmiHelmiHelmi33", "CC0"],
  ],
  "Design Reviewed": [
    ["thumb/d/d2/Theo_van_Doesburg_Design_for_a_poster.jpg/330px-Theo_van_Doesburg_Design_for_a_poster.jpg", "Design for a poster", "Theo van Doesburg", "Public domain"],
    ["thumb/b/ba/%224%22_unit_exhibition_-_paintings%2C_prints%2C_sculpture%2C_murals_LCCN98513641-restored.jpg/330px-%224%22_unit_exhibition_-_paintings%2C_prints%2C_sculpture%2C_murals_LCCN98513641-restored.jpg", "WPA exhibition poster", "WPA Poster Collection", "Public domain"],
    ["thumb/0/02/McCall%27s_Magazine_1930-07_%28page_52%29.jpg/330px-McCall%27s_Magazine_1930-07_%28page_52%29.jpg", "McCall's Magazine page, 1930", "Various", "Public domain"],
  ],
  "Letterform Archive": [
    ["thumb/9/9d/Type_furniture.jpg/330px-Type_furniture.jpg", "Wood type and furniture", "Edinburgh City of Print", "CC BY 2.0"],
    ["thumb/9/96/The_church_bells_of_Kent-_their_inscriptions%2C_founders%2C_uses%2C_and_traditions_%281887%29_%2814595640778%29.jpg/330px-The_church_bells_of_Kent-_their_inscriptions%2C_founders%2C_uses%2C_and_traditions_%281887%29_%2814595640778%29.jpg", "Decorated capitals, 1887", "Internet Archive Book Images", "No restrictions"],
    ["thumb/6/63/Print%2C_Plate_XIV%2C_from_the_%22Exercitatio_Alphabetica%22%2C_1568%E2%80%9369_%28CH_18565563%29.jpg/330px-Print%2C_Plate_XIV%2C_from_the_%22Exercitatio_Alphabetica%22%2C_1568%E2%80%9369_%28CH_18565563%29.jpg", "Exercitatio Alphabetica, plate XIV, 1568", "Cornelis de Hooghe", "Public domain"],
  ],
  "Typotheque": [
    ["thumb/1/17/Maithili_in_Devanagari_and_Tirhuta.png/330px-Maithili_in_Devanagari_and_Tirhuta.png", "Maithili in Devanagari and Tirhuta", "Maithil hoon", "CC0"],
    ["thumb/a/aa/Devanagari_01.jpg/330px-Devanagari_01.jpg", "Devanagari lettering", "Herman Blondeel", "CC BY-SA 4.0"],
    ["thumb/2/20/Bhajuram_Karmacharya%E2%80%99s_Saptakanda_Ramayana%2C_Newar_language%2C_Devanagari_script%2C_1818_CE.jpg/330px-Bhajuram_Karmacharya%E2%80%99s_Saptakanda_Ramayana%2C_Newar_language%2C_Devanagari_script%2C_1818_CE.jpg", "Saptakanda Ramayana in Devanagari, 1818", "Bhajuram Karmacharya", "CC0"],
  ],
  "CARI": [
    ["thumb/d/dc/Sony_Walkman_WM-2013.jpg/330px-Sony_Walkman_WM-2013.jpg", "Sony Walkman", "Accurimbono", "CC BY-SA 4.0"],
    ["thumb/9/92/Memphis-Milano_Design_Collection.jpg/330px-Memphis-Milano_Design_Collection.jpg", "Memphis-Milano collection", "Dennis Zanone", "CC BY-SA 3.0"],
    ["thumb/1/1b/Acorn_Atom_1981.jpg/330px-Acorn_Atom_1981.jpg", "Acorn Atom, 1981", "Simon Inns", "CC BY 2.0"],
  ],
  "Ephemera Society": [
    ["thumb/0/0d/Victorian_Trade_Card_-_Wistar%27s_Balsam.jpg/330px-Victorian_Trade_Card_-_Wistar%27s_Balsam.jpg", "Victorian trade card", "David Berry", "CC BY 2.0"],
    ["thumb/4/42/1953_SJ_Sweden_Edmondson_supplement_train_ticket_outbound_Gothenburg_Sweden_view_1.jpg/330px-1953_SJ_Sweden_Edmondson_supplement_train_ticket_outbound_Gothenburg_Sweden_view_1.jpg", "Edmondson train ticket, 1953", "R. Henrik Nilsson", "CC BY 4.0"],
    ["thumb/f/f2/Matchbox_label_-_Matchbox_Label_India_1920s-30s_-_India_%28circa_1920s%29_-_MBP1121262444.jpg/330px-Matchbox_label_-_Matchbox_Label_India_1920s-30s_-_India_%28circa_1920s%29_-_MBP1121262444.jpg", "Indian matchbox label, 1920s", "Unknown", "Public domain"],
  ],
  "Illustration.lol": [
    ["thumb/1/1b/The_The_Designer_Women%E2%80%99s_Magazine%2C_July_1922_cover%2C_illustration_by_Edward_Mason_Eggleston.png/330px-The_The_Designer_Women%E2%80%99s_Magazine%2C_July_1922_cover%2C_illustration_by_Edward_Mason_Eggleston.png", "The Designer cover, 1922", "Edward Mason Eggleston", "Public domain"],
    ["thumb/3/36/PP_D307_poster_by_edward_penfield_for_harper%27s_bazaar_cover.jpg/330px-PP_D307_poster_by_edward_penfield_for_harper%27s_bazaar_cover.jpg", "Harper's Bazar poster", "Edward Penfield", "Public domain"],
    ["thumb/7/7a/PP_D309_poster_by_edward_penfield_for_harper%27s_bazaar_cover.jpg/330px-PP_D309_poster_by_edward_penfield_for_harper%27s_bazaar_cover.jpg", "Harper's Bazar poster", "Edward Penfield", "Public domain"],
  ],
  "Sternberg Press": [
    ["thumb/f/f6/Modern_paperback_spines_in_TPL_FastBook_20190813.jpg/330px-Modern_paperback_spines_in_TPL_FastBook_20190813.jpg", "Paperback spines", "Easo Lomsgiar", "CC BY-SA 4.0"],
    ["thumb/a/a0/Nike_book_series.jpg/330px-Nike_book_series.jpg", "A book series", "Adrian Tync", "CC BY-SA 4.0"],
    ["thumb/a/a7/%E6%9C%89%E6%B2%B3book_DSCN5589_%283675805271%29.jpg/330px-%E6%9C%89%E6%B2%B3book_DSCN5589_%283675805271%29.jpg", "Bookshop shelves", "Shou-Hui Wang", "CC BY-SA 2.0"],
  ],
  "Inventory Press": [
    ["thumb/7/7e/Schlagwortkatalog.jpg/330px-Schlagwortkatalog.jpg", "Subject card catalogue", "Marcus Gossler", "CC BY-SA 3.0"],
    ["thumb/8/85/Atlas_maior_1655_-_vol_10_-_Novus_Atlas_Sinensis_-_index_-_P1080375.JPG/330px-Atlas_maior_1655_-_vol_10_-_Novus_Atlas_Sinensis_-_index_-_P1080375.JPG", "Index of the Atlas Maior, 1655", "Martino Martini", "Public domain"],
    ["thumb/1/13/Network_graph_visualization_showing_bibliography_and_keywords.png/330px-Network_graph_visualization_showing_bibliography_and_keywords.png", "Bibliography network graph", "Ecpp", "CC BY-SA 4.0"],
  ],
  "Pilot Magazine": [
    ["thumb/1/11/Game_of_Secession%2C_or_Sketches_of_the_Rebellion%2C_the_Civil_War_board_game.jpg/330px-Game_of_Secession%2C_or_Sketches_of_the_Rebellion%2C_the_Civil_War_board_game.jpg", "Printed board game, 1860s", "Charlton & Althrop", "Public domain"],
    ["thumb/c/c2/Impress%C3%A3o_em_risografia_em_dua_cores%2C_2014.jpg/330px-Impress%C3%A3o_em_risografia_em_dua_cores%2C_2014.jpg", "Two-colour risograph print", "Mario Felipe", "CC BY 2.0"],
    ["thumb/1/18/Risograph_printing.jpg/330px-Risograph_printing.jpg", "Risograph printing", "Quinn Daedal", "CC BY-SA 2.0"],
  ],
  "Kinfolk": [
    ["thumb/6/6f/Tea_bowl%2C_Kiirabo_type%2C_by_Nin%27ami_Dohachi%2C_Edo_period%2C_1800s_AD%2C_ceramic_-_Tokyo_National_Museum_-_Tokyo%2C_Japan_-_DSC09325.jpg/330px-Tea_bowl%2C_Kiirabo_type%2C_by_Nin%27ami_Dohachi%2C_Edo_period%2C_1800s_AD%2C_ceramic_-_Tokyo_National_Museum_-_Tokyo%2C_Japan_-_DSC09325.jpg", "Tea bowl, Edo period", "Daderot", "Public domain"],
    ["thumb/7/75/Vilhelm_Hammersh%C3%B8i_-_G%C3%A5rdinteri%C3%B8r._Strandgade_30.jpg/330px-Vilhelm_Hammersh%C3%B8i_-_G%C3%A5rdinteri%C3%B8r._Strandgade_30.jpg", "Courtyard interior, Strandgade 30", "Vilhelm Hammershøi", "Public domain"],
    ["thumb/8/8f/Tea_bowl_by_Kita%C5%8Dji_Rosanjin%2C_Honolulu_Museum_of_Art_8828.1.JPG/330px-Tea_bowl_by_Kita%C5%8Dji_Rosanjin%2C_Honolulu_Museum_of_Art_8828.1.JPG", "Tea bowl", "Kitaōji Rosanjin (photo: Hiart)", "Public domain"],
  ],
  "Bloomsbury Visual Arts": [
    ["thumb/c/ca/Moses_Harris%2C_Prismatic_Colour_Wheel%2C_1766.jpg/330px-Moses_Harris%2C_Prismatic_Colour_Wheel%2C_1766.jpg", "Prismatic colour wheel, 1766", "Moses Harris", "CC BY-SA 4.0"],
    ["thumb/9/94/Runge_Farbenkugel.jpg/330px-Runge_Farbenkugel.jpg", "Colour sphere, 1810", "Philipp Otto Runge", "Public domain"],
    ["thumb/6/67/Golden_Rectangle_Construction2.png/330px-Golden_Rectangle_Construction2.png", "Golden rectangle construction", "Dicklyon", "Public domain"],
  ],
  "Public Domain Review": [
    ["thumb/6/6f/Anemone_simple._Redout%C3%A9%2C_P.J.%2C_Choix_des_plus_belles_fleurs_et_des_plus_beaux_fruits_t._107_%281827%29.tiff/lossless-page1-330px-Anemone_simple._Redout%C3%A9%2C_P.J.%2C_Choix_des_plus_belles_fleurs_et_des_plus_beaux_fruits_t._107_%281827%29.tiff.png", "Anemone, 1827", "P. J. Redouté", "Public domain"],
    ["thumb/1/17/Three-dimensional_anatomical_diagram_of_human_head_-_DPLA_-_3a3aa0906aece5fea0c4770a8318b637_%28page_2%29.jpg/330px-Three-dimensional_anatomical_diagram_of_human_head_-_DPLA_-_3a3aa0906aece5fea0c4770a8318b637_%28page_2%29.jpg", "Anatomical flap diagram of the head", "Henry M. Lyman", "Public domain"],
    ["thumb/2/29/Ca._1710_celestial_map_by_Georg_Christoph_Eimmart.jpg/330px-Ca._1710_celestial_map_by_Georg_Christoph_Eimmart.jpg", "Celestial map, c. 1710", "Georg Christoph Eimmart", "Public domain"],
  ],
  "Public Work": [
    ["thumb/7/72/Hiroshige%2C_Sudden_shower_over_Shin-%C5%8Chashi_bridge_and_Atake%2C_1857.jpg/330px-Hiroshige%2C_Sudden_shower_over_Shin-%C5%8Chashi_bridge_and_Atake%2C_1857.jpg", "Sudden shower over Shin-Ōhashi bridge, 1857", "Utagawa Hiroshige", "Public domain"],
    ["thumb/b/bf/Winslow_Homer_-_The_Gulf_Stream_-_Metropolitan_Museum_of_Art.jpg/330px-Winslow_Homer_-_The_Gulf_Stream_-_Metropolitan_Museum_of_Art.jpg", "The Gulf Stream (The Met)", "Winslow Homer", "Public domain"],
    ["thumb/6/6e/Hotel_Somerset_white_border_postcard_%28NYPL_b12647398-73839%29.tiff/lossy-page1-330px-Hotel_Somerset_white_border_postcard_%28NYPL_b12647398-73839%29.tiff.jpg", "Postcard (NYPL)", "Scan by NYPL", "Public domain"],
  ],
  "Artvee": [
    ["thumb/a/a9/Haeckel_Actiniae.jpg/330px-Haeckel_Actiniae.jpg", "Actiniae, Kunstformen der Natur", "Ernst Haeckel", "Public domain"],
    ["thumb/4/40/The_Kiss_-_Gustav_Klimt_-_Google_Cultural_Institute.jpg/330px-The_Kiss_-_Gustav_Klimt_-_Google_Cultural_Institute.jpg", "The Kiss", "Gustav Klimt", "Public domain"],
    ["thumb/8/85/Ludwig_Hohlwein_-_Poster_Audi_Automobil-Werke.jpg/330px-Ludwig_Hohlwein_-_Poster_Audi_Automobil-Werke.jpg", "Audi poster", "Ludwig Hohlwein", "Public domain"],
  ],
  "Wikimedia Commons": [
    ["thumb/e/e8/Tuscan_Landscape_7.JPG/330px-Tuscan_Landscape_7.JPG", "Tuscan landscape", "Martin Falbisoner", "CC BY-SA 3.0"],
    ["thumb/d/d5/Photocopy_of_photograph_%28original_negative_in_the_possession_of_the_Allen_County_Museum%2C_Ebesole_Studio_Glass_Plate_Negative_Collection%2C_circa_1900%29%2C_photographer_unknown_VIEW_HABS_OHIO%2C2-LIMA%2C1A-14.tif/lossy-page1-330px-thumbnail.tif.jpg", "Glass-plate street view, c. 1900", "Unknown (HABS)", "Public domain"],
    ["thumb/9/9c/Turritidae-mollusks-Bartsch%281934%29-plate-5.png/330px-Turritidae-mollusks-Bartsch%281934%29-plate-5.png", "Shell plate, 1934", "Paul Bartsch", "Public domain"],
  ],
  "Century Library": [
    ["thumb/4/49/C188a713_01.jpg/330px-C188a713_01.jpg", "Decorated book binding", "Southwold1966", "CC0"],
    ["thumb/6/66/Nancy_and_the_Coggs_twins_decorative_letter_R.png/330px-Nancy_and_the_Coggs_twins_decorative_letter_R.png", "Decorative initial R", "John Goss", "Public domain"],
    ["thumb/b/b8/Dark_Damaged_Old_Vintage_Book_Paper_Pages_Free_High_Resolution_Wallpaper_Texture_Creative_Commons_%288077075546%29.jpg/330px-Dark_Damaged_Old_Vintage_Book_Paper_Pages_Free_High_Resolution_Wallpaper_Texture_Creative_Commons_%288077075546%29.jpg", "Old paper texture", "Pink Sherbet Photography", "CC BY 2.0"],
  ],
  "Lummi": [
    ["thumb/1/1c/This_Person_Does_Not_Exist_example.jpg/330px-This_Person_Does_Not_Exist_example.jpg", "AI-generated portrait", "StyleGAN2", "Public domain"],
    ["thumb/5/59/Alpaca_sticker_03.jpg/330px-Alpaca_sticker_03.jpg", "AI-generated sticker illustration", "Leonardo AI", "Public domain"],
    ["thumb/0/00/X-Y_plot_of_algorithmically-generated_photorealistic_portraits_by_nationality.png/330px-X-Y_plot_of_algorithmically-generated_photorealistic_portraits_by_nationality.png", "Grid of generated portraits", "Benlisquare", "CC BY-SA 4.0"],
  ],
  "Made by Attic": [
    ["thumb/b/b7/Shinkansen_N700S_design_package_box_by_Osu_Uiro.jpg/330px-Shinkansen_N700S_design_package_box_by_Osu_Uiro.jpg", "Designed packaging box", "Dr.yellow", "CC BY-SA 4.0"],
    ["thumb/f/fb/Vote_poster_on_a_Station_Road_wall%2C_Sidmouth_-_geograph.org.uk_-_5399602.jpg/330px-Vote_poster_on_a_Station_Road_wall%2C_Sidmouth_-_geograph.org.uk_-_5399602.jpg", "Poster on a street wall", "Jaggery", "CC BY-SA 2.0"],
    ["thumb/9/97/Billboard_advertisement_for_Miami_Beach_%288900864753%29.jpg/330px-Billboard_advertisement_for_Miami_Beach_%288900864753%29.jpg", "Billboard for Miami Beach", "State Library and Archives of Florida", "Public domain"],
  ],
  "Creatoom": [
    ["thumb/a/a9/Archiving_the_Present_book_cover_and_book_stack.jpg/330px-Archiving_the_Present_book_cover_and_book_stack.jpg", "Book cover and stack", "Siddhesh Gautam", "CC BY-SA 4.0"],
    ["thumb/8/8b/Laptop_on_a_neat_desk_%28Unsplash%29.jpg/330px-Laptop_on_a_neat_desk_%28Unsplash%29.jpg", "Laptop on a desk", "Norbert Levajsics", "CC0"],
    ["thumb/c/c0/Des-_sort_of_digging_the_design_of_this_women%27s_health_magazine._Nice_paper%2C_size%2C_%26_consistent_spreads.jpg/330px-Des-_sort_of_digging_the_design_of_this_women%27s_health_magazine._Nice_paper%2C_size%2C_%26_consistent_spreads.jpg", "Magazine spreads", "Jessica Mullen", "CC BY 2.0"],
  ],
  "Mockups Supply": [
    ["thumb/0/08/Albert_Heijn_paper_shopping_bag_%282019%29_03.jpg/330px-Albert_Heijn_paper_shopping_bag_%282019%29_03.jpg", "Printed paper shopping bag", "Donald Trung Quoc Don", "CC BY-SA 4.0"],
    ["thumb/0/02/Desk-laptop-working-technology_%2824299511976%29.jpg/330px-Desk-laptop-working-technology_%2824299511976%29.jpg", "Laptop screen on a desk", "Pixel.la", "CC0"],
    ["thumb/6/60/Nigeria%2C_billboard_advertisement_for_Raleigh_Bicycles.png/330px-Nigeria%2C_billboard_advertisement_for_Raleigh_Bicycles.png", "Raleigh Bicycles billboard, Nigeria", "Harrison Forman", "Public domain"],
  ],
  "Cosmos": [
    ["thumb/0/0d/Photo_collage%2C_Montage%2C_Mood_board%2C_Rostov-on-Don%2C_Russia.jpg/330px-Photo_collage%2C_Montage%2C_Mood_board%2C_Rostov-on-Don%2C_Russia.jpg", "Photo mood board", "Vyacheslav Argenberg", "CC BY 4.0"],
    ["thumb/6/6c/FREETONE_WHITE_1800x1800.webp/330px-FREETONE_WHITE_1800x1800.webp", "Freetone colour chart", "Stuart Semple", "Public domain"],
    ["7/7d/Spectrum_color_swatch.png", "Spectrum swatch", "Jax MN", "CC0"],
  ],
  "Are.na": [
    ["thumb/1/1f/Bulletin_Board_Texture.jpg/330px-Bulletin_Board_Texture.jpg", "Cork board", "JOGOS Public Assets", "CC BY-SA 4.0"],
    ["thumb/c/cd/State_Library_of_Victoria_La_Trobe_Reading_room_5th_floor_view.jpg/330px-State_Library_of_Victoria_La_Trobe_Reading_room_5th_floor_view.jpg", "La Trobe Reading Room", "Diliff", "CC BY 2.5"],
    ["thumb/9/9d/Archive_boxes_2.JPG/330px-Archive_boxes_2.JPG", "Archive boxes", "Effeietsanders", "CC BY-SA 2.5"],
  ],
  "Designspiration": [
    ["thumb/f/f4/Die_Farbschule._Eine_Anleitung_zur_praktischen_Erlernung_der_wissenschaftlichen_Farbenlehre_-_DPLA_-_4caf681c8efb13961926b32074e1eb27_%28page_69%29.jpg/330px-Die_Farbschule._Eine_Anleitung_zur_praktischen_Erlernung_der_wissenschaftlichen_Farbenlehre_-_DPLA_-_4caf681c8efb13961926b32074e1eb27_%28page_69%29.jpg", "Die Farbschule colour plate", "Wilhelm Ostwald", "Public domain"],
    ["thumb/c/cb/A_nomenclature_of_colors_for_naturalists_-_and_compendium_of_useful_knowledge_for_ornithologists._%281886%29_%2814757819126%29.jpg/330px-A_nomenclature_of_colors_for_naturalists_-_and_compendium_of_useful_knowledge_for_ornithologists._%281886%29_%2814757819126%29.jpg", "A nomenclature of colors, 1886", "Robert Ridgway", "No restrictions"],
    ["thumb/e/e9/SETPAPER_TM_50_Colors_%2811768391694%29.jpg/330px-SETPAPER_TM_50_Colors_%2811768391694%29.jpg", "50 paper colours", "kouji OOTA", "CC BY 2.0"],
  ],
};

// File page on Commons, worked out from the image path.
const fileOf = (p) => (p.startsWith("thumb/") ? p.split("/")[3] : p.split("/")[2]);
export const IMG = Object.fromEntries(
  Object.entries(raw).map(([k, list]) => [
    k,
    list.map(([p, title, by, lic]) => ({
      src: C + p,
      big: p.startsWith("thumb/") ? C + p.replace("330px-", "500px-") : C + p,
      page: "https://commons.wikimedia.org/wiki/File:" + fileOf(p),
      title, by, lic,
    })),
  ])
);
