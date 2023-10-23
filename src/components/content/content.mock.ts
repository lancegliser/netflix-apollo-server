import { ContentItem } from "../../generated/types";

// Source: https://github.com/prust/wikipedia-movie-data/blob/master/movies-2020s.json
export const mockItems = [
  {
    displayImageUrl:
      "https://upload.wikimedia.org/wikipedia/en/c/c9/Cinderella_%282021_film%29.jpg",
    displayName: "Cinderella",
    format: "Movie",
    genres: ["Musical", "Romance"],
    summary:
      "Cinderella is a 2021 romantic musical film based on the fairy tale of the same name by Charles Perrault. Written and directed by Kay Cannon, it stars singer Camila Cabello as the title character in her acting debut, alongside Idina Menzel, Minnie Driver, Nicholas Galitzine, Billy Porter, and Pierce Brosnan. It is a jukebox musical, featuring pop and rock hits, in addition to several original songs.",
    id: "555c3fbd-0fd5-4aad-a3d5-18b2879b827e",
    rating: 0.8017171731103594,
  },
  {
    displayImageUrl:
      "https://upload.wikimedia.org/wikipedia/en/9/92/Worth_%28film%29.jpg",
    displayName: "Worth",
    format: "Movie",
    genres: ["Biography"],
    summary:
      "Worth is a 2020 biographical film directed by Sara Colangelo from a screenplay by Max Borenstein and starring Michael Keaton, Amy Ryan, Stanley Tucci, Tate Donovan, Shunori Ramanathan, and Laura Benanti. The film depicts Kenneth Feinberg's handling of the September 11th Victim Compensation Fund. The picture had its world premiere at the Sundance Film Festival on January 24, 2020 and was exhibited in a limited theatrical release and on Netflix beginning September 3, 2021.",
    id: "4fe65be2-3f27-47e8-b243-3d1dd78dec5d",
    rating: 0.4185778023795228,
  },
  {
    displayImageUrl:
      "https://upload.wikimedia.org/wikipedia/en/f/f3/The_Gateway_%28film%29.jpg",
    displayName: "The Gateway",
    format: "Movie",
    genres: ["Crime", "Thriller"],
    summary:
      "The Gateway is an American crime thriller film directed by Michele Civetta and starring Shea Whigham, Olivia Munn and Frank Grillo. The screenplay, written by Alexander Felix and originally titled Where Angels Die, was included in the 2013 Black List. The film was released in theaters and on VOD on September 3, 2021.",
    id: "8ea149b0-a361-42a3-8353-411c0499f4a8",
    rating: 0.7281426323995759,
  },
  {
    displayImageUrl:
      "https://upload.wikimedia.org/wikipedia/en/d/df/Wild_Indian_poster.jpg",
    displayName: "Wild Indian",
    format: "Movie",
    genres: ["Thriller"],
    summary:
      "Wild Indian is a 2021 American thriller film written and directed by Lyle Mitchell Corbine Jr. The film stars Michael Greyeyes and Chaske Spencer with Jesse Eisenberg and Kate Bosworth. The film was supported by the Sundance Institute through the Writers and Directors Labs.",
    id: "fb4f5bae-06c4-4a25-8f4e-f1488e43ac30",
    rating: 0.8302749422380951,
  },
  {
    displayImageUrl:
      "https://upload.wikimedia.org/wikipedia/en/e/e2/We_Need_to_Do_Something.jpg",
    displayName: "We Need to Do Something",
    format: "Movie",
    genres: ["Horror"],
    summary:
      "We Need to Do Something is a 2021 American psychological horror film directed by Sean King O'Grady and starring Sierra McCormick, Vinessa Shaw, Lisette Alexis, Pat Healy, and Ozzy Osbourne. Based on the novella of the same name, the film centers on a family trapped in their bathroom during a tornado. The film was shot during the COVID-19 pandemic and is the first film production from Spin a Black Yarn Productions, with its co-founders Josh Malerman and Ryan Lewis serving as producers.",
    id: "75472a7e-6b1f-420e-929b-bb42bb8c5881",
    rating: 0.08045321444623355,
  },
  {
    displayImageUrl:
      "https://upload.wikimedia.org/wikipedia/en/e/e5/Kate_%28film%29.jpg",
    displayName: "Kate",
    format: "Movie",
    genres: ["Action", "Thriller"],
    summary:
      "Kate is a 2021 American action thriller film directed by Cedric Nicolas-Troyan and written by Umair Aleem. The film stars Mary Elizabeth Winstead, Miku Martineau, Woody Harrelson, Tadanobu Asano, Michiel Huisman, Miyavi, and Jun Kunimura. The film follows Kate (Winstead), an assassin, whose mentor and handler (Harrelson) assigns her to kill a high-ranking yakuza boss. During Kate's final mission, she finds out that she has been poisoned and has at most a day to live, so she uses her last hours to get revenge and find out who set her up.",
    id: "bebc4b94-16f4-41f4-9fb0-d173422ab09c",
    rating: 0.4772623452478193,
  },
  {
    displayImageUrl:
      "https://upload.wikimedia.org/wikipedia/en/c/c6/Everybody%27s_Talking_About_Jamie_%28film%29.png",
    displayName: "Everybody's Talking About Jamie",
    format: "Movie",
    genres: ["Comedy", "Drama", "Musical", "Biography"],
    summary:
      "Everybody's Talking About Jamie is a 2021 biographical coming-of-age musical comedy-drama film directed by Jonathan Butterell from a screenplay by Tom MacRae based on the stage musical of the same name, which in turn was adapted from the BBC Three documentary Jamie: Drag Queen at 16 by Jenny Popplewell. The film stars newcomer Max Harwood with Sarah Lancashire, Lauren Patel, Shobna Gulati, Ralph Ineson, Adeel Akhtar, Samuel Bottomley, Sharon Horgan, and Richard E. Grant. The story follows and is based upon the true-life story of 16-year-old British schoolboy Jamie Campbell, as he overcomes prejudice and bullying, to step out of the darkness and become a drag queen.",
    id: "c0f68f72-de4d-40c6-a063-ace1a5b64dea",
    rating: 0.30549146258600857,
  },
  {
    displayImageUrl:
      "https://upload.wikimedia.org/wikipedia/en/e/ee/Malignant2021poster.jpg",
    displayName: "Malignant",
    format: "Movie",
    genres: ["Horror"],
    summary:
      "Malignant is a 2021 American horror film directed by James Wan from a screenplay by Akela Cooper, based on a story by Wan, Ingrid Bisu, and Cooper. The film stars Annabelle Wallis as a woman who begins to have visions of people being murdered, only to realize the events are happening in real life. Maddie Hasson, George Young, Michole Briana White, and Jacqueline McKenzie also star.",
    id: "70aff487-1e46-4977-a3e9-46622cd33f9a",
    rating: 0.4267260251301479,
  },
  {
    displayImageUrl:
      "https://upload.wikimedia.org/wikipedia/en/7/75/Queenpins_poster.jpg",
    displayName: "Queenpins",
    format: "Movie",
    genres: ["Comedy"],
    summary:
      "Queenpins is a 2021 American comedy film written and directed by Aron Gaudet and Gita Pullapilly. It stars Kristen Bell, Kirby Howell-Baptiste, Paul Walter Hauser, Bebe Rexha, and Vince Vaughn. Ben Stiller serves as an executive producer under his Red Hour Productions banner.",
    id: "0c20ee9a-ba18-4606-a750-ac2b2451a505",
    rating: 0.14316928744657798,
  },
  {
    displayImageUrl:
      "https://upload.wikimedia.org/wikipedia/en/2/21/The_Card_Counter_%282021%29_film_poster.jpg",
    displayName: "The Card Counter",
    format: "Movie",
    genres: ["Crime", "Drama"],
    summary:
      "The Card Counter is a 2021 American crime drama film written and directed by Paul Schrader. It stars Oscar Isaac, Tiffany Haddish, Tye Sheridan, and Willem Dafoe. Martin Scorsese is an executive producer.",
    id: "adcf17fe-46de-4c22-8b8d-a82d2f27a89f",
    rating: 0.8466387470946397,
  },
  {
    displayImageUrl:
      "https://upload.wikimedia.org/wikipedia/en/a/a9/Come_from_Away.jpg",
    displayName: "Come from Away",
    format: "Movie",
    genres: ["Musical"],
    summary:
      "Come from Away is a 2021 American-Canadian musical film comprising a live stage recording of Irene Sankoff and David Hein's 2017 musical of the same name, which tells the true story of 7,000 airline passengers who were stranded in a small town in Newfoundland, where they were housed and welcomed, after the September 11, 2001 terrorist attacks. The film, produced in response to the shutdown of Broadway caused by the COVID-19 pandemic in the spring of 2020, was directed by Christopher Ashley and filmed in front of an audience of frontline workers and 9/11 survivors on May 2021 at the Gerald Schoenfeld Theater in New York City, featuring members of the Broadway cast.",
    id: "fe818bc1-20b3-4f0a-90a9-03ac1823fd1f",
    rating: 0.6555468271444314,
  },
  {
    displayImageUrl:
      "https://upload.wikimedia.org/wikipedia/en/2/23/The_Voyeurs_poster.jpeg",
    displayName: "The Voyeurs",
    format: "Movie",
    genres: ["Erotic", "Thriller"],
    summary:
      "The Voyeurs is a 2021 American erotic thriller film written and directed by Michael Mohan. Shot and set in Montreal, Quebec, Canada, it stars Sydney Sweeney and Justice Smith as a young couple who spy on and become obsessed by the lives of their neighbors across the street. Greg Gilreath and Adam Hendricks serve as producers under their Divide/Conquer banner.",
    id: "d2b15046-f7bd-48a7-969e-2a612e2fe324",
    rating: 0.8815632605740489,
  },
  {
    displayImageUrl:
      "https://upload.wikimedia.org/wikipedia/en/2/22/Small_Engine_Repair.jpg",
    displayName: "Small Engine Repair",
    format: "Movie",
    genres: ["Comedy", "Drama"],
    summary:
      "Small Engine Repair is a 2021 American black comedy drama film written and directed by John Pollono based on Pollono's play of the same name.",
    id: "2369f1f8-c462-45d5-93b1-8c23a7afc1b2",
    rating: 0.8673879754493283,
  },
  {
    displayImageUrl:
      "https://upload.wikimedia.org/wikipedia/en/4/46/Language_Lessons_poster.jpeg",
    displayName: "Language Lessons",
    format: "Movie",
    genres: ["Drama"],
    summary:
      "Language Lessons is a 2021 American drama film directed by Natalie Morales and written by Morales and Mark Duplass. The film stars Morales, Duplass and Desean Terry.",
    id: "62dd996c-2cfc-43e3-a3a0-64e1528752bb",
    rating: 0.6307852661481224,
  },
  {
    displayImageUrl:
      "https://upload.wikimedia.org/wikipedia/en/8/87/Show_Me_the_Father_Promotional_Poster.jpg",
    displayName: "Show Me the Father",
    format: "Movie",
    genres: ["Documentary"],
    summary:
      "Show Me the Father is a 2021 American Christian documentary film by director Rick Altizer, presenting five fatherhood-related stories connected with commentary by Tony Evans, produced by Mark Miller and executive produced by the Kendrick brothers. It is the Kendrick brothers' seventh film and their third through their subsidiary, Kendrick Brothers Productions. It was theatrically released on September 10, 2021.",
    id: "43691113-eb9f-4f7a-b6b1-9286b6843565",
    rating: 0.34480037130366337,
  },
  {
    displayName: "Catch the Bullet",
    format: "Movie",
    genres: [],
    id: "9966ff24-021d-4aa8-adb1-af3fd17f541c",
    rating: 0.6335096783336585,
  },
  {
    displayImageUrl:
      "https://upload.wikimedia.org/wikipedia/en/e/e8/Dating_and_New_York.jpg",
    displayName: "Dating and New York",
    format: "Movie",
    genres: ["Comedy"],
    summary:
      "Dating and New York is a 2021 American comedy film written and directed by Jonah Feingold in his directorial debut. It stars Jaboukie Young-White, Francesca Reale, Catherine Cohen, Brian Muller, Jerry Ferrara, Arturo Castro, Taylor Hill, Alex Moffat, Eva Victor and Yedoye Travis.",
    id: "f352536b-992b-4fda-a89e-f255312b3a19",
    rating: 0.9068682278768829,
  },
  {
    displayImageUrl:
      "https://upload.wikimedia.org/wikipedia/en/9/9d/Bad_candy.jpg",
    displayName: "Bad Candy",
    format: "Movie",
    genres: ["Horror"],
    summary:
      "Bad Candy is a 2021 American anthology horror film directed by Scott B. Hansen and Desiree Connell. It stars Zach Galligan, Derek Russo, and Corey Taylor.",
    id: "f2833a2c-88f9-413f-8277-41e307064469",
    rating: 0.08281008862487527,
  },
  {
    displayName: "Generation Wrecks",
    format: "Movie",
    genres: [],
    id: "49e233f9-9fc0-46d7-9260-0e18cdced0e0",
    rating: 0.4958239216168825,
  },
  {
    displayImageUrl:
      "https://upload.wikimedia.org/wikipedia/en/8/8b/My_Son_%282021_film%29.png",
    displayName: "My Son",
    format: "Movie",
    genres: ["Mystery", "Thriller"],
    summary:
      "My Son is a 2021 mystery thriller film written and directed by Christian Carion. It is an English-language remake of Carion's 2017 French film Mon garçon, and stars James McAvoy and Claire Foy. McAvoy was not supplied with a script or dialogue, and improvises his way through the film.",
    id: "cc75cdd0-5a88-44bd-a15b-2b77dee0967b",
    rating: 0.30618359416145324,
  },
  {
    displayImageUrl:
      "https://upload.wikimedia.org/wikipedia/en/8/8e/Nightbooks_film_poster.jpg",
    displayName: "Nightbooks",
    format: "Movie",
    genres: ["Fantasy"],
    summary:
      "Nightbooks is a 2021 American dark fantasy film directed by David Yarovesky and written by Mikki Daughtry and Tobias Iaconis. It is based on the 2018 horror-fantasy children's book of the same name by J. A. White. The film stars Winslow Fegley, Lidya Jewett, and Krysten Ritter.",
    id: "9a9348af-3087-4c86-b842-b15e54a150d3",
    rating: 0.8378831031509777,
  },
  {
    displayImageUrl:
      "https://upload.wikimedia.org/wikipedia/en/5/58/The_Starling.jpg",
    displayName: "The Starling",
    format: "Movie",
    genres: ["Comedy", "Drama", "Fantasy"],
    summary:
      "The Starling is a 2021 American fantasy comedy-drama film directed by Theodore Melfi and written by Matt Harris. The film stars Melissa McCarthy, Chris O'Dowd, Timothy Olyphant, Kim Quinn, Skyler Gisondo, Loretta Devine, Ravi Kapoor, Daveed Diggs, Rosalind Chao, Laura Harrier, and Kevin Kline.",
    id: "0b49705b-a1ba-4b5e-a730-b2ec0ff01bf8",
    rating: 0.5522532563149523,
  },
  {
    displayImageUrl:
      "https://upload.wikimedia.org/wikipedia/en/2/2f/The_Eyes_of_Tammy_Faye_%282021_film%29.jpg",
    displayName: "The Eyes of Tammy Faye",
    format: "Movie",
    genres: ["Drama", "Biography"],
    summary:
      "The Eyes of Tammy Faye is a 2021 American biographical drama film directed by Michael Showalter from a screenplay by Abe Sylvia, based on the 2000 documentary of the same name by Fenton Bailey and Randy Barbato of World of Wonder. The film tells the story of Tammy Faye Bakker, from her humble beginnings growing up in International Falls, Minnesota, through the rise and fall of her televangelism career and marriage to Jim Bakker. Cherry Jones and Vincent D'Onofrio also star. The film is produced by Chastain's production company, Freckle Films.",
    id: "fac55d95-bf18-4965-8870-b49d51b7da1f",
    rating: 0.1575577795927121,
  },
  {
    displayImageUrl:
      "https://upload.wikimedia.org/wikipedia/en/b/b5/Cry_Macho_film_poster.png",
    displayName: "Cry Macho",
    format: "Movie",
    genres: ["Drama", "Western"],
    summary:
      "Cry Macho is a 2021 American neo-Western drama film directed and produced by Clint Eastwood and written by Nick Schenk and the late N. Richard Nash, based on Nash's 1975 novel. It stars Eastwood as a former rodeo star hired to reunite a young boy in Mexico with his father in the United States. There were many attempts to adapt Nash's novel into a film over the years. Most notably, Arnold Schwarzenegger came on board to star in 2011 but canceled after a scandal. In 2020, Eastwood's adaptation was announced; he produced the film with Albert S. Ruddy, Tim Moore, and Jessica Meier.",
    id: "940b90d7-18c7-4601-891e-4cb841490c51",
    rating: 0.80730669741428,
  },
  {
    displayImageUrl:
      "https://upload.wikimedia.org/wikipedia/en/c/c1/Copshop.jpg",
    displayName: "Copshop",
    format: "Movie",
    genres: ["Action", "Thriller"],
    summary:
      "Copshop is a 2021 American action thriller film directed by Joe Carnahan and written by Kurt McLeod and Carnahan, based on a story by McLeod and Mark Williams. The film stars Gerard Butler, Frank Grillo, and Alexis Louder, and is set in a small-town police station that becomes the battleground between a hitman, a novice police officer, and a con artist.",
    id: "699ce1ce-de7f-4bac-9f4a-5656d939dc20",
    rating: 0.5002719643229319,
  },
  {
    displayImageUrl:
      "https://upload.wikimedia.org/wikipedia/en/6/6d/Blue_Bayou_%28film%29.jpg",
    displayName: "Blue Bayou",
    format: "Movie",
    genres: ["Drama"],
    summary:
      "Blue Bayou is a 2021 American drama film written and directed by Justin Chon. The film stars Chon, Alicia Vikander, Mark O'Brien, Linh Dan Pham, Sydney Kowalske, Vondie Curtis-Hall and Emory Cohen.",
    id: "70a31de5-dc93-4465-a193-199d048f414f",
    rating: 0.7105863072550318,
  },
  {
    displayImageUrl:
      "https://upload.wikimedia.org/wikipedia/en/e/e9/Prisoners_of_the_Ghostland.jpg",
    displayName: "Prisoners of the Ghostland",
    format: "Movie",
    genres: ["Horror", "Western"],
    summary:
      "Prisoners of the Ghostland is a 2021 American horror Western film directed by Sion Sono, from a script by Aaron Hendry and Reza Sixo Safai. It stars Nicolas Cage, Sofia Boutella, and Bill Moseley. Its plot revolves around a notorious criminal, Hero, who is sent to rescue the governor's adopted granddaughter, who has disappeared into a dark region called Ghostland.",
    id: "0667d021-21c9-4a2d-a52b-461858a4420e",
    rating: 0.7349098370655083,
  },
  {
    displayImageUrl:
      "https://upload.wikimedia.org/wikipedia/en/c/cc/Best_Sellers_%28film%29.png",
    displayName: "Best Sellers",
    format: "Movie",
    genres: ["Comedy", "Drama"],
    summary:
      "Best Sellers is a 2021 comedy-drama film directed by Lina Roessler and written by Anthony Grieco. It stars Michael Caine, Aubrey Plaza, Scott Speedman, Ellen Wong, Veronica Ferres, and Cary Elwes.",
    id: "59a2e270-0e12-44f4-a764-aacb79e1b0b6",
    rating: 0.028271562869549793,
  },
  {
    displayImageUrl:
      "https://upload.wikimedia.org/wikipedia/en/b/be/Lady_of_the_Manor_%28film%29.jpg",
    displayName: "Lady of the Manor",
    format: "Movie",
    genres: ["Comedy"],
    summary:
      "Lady of the Manor is a 2021 American buddy comedy film written and directed by brothers Justin Long and Christian Long in their directorial debuts. It stars Melanie Lynskey, Judy Greer, Justin Long, Ryan Phillippe, Luis Guzmán, and Patrick Duffy. The film premiered at the Gasparilla International Film Festival, and was released by Lionsgate on September 17, 2021.",
    id: "249e60c4-cb39-4725-8e2c-b9b03f610386",
    rating: 0.4539054404826508,
  },
  {
    displayImageUrl:
      "https://upload.wikimedia.org/wikipedia/en/f/f9/Nowhere_inn_xlg.jpg",
    displayName: "The Nowhere Inn",
    format: "Movie",
    genres: ["Comedy", "Thriller", "Satire"],
    summary:
      "The Nowhere Inn is a 2020 American mockumentary psychological thriller-comedy film, directed by Bill Benz, from a screenplay by Annie Clark and Carrie Brownstein. It stars Clark, Brownstein, and Dakota Johnson.",
    id: "b132b611-f7f0-42ec-845a-24b6644c2a45",
    rating: 0.6020007026734631,
  },
  {
    displayImageUrl:
      "https://upload.wikimedia.org/wikipedia/en/1/11/My_Name_is_Pauli_Murray.jpeg",
    displayName: "My Name is Pauli Murray",
    format: "Movie",
    genres: ["Documentary"],
    summary:
      "My Name Is Pauli Murray is an 2021 American documentary film, directed by Betsy West and Julie Cohen, written by West, Cohen, Talleah Bridges McMahon and Cinque Northern. It follows the life of lawyer and activist Pauli Murray.",
    id: "f522a335-c88b-4418-9504-cc52037fe3cf",
    rating: 0.9002524653207573,
  },
  {
    displayImageUrl:
      "https://upload.wikimedia.org/wikipedia/en/7/7e/The_Killing_of_Kenneth_Chamberlain.jpg",
    displayName: "The Killing of Kenneth Chamberlain",
    format: "Movie",
    genres: ["Drama", "Thriller"],
    summary:
      "The Killing of Kenneth Chamberlain is a 2019 American thriller drama film written, produced and directed by David Midell and starring Frankie Faison as the real life titular character. It is based on the police shooting of Chamberlain that occurred on November 29, 2011, in White Plains, New York. Morgan Freeman and Lori McCreary serve as executive producers of the film.",
    id: "42009696-e04e-4939-8faf-859a49392f19",
    rating: 0.1857130918081069,
  },
  {
    displayImageUrl:
      "https://upload.wikimedia.org/wikipedia/en/e/e2/Intrusion_2021_film_poster.png",
    displayName: "Intrusion",
    format: "Movie",
    genres: ["Thriller"],
    summary:
      "Intrusion is a 2021 American psychological thriller film directed by Adam Salky and written by Christopher Sparling, starring Freida Pinto and Logan Marshall-Green. It was released on September 22, 2021, by Netflix. It is about a couple who move from Boston to a small town in New Mexico to live a quieter life, only to find themselves the victims of a burglary and a deadly home invasion.",
    id: "7310f677-2759-4a9c-99be-f254618b0106",
    rating: 0.9605096858568076,
  },
  {
    displayImageUrl:
      "https://upload.wikimedia.org/wikipedia/en/a/aa/My_Little_Pony_A_New_Generation_film_poster.jpg",
    displayName: "My Little Pony: A New Generation",
    format: "Movie",
    genres: ["Animated", "Comedy", "Fantasy"],
    summary:
      "My Little Pony: A New Generation is a 2021 computer-animated fantasy comedy film directed by Robert Cullen and José L. Ucha, co-directed by Mark Fattibene with Cecil Kramer and Peter Lewis as producers, and written by Gillian Berrow and Tim Sullivan from a story by Cullen, Ucha and Sullivan. Based on Hasbro's My Little Pony franchise, the film marks the start of the fifth incarnation of the franchise, which is set to serve as the official sequel to the previous generation, a first for the franchise.",
    id: "2f7e07d3-1b60-4682-98e0-bf6bca5a9de1",
    rating: 0.22026346718905687,
  },
  {
    displayImageUrl:
      "https://upload.wikimedia.org/wikipedia/en/5/59/Dear_Evan_poster.jpg",
    displayName: "Dear Evan Hansen",
    format: "Movie",
    genres: ["Musical"],
    summary:
      "Dear Evan Hansen is a 2021 American coming-of-age musical film directed by Stephen Chbosky from a screenplay by Steven Levenson, based on the stage musical of the same name by Levenson, Benj Pasek, and Justin Paul. Ben Platt plays the title role, reprising the performance that he originated on stage six years earlier. The ensemble cast also includes Kaitlyn Dever, Amandla Stenberg, Nik Dodani, Colton Ryan, Danny Pino, Julianne Moore, and Amy Adams.",
    id: "38ea2b34-bc25-4bd1-98c6-61e618dd6f74",
    rating: 0.817166461000719,
  },
  {
    displayImageUrl:
      "https://upload.wikimedia.org/wikipedia/en/5/59/The_Guilty_%282021_film%29.jpg",
    displayName: "The Guilty",
    format: "Movie",
    genres: ["Crime", "Thriller"],
    summary:
      "The Guilty is a 2021 American crime thriller film directed and produced by Antoine Fuqua, from a screenplay by Nic Pizzolatto. A remake of the 2018 Danish film of the same name, the film stars Jake Gyllenhaal and Christina Vidal, with the voices of Ethan Hawke, Riley Keough, Eli Goree, Da'Vine Joy Randolph, Paul Dano, and Peter Sarsgaard.",
    id: "5ca2db12-5838-46e1-9bb8-689e51e6147d",
    rating: 0.8505529393139497,
  },
  {
    displayImageUrl:
      "https://upload.wikimedia.org/wikipedia/en/a/a8/Birds_of_Paradise_%282021_film%29.jpg",
    displayName: "Birds of Paradise",
    format: "Movie",
    genres: ["Dance", "Drama"],
    summary:
      "Birds of Paradise is a 2021 American dance drama film written and directed by Sarah Adina Smith, based upon the 2019 novel Bright Burning Stars by A.K. Small. It stars Kristine Frøseth, Diana Silvers, Caroline Goodall, Eva Lomby, and Jacqueline Bisset. It was released on September 24, 2021, by Amazon Studios.",
    id: "98b94db7-4ba7-4edb-a413-0df4546105e1",
    rating: 0.2727014186161987,
  },
  {
    displayImageUrl:
      "https://upload.wikimedia.org/wikipedia/en/4/47/After_We_Fell_film_poster.png",
    displayName: "After We Fell",
    format: "Movie",
    genres: ["Drama", "Romance"],
    summary:
      "After We Fell is a 2021 American romantic drama film directed by Castille Landon, from a screenplay by Sharon Soboil. Based on the 2014 novel of the same name by Anna Todd, it serves as a sequel to After We Collided, and is the third installment overall in the After film series. Starring Josephine Langford and Hero Fiennes-Tiffin, reprising their roles as Tessa Young and Hardin Scott, respectively; the plot includes Tessa's preparations for a job in Seattle, the arrival of Tessa's father and revelations about Hardin's family, all of which threaten the couple's relationship. Louise Lombard, Rob Estes, Arielle Kebbel, Chance Perdomo, Frances Turner, Kiana Madeira, Carter Jenkins and Mira Sorvino appear in supporting roles.",
    id: "75bc3da0-7b03-4b82-8460-9cc467b4ef33",
    rating: 0.39587092080467645,
  },
  {
    displayImageUrl:
      "https://upload.wikimedia.org/wikipedia/en/a/a7/Venom_Let_There_Be_Carnage_poster.jpg",
    displayName: "Venom: Let There Be Carnage",
    format: "Movie",
    genres: ["Superhero"],
    summary:
      "Venom: Let There Be Carnage is a 2021 American superhero film featuring the Marvel Comics character Venom, produced by Columbia Pictures in association with Marvel. Distributed by Sony Pictures Releasing, it is the second film in Sony's Spider-Man Universe and the sequel to Venom (2018). The film was directed by Andy Serkis from a screenplay by Kelly Marcel, based on a story she wrote with Tom Hardy, who stars as Eddie Brock and Venom alongside Michelle Williams, Naomie Harris, Reid Scott, Stephen Graham, and Woody Harrelson. In the film, Brock and the alien symbiote Venom must face serial killer Cletus Kasady (Harrelson) after he becomes the host of an offshoot of Venom named Carnage.",
    id: "deaaca66-5cff-48a7-bfff-720b14cc7625",
    rating: 0.47758845745401524,
  },
  {
    displayImageUrl:
      "https://upload.wikimedia.org/wikipedia/en/3/32/TheManySaintsOfNewarkPoster.jpg",
    displayName: "The Many Saints of Newark",
    format: "Movie",
    genres: ["Crime", "Drama"],
    summary:
      "The Many Saints of Newark is a 2021 American crime drama film directed by Alan Taylor and written by David Chase and Lawrence Konner. A prequel to Chase's HBO crime drama series The Sopranos, it takes place during the 1960s and 1970s in Newark, New Jersey. The film follows a violent gang war from the perspectives of mobster Dickie Moltisanti and his teenage nephew, Tony Soprano, in the midst of the city's 1967 riots. It stars Alessandro Nivola as Dickie and Michael Gandolfini as Tony, the character originated by his father in the series, with Leslie Odom Jr., Jon Bernthal, Corey Stoll, Billy Magnussen, Michela De Rossi, John Magaro, Ray Liotta, and Vera Farmiga in supporting roles.",
    id: "f6ef6b38-ea36-4e8c-be11-80f4fac586bf",
    rating: 0.5440844988295905,
  },
  {
    displayImageUrl:
      "https://upload.wikimedia.org/wikipedia/en/8/86/The_Addams_Family_2_poster.png",
    displayName: "The Addams Family 2",
    format: "Movie",
    genres: ["Animated", "Comedy", "Supernatural"],
    summary:
      "The Addams Family 2 is a 2021 computer-animated supernatural black comedy road film directed by Greg Tiernan and Conrad Vernon, co-directed by Laura Brousseau and Kevin Pavlovic, written by Dan Hernandez, Benji Samit, Ben Queen, and Susanna Fogel with a story by Hernandez and Samit, and based on the characters created by Charles Addams. It is the sequel to the 2019 film The Addams Family and stars the voices of Oscar Isaac, Charlize Theron, Chloë Grace Moretz, Nick Kroll, Javon Walton, Wallace Shawn, Snoop Dogg, Bette Midler, and Bill Hader. It tells the story of the Addams family as they go on a road trip.",
    id: "8e7c522a-e716-4a38-8cd1-035370c2a391",
    rating: 0.9744865933856712,
  },
  {
    displayImageUrl:
      "https://upload.wikimedia.org/wikipedia/en/4/4f/Bingo_Hell.jpg",
    displayName: "Bingo Hell",
    format: "Movie",
    genres: ["Comedy", "Horror"],
    summary:
      "Bingo Hell is a 2021 American comedy horror film directed by Gigi Saul Guerrero from a screenplay that she co-wrote with Shane McKenzie and Perry Blackshear. The film is the fifth installment in the anthological Welcome to the Blumhouse film series. The film stars Adriana Barraza, L. Scott Caldwell, and Joshua Caleb Johnson.",
    id: "f99edb4b-af17-46c1-a100-fd386f334dea",
    rating: 0.4759351070537152,
  },
  {
    displayImageUrl:
      "https://upload.wikimedia.org/wikipedia/en/e/e5/Black_as_night.jpg",
    displayName: "Black as Night",
    format: "Movie",
    genres: ["Horror"],
    summary:
      "Black as Night is a 2021 American horror film written by Sherman Payne and directed by Maritte Lee Go. It stars Asjha Cooper, Frabizio Guido, Mason Beauchamp, Abbie Gayle, Craig Tate and Keith David. The film is the sixth installment in the anthological Welcome to the Blumhouse film series.",
    id: "5a7f3ea6-2e74-4dbb-a50e-46f2698cf4ae",
    rating: 0.16315122386198122,
  },
  {
    displayImageUrl:
      "https://upload.wikimedia.org/wikipedia/en/6/6b/Old_Henry_%28film%29.jpg",
    displayName: "Old Henry",
    format: "Movie",
    genres: ["Action", "Drama", "Western"],
    summary:
      "Old Henry is a 2021 American western action drama film written and directed by Potsy Ponciroli. It stars Tim Blake Nelson as the titular character, a farmer who must protect his son from outlaws, with Scott Haze, Gavin Lewis, Trace Adkins, and Stephen Dorff in supporting roles. The film had its world premiere at the Venice Film Festival on September 7, 2021, and was theatrically released in the United States by Shout! Studios on October 1. It was critically acclaimed, with praise to the story, Ponciroli's direction, and Nelson's performance. The National Board of Review selected the film in its annual list of the Top Ten Independent Films of the year.",
    id: "f3382f91-efb2-4b30-8a38-ec7096747e1f",
    rating: 0.7865479706264895,
  },
  {
    displayImageUrl:
      "https://upload.wikimedia.org/wikipedia/en/2/2e/Jesus_music.jpg",
    displayName: "The Jesus Music",
    format: "Movie",
    genres: ["Documentary"],
    summary:
      "The Jesus Music is a 2021 American documentary film distributed by Lionsgate and directed by the Erwin brothers, detailing the history of contemporary Christian music as a musical and cultural phenomenon.",
    id: "dbd8ae00-6e7c-4995-a000-89a38881a3a7",
    rating: 0.7319914530904204,
  },
  {
    displayImageUrl:
      "https://upload.wikimedia.org/wikipedia/en/2/22/Mayday_%282021_film%29.jpg",
    displayName: "Mayday",
    format: "Movie",
    genres: ["Action", "Drama"],
    summary:
      "Mayday is a 2021 American action drama film, written and directed by Karen Cinorre, in her directorial debut. It stars Grace Van Patten, Mia Goth, Juliette Lewis, Soko and Havana Rose Liu. It had its world premiere at the 2021 Sundance Film Festival on January 31, 2021.",
    id: "49d1f34e-c8eb-45b1-80bd-07e6b1f5cbf2",
    rating: 0.09329431031600044,
  },
  {
    displayImageUrl:
      "https://upload.wikimedia.org/wikipedia/en/d/d8/God%27s_Not_Dead_4_poster.png",
    displayName: "God's Not Dead: We the People",
    format: "Movie",
    genres: ["Drama"],
    summary:
      "God's Not Dead: We the People is a 2021 American Christian drama film directed by Vance Null, with a script written by Tommy Blaze, from an original story co-authored by Cary Solomon and Chuck Konzelman. The sequel to God's Not Dead: A Light in Darkness and the fourth installment in the God's Not Dead series, the plot centers around Rev. David \"Dave\" Hill's role in presenting a case for God before Congress. The film was released on October 4, 2021, in a three-night theatrical engagement, and grossed over $1.1 million in the domestic box office.",
    id: "9ea52ee8-646f-48a9-83a3-16b26b1e8b83",
    rating: 0.8554587915985423,
  },
  {
    displayImageUrl:
      "https://upload.wikimedia.org/wikipedia/en/b/ba/There%27s_Someone_Inside_Your_House_%28film_poster%29.png",
    displayName: "There's Someone Inside Your House",
    format: "Movie",
    genres: ["Slasher"],
    summary:
      "There's Someone Inside Your House is a 2021 American slasher film directed by Patrick Brice and written by Henry Gayden. It is an adaptation of the 2017 novel of the same name by Stephanie Perkins and stars Sydney Park, Théodore Pellerin, Asjha Cooper, Jesse LaTourette, and Diego Josef. The plot follows Makani Young (Park), a senior transfer student from Hawaii who finds herself in the center of gruesome murder cases in her newly acquainted town of Osborne, Nebraska.",
    id: "90ef8387-e009-41f4-aac6-c890bae69831",
    rating: 0.7173587655303095,
  },
  {
    displayImageUrl:
      "https://upload.wikimedia.org/wikipedia/en/thumb/f/fe/No_Time_to_Die_poster.jpg/320px-No_Time_to_Die_poster.jpg",
    displayName: "No Time to Die",
    format: "Movie",
    genres: ["Spy"],
    summary:
      "No Time to Die is a 2021 spy film and the twenty-fifth in the James Bond series produced by Eon Productions, starring Daniel Craig in his fifth and final portrayal of fictional British MI6 agent James Bond. It was directed by Cary Joji Fukunaga from a screenplay by Neal Purvis, Robert Wade, Fukunaga and Phoebe Waller-Bridge. Léa Seydoux, Ben Whishaw, Naomie Harris, Jeffrey Wright, Christoph Waltz, Rory Kinnear and Ralph Fiennes reprise their roles from previous films, with Rami Malek, Lashana Lynch, Billy Magnussen, Ana de Armas, David Dencik and Dali Benssalah also starring. In No Time to Die, Bond has left active service with MI6 and is recruited by the CIA to find a kidnapped scientist, which leads to a showdown with a powerful adversary.",
    id: "76b620c6-4844-4d0d-9647-7fb2462ad330",
    rating: 0.39934015803843104,
  },
  {
    displayImageUrl:
      "https://upload.wikimedia.org/wikipedia/en/5/5e/Mass_2021_film.jpg",
    displayName: "Mass",
    format: "Movie",
    genres: ["Drama"],
    summary:
      "Mass is a 2021 American drama film written and directed by Fran Kranz in his directorial debut. It stars Reed Birney, Ann Dowd, Jason Isaacs, and Martha Plimpton as grieving parents who meet to discuss a tragedy involving their sons. The film had its world premiere at the 2021 Sundance Film Festival on January 30, 2021, and was released on October 8, 2021, by Bleecker Street. At the BAFTA Awards, Dowd received a nomination for Best Actress in a Supporting Role.",
    id: "f76e453f-0368-425b-82a8-11f1a5d4606f",
    rating: 0.5238743235880932,
  },
  {
    displayImageUrl:
      "https://upload.wikimedia.org/wikipedia/en/1/19/South_of_Heaven_%28film%29.jpg",
    displayName: "South of Heaven",
    format: "Movie",
    genres: ["Crime"],
    summary:
      "South of Heaven is a 2021 American crime film directed by Aharon Keshales and starring Jason Sudeikis and Evangeline Lilly.",
    id: "3b0efa90-be37-4966-a154-c21c298b9566",
    rating: 0.8214135404847476,
  },
  {
    displayImageUrl:
      "https://upload.wikimedia.org/wikipedia/en/8/8c/The_Manor_%28film%29.jpg",
    displayName: "The Manor",
    format: "Movie",
    genres: ["Horror", "Supernatural"],
    summary:
      "The Manor is a 2021 American gothic supernatural horror film written and directed by Axelle Carolyn. The film stars Barbara Hershey, Bruce Davison, Stacey Travis, Ciera Payton, Jill Larson and Mark Steger.",
    id: "d874afdd-db51-44a1-9865-88175bca64d5",
    rating: 0.12904268007754793,
  },
  {
    displayImageUrl:
      "https://upload.wikimedia.org/wikipedia/en/b/b0/Madres.jpg",
    displayName: "Madres",
    format: "Movie",
    genres: ["Horror"],
    summary:
      "Madres is a 2021 American horror film written by Mario Miscione and Marcella Ochoa directed by Ryan Zaragoza. It stars Ariana Guerra, Tenoch Huerta, Elpidia Carrillo, Kerry Cahill, Jennifer Patino, Britton Webb, and Evelyn Gonzalez. The film is the seventh installment in the anthological Welcome to the Blumhouse film series.",
    id: "52d35eb3-3032-4be4-a59a-32a63e6d88ad",
    rating: 0.7813179768942669,
  },
  {
    displayImageUrl:
      "https://upload.wikimedia.org/wikipedia/en/9/9c/Justin_Bieber_Our_World_film_poster.jpg",
    displayName: "Justin Bieber: Our World",
    format: "Movie",
    genres: ["Documentary", "Performance"],
    summary:
      'Justin Bieber: Our World is a 2021 American documentary film centering on Canadian singer Justin Bieber as he prepares for his first full concert in three years, directed by Michael D. Ratner. It was released on Amazon Prime Video on October 8, 2021. At the 65th Annual Grammy Awards "Justin Bieber: Our world" received a nomination for Best Music Film',
    id: "ce3325f4-b04f-4117-a7ee-32879fc3d305",
    rating: 0.01928257098782593,
  },
  {
    displayImageUrl:
      "https://upload.wikimedia.org/wikipedia/en/1/1a/Survive_the_game.jpg",
    displayName: "Survive the Game",
    format: "Movie",
    genres: ["Action", "Thriller"],
    summary:
      "Survive the Game is a 2021 American action thriller film directed by James Cullen Bressack, and starring Bruce Willis and Chad Michael Murray.",
    id: "cf865e3d-33d6-4ce5-9b79-2ef7618ed5b4",
    rating: 0.4715761785966399,
  },
  {
    displayImageUrl:
      "https://upload.wikimedia.org/wikipedia/en/6/61/Halloween_Kills_poster.jpg",
    displayName: "Halloween Kills",
    format: "Movie",
    genres: ["Slasher"],
    summary:
      "Halloween Kills is a 2021 American slasher film directed by David Gordon Green and co-written by Green, Danny McBride and Scott Teems. It is the sequel to 2018's Halloween and the twelfth installment in the Halloween franchise. The film stars Jamie Lee Curtis and James Jude Courtney, who reprise their roles as Laurie Strode and Michael Myers respectively. Judy Greer, Andi Matichak, and Will Patton also reprise their roles from the previous film, with Anthony Michael Hall and Thomas Mann joining the cast. The film, which begins where the previous film ended, sees Strode and her family continuing to fend off Myers, this time with the help of the Haddonfield community.",
    id: "7f1d083d-acb1-407a-a344-fd8bf038afab",
    rating: 0.16613630522864864,
  },
  {
    displayImageUrl:
      "https://upload.wikimedia.org/wikipedia/en/e/e8/The_Last_Duel_poster.jpg",
    displayName: "The Last Duel",
    format: "Movie",
    genres: ["Action", "Drama", "Historical"],
    summary:
      "The Last Duel is a 2021 historical action drama film directed by Ridley Scott from a screenplay by Nicole Holofcener, Ben Affleck, and Matt Damon, based on the 2004 book The Last Duel: A True Story of Crime, Scandal, and Trial by Combat in Medieval France by Eric Jager. Set in medieval France, the film stars Damon as Jean de Carrouges, a knight who challenges his former friend, squire Jacques Le Gris to a judicial duel after Jean's wife, Marguerite, accuses Jacques of raping her. The events leading up to the duel are divided into three distinct chapters, reflecting the contradictory perspectives of the three main characters. Affleck also stars in a supporting role as Count Pierre d'Alençon.",
    id: "522299a5-3adc-4f75-be70-8b723eae241e",
    rating: 0.9001576548003933,
  },
  {
    displayImageUrl:
      "https://upload.wikimedia.org/wikipedia/en/c/ce/Needle_in_a_Timestack.jpg",
    displayName: "Needle in a Timestack",
    format: "Movie",
    genres: ["Science Fiction", "Romance"],
    summary:
      "Needle in a Timestack is a 2021 American romantic science fiction film written and directed by John Ridley, based on the short story of the same name by Robert Silverberg. The film stars Leslie Odom Jr., Freida Pinto, Cynthia Erivo, Orlando Bloom, and Jadyn Wong.",
    id: "b687fce2-0bef-4d3b-b441-39579db7ceb8",
    rating: 0.5898607205420574,
  },
  {
    displayImageUrl:
      "https://upload.wikimedia.org/wikipedia/en/f/f0/Hard_Luck_Love_Song.jpg",
    displayName: "Hard Luck Love Song",
    format: "Movie",
    genres: ["Drama", "Romance"],
    summary:
      'Hard Luck Love Song is a 2020 American romantic drama film directed by Justin Corsbie in his feature directorial debut and starring Michael Dorman, Sophia Bush, Dermot Mulroney, Eric Roberts, Brian Sacca, Melora Walters and RZA. It is based on the song "Just Like Old Times" by Todd Snider.',
    id: "97ff4191-da4c-4c06-8025-9edb3003a424",
    rating: 0.06493429929485828,
  },
  {
    displayImageUrl:
      "https://upload.wikimedia.org/wikipedia/en/4/4a/Introducing_Selma_Blair.jpg",
    displayName: "Introducing, Selma Blair",
    format: "Movie",
    genres: ["Documentary"],
    summary:
      "Introducing, Selma Blair is a 2021 American documentary film, directed by Rachel Fleit. It follows Selma Blair, adapting to new ways of living after revealing her multiple sclerosis diagnosis.",
    id: "fc202ba7-4271-48e9-a81c-f8fb9f5de347",
    rating: 0.38743542353063587,
  },
  {
    displayImageUrl:
      "https://upload.wikimedia.org/wikipedia/en/8/81/The_Velvet_Underground_%28Todd_Haynes%29.png",
    displayName: "The Velvet Underground",
    format: "Movie",
    genres: ["Documentary"],
    summary:
      "The Velvet Underground is a 2021 American documentary film directed and produced by Todd Haynes that chronicles the life and times of the rock band the Velvet Underground.",
    id: "f20c91eb-f3f1-469f-b63e-432b93ba64ce",
    rating: 0.7930353547946802,
  },
  {
    displayImageUrl:
      "https://upload.wikimedia.org/wikipedia/en/a/a9/Night_Teeth.jpg",
    displayName: "Night Teeth",
    format: "Movie",
    genres: ["Thriller"],
    summary:
      "Night Teeth is a 2021 American vampire thriller film directed by Adam Randall from a screenplay by Brent Dillon. The film stars Jorge Lendeborg Jr., Debby Ryan, Lucy Fry, Raul Castillo, Sydney Sweeney, Megan Fox, and Alfie Allen.",
    id: "2ca4697c-fbd7-4ab3-b419-35e20ebec3c7",
    rating: 0.12772995633730155,
  },
  {
    displayImageUrl:
      "https://upload.wikimedia.org/wikipedia/en/8/8e/Dune_%282021_film%29.jpg",
    displayName: "Dune",
    format: "Movie",
    genres: ["Science Fiction"],
    summary:
      "Dune is a 2021 American epic science fiction film directed by Denis Villeneuve from a screenplay by Villeneuve, Jon Spaihts, and Eric Roth. It is the first part of a two-part adaptation of the 1965 novel by Frank Herbert. Set in the distant future, the film follows Paul Atreides as his family, the noble House Atreides, is thrust into a war for the deadly and inhospitable desert planet Arrakis. The ensemble cast includes Timothée Chalamet, Rebecca Ferguson, Oscar Isaac, Josh Brolin, Stellan Skarsgård, Dave Bautista, Stephen McKinley Henderson, Zendaya, David Dastmalchian, Chang Chen, Sharon Duncan-Brewster, Charlotte Rampling, Jason Momoa, and Javier Bardem.",
    id: "e0752a2b-6e89-4f53-8516-5928b4809c5a",
    rating: 0.8573758829338503,
  },
  {
    displayImageUrl:
      "https://upload.wikimedia.org/wikipedia/en/a/a5/Ron%27s_Gone_Wrong_%282021%29_poster.jpg",
    displayName: "Ron's Gone Wrong",
    format: "Movie",
    genres: ["Animated", "Comedy", "Science Fiction"],
    summary:
      "Ron's Gone Wrong is a 2021 British-American computer-animated science fiction comedy film directed by Sarah Smith and Jean-Philippe Vine, co-directed by Octavio E. Rodriguez and written by Peter Baynham and Smith. The film features the voice of Jack Dylan Grazer as Barney, a socially awkward middle-schooler who befriends a defective robot he names Ron, voiced by Zach Galifianakis. Barney must find a way to protect Ron, who comes under danger from corporate employees. Additional voices include Ed Helms, Justice Smith, Rob Delaney, Kylie Cantrall, Ricardo Hurtado, and Olivia Colman.",
    id: "9a02db84-29a2-4a6c-9bde-b29f72b56a10",
    rating: 0.41633541200029,
  },
  {
    displayImageUrl:
      "https://upload.wikimedia.org/wikipedia/en/7/78/The_French_Dispatch.jpeg",
    displayName: "The French Dispatch",
    format: "Movie",
    genres: ["Comedy", "Drama"],
    summary:
      "The French Dispatch of the Liberty, Kansas Evening Sun, or simply The French Dispatch, is a 2021 American anthology comedy drama film written, directed, and produced by Wes Anderson from a story he conceived with Roman Coppola, Hugo Guinness, and Jason Schwartzman. It features an expansive ensemble cast and follows three different storylines as the French foreign bureau of the fictional Liberty, Kansas Evening Sun newspaper publishes its final issue.",
    id: "bb130adb-9fce-4b4a-9cb1-685edbe4b973",
    rating: 0.6571657777900952,
  },
  {
    displayImageUrl:
      "https://upload.wikimedia.org/wikipedia/en/d/d1/The_Harder_They_Fall_%282021_film%29.jpg",
    displayName: "The Harder They Fall",
    format: "Movie",
    genres: ["Western"],
    summary:
      "The Harder They Fall is a 2021 American Western film directed by Jeymes Samuel, who co-wrote the screenplay with Boaz Yakin. The film stars Jonathan Majors, Idris Elba, Zazie Beetz, Regina King, Delroy Lindo, Lakeith Stanfield, RJ Cyler, Danielle Deadwyler, Edi Gathegi, and Deon Cole. It is one of few Westerns whose principal cast members are all black. Its characters are loosely based on real cowboys, lawmen, and outlaws of the nineteenth-century American West.",
    id: "c81db74e-92f2-41b6-a679-4b8b9b067a56",
    rating: 0.3264848670152338,
  },
  {
    displayImageUrl:
      "https://upload.wikimedia.org/wikipedia/en/4/43/The_Electrical_Life_of_Louis_Wain.jpg",
    displayName: "The Electrical Life of Louis Wain",
    format: "Movie",
    genres: ["Comedy", "Drama", "Biography"],
    summary:
      "The Electrical Life of Louis Wain is a 2021 biographical comedy-drama film directed by Will Sharpe, from a story by Simon Stephenson, and screenplay by Stephenson and Sharpe. The film stars Benedict Cumberbatch, Claire Foy, Andrea Riseborough and Toby Jones.",
    id: "ee0b4a78-786b-4a95-a54c-98def22cf771",
    rating: 0.8813605429752647,
  },
  {
    displayImageUrl:
      "https://upload.wikimedia.org/wikipedia/en/3/31/Warning_%28film%29.jpg",
    displayName: "Warning",
    format: "Movie",
    genres: ["Science Fiction", "Thriller"],
    summary:
      "Warning is a 2021 science fiction thriller film directed by Agata Alexander in her directorial debut, from a screenplay by Alexander, Jason Kaye and Rob Michaelson. It stars Alex Pettyfer, Alice Eve, Annabelle Wallis, Benedict Samuel, Charlotte Le Bon, Thomas Jane, Patrick Schwarzenegger, Rupert Everett, Tomasz Kot, Kylie Bunbury and Garance Marillier. The film premiered at the 2021 Sitges Film Festival.",
    id: "ec77fc20-a7ce-4a88-96bb-dde07b9b443e",
    rating: 0.49757990861945456,
  },
  {
    displayImageUrl:
      "https://upload.wikimedia.org/wikipedia/en/2/2c/Passing_%28film%29.jpg",
    displayName: "Passing",
    format: "Movie",
    genres: ["Drama", "Historical"],
    summary:
      "Passing is a 2021 black-and-white period drama film written and directed by Rebecca Hall in her feature directorial debut. It is adapted from the 1929 novel of the same name by Nella Larsen. Set in 1920s New York City, the film follows the intertwined life of a black woman and her white-passing childhood friend. Appearing in supporting roles are André Holland, Bill Camp, Gbenga Akinnagbe, Antoinette Crowe-Legacy, and Alexander Skarsgård.",
    id: "b03f4dad-158a-4b31-affb-8487d9ef6824",
    rating: 0.22327323626380458,
  },
  {
    displayImageUrl:
      "https://upload.wikimedia.org/wikipedia/en/e/ed/Hypnotic_%282021_film%29.jpeg",
    displayName: "Hypnotic",
    format: "Movie",
    genres: ["Thriller"],
    summary:
      "Hypnotic is a 2021 American thriller film directed by Matt Angel and Suzanne Coote, written by Richard D'Ovidio and starring Kate Siegel, Jason O'Mara, and Dulé Hill. It was released on October 27, 2021, by Netflix.",
    id: "f930ca3d-48e5-448d-9b83-4fd28d6312b4",
    rating: 0.6326314097914874,
  },
  {
    displayImageUrl:
      "https://upload.wikimedia.org/wikipedia/en/0/0d/AntlersOctober2021poster.png",
    displayName: "Antlers",
    format: "Movie",
    genres: ["Horror", "Supernatural"],
    summary:
      'Antlers is a 2021 supernatural horror film directed by Scott Cooper, and starring Keri Russell, Jesse Plemons, Jeremy T. Thomas, Graham Greene, Scott Haze, Rory Cochrane, and Amy Madigan. The screenplay was adapted from Nick Antosca\'s short story "The Quiet Boy". The film follows a school teacher who suspects one of her students is suffering from personal problems in his home life, not knowing that he is harboring an evil demon in his house.',
    id: "7eb993a7-44ae-42e2-bad8-31206e08d81b",
    rating: 0.9165632065848976,
  },
  {
    displayImageUrl:
      "https://upload.wikimedia.org/wikipedia/en/4/43/ArmyOfThievesTeaserPoster.jpg",
    displayName: "Army of Thieves",
    format: "Movie",
    genres: ["Comedy", "Action"],
    summary:
      "Army of Thieves is a 2021 heist comedy film directed by Matthias Schweighöfer from a screenplay by Shay Hatten, based on a story he wrote with Zack Snyder. A prequel to Army of the Dead (2021), it is the second installment in the Army of the Dead franchise; the film stars Schweighöfer, who reprises his role as Ludwig Dieter, alongside a supporting cast that includes Nathalie Emmanuel, Ruby O. Fee, Stuart Martin, Guz Khan, and Jonathan Cohen. Filming began in Germany and the Czech Republic in October 2020, and concluded by December 2020.",
    id: "83b6a6dd-5b38-499b-bf94-69f88b217fbe",
    rating: 0.41702820434462473,
  },
  {
    displayImageUrl:
      "https://upload.wikimedia.org/wikipedia/en/d/dc/A_Mouthful_of_Air.jpg",
    displayName: "A Mouthful of Air",
    format: "Movie",
    genres: ["Drama"],
    summary:
      "A Mouthful of Air is a 2021 American psychological drama film written, directed and produced by Amy Koppelman, based on her 2003 novel of the same name. It stars Amanda Seyfried, Finn Wittrock, Jennifer Carpenter, Michael Gaston, Amy Irving, and Paul Giamatti.",
    id: "9db0fc87-4106-4104-9c46-31916eaa5351",
    rating: 0.8598258926002855,
  },
  {
    displayImageUrl:
      "https://upload.wikimedia.org/wikipedia/en/d/d2/Souvenir_Part_2.jpg",
    displayName: "The Souvenir Part II",
    format: "Movie",
    genres: ["Drama"],
    summary:
      "The Souvenir Part II is a 2021 drama film, written and directed by Joanna Hogg. It is a sequel to The Souvenir (2019). It stars Honor Swinton Byrne, Jaygann Ayeh, Richard Ayoade, James Spencer Ashworth, Harris Dickinson, Charlie Heaton, Joe Alwyn, and Tilda Swinton.",
    id: "c2ceddcd-147e-48d6-83cf-36074470f57f",
    rating: 0.6590515516728714,
  },
  {
    displayImageUrl:
      "https://upload.wikimedia.org/wikipedia/en/5/5f/Paranormal_Activity_Next_of_Kin.jpg",
    displayName: "Paranormal Activity: Next of Kin",
    format: "Movie",
    genres: ["Found Footage", "Horror", "Supernatural"],
    summary:
      "Paranormal Activity: Next of Kin is a 2021 American found footage supernatural horror film directed by William Eubank, written by Christopher Landon, and produced by Jason Blum and Oren Peli. Serving as the seventh installment of the Paranormal Activity series, the film stars Emily Bader, Roland Buck III, Dan Lippert, Henry Ayres-Brown, and Tom Nowicki, and follows a group who attempt to make a documentary on an Amish community, only for them to discover the horrific secrets the town holds.",
    id: "f95a3658-e82e-4a6c-8288-6c30a4575791",
    rating: 0.11652009631221572,
  },
  {
    displayImageUrl:
      "https://upload.wikimedia.org/wikipedia/en/2/2e/Spine_of_night.jpg",
    displayName: "The Spine of Night",
    format: "Movie",
    genres: ["Animated", "Fantasy", "Horror", "Erotic"],
    summary:
      "The Spine of Night is a 2021 American adult animated dark fantasy horror film written and directed by Philip Gelatt and Morgan Galen King. It stars Richard E. Grant, Lucy Lawless, Patton Oswalt, Betty Gabriel, and Joe Manganiello.",
    id: "819179f8-f867-40d5-9d22-018aec56642d",
    rating: 0.484606002189379,
  },
  {
    displayImageUrl:
      "https://upload.wikimedia.org/wikipedia/en/5/56/VIOLET_poster_sm3.jpg",
    displayName: "Violet",
    format: "Movie",
    genres: ["Drama"],
    summary:
      "Violet is a 2021 American drama film written, directed, and co-produced by Justine Bateman in her feature film directorial debut. It stars Olivia Munn, Luke Bracey and Justin Theroux.",
    id: "7f20b705-e988-40fc-9061-bf326bbc9abc",
    rating: 0.2670087445206133,
  },
  {
    displayImageUrl:
      "https://upload.wikimedia.org/wikipedia/en/3/3b/Heart_of_Champions.jpg",
    displayName: "Heart of Champions",
    format: "Movie",
    genres: ["Drama"],
    summary:
      "Heart of Champions is a 2021 American drama film directed by Michael Mailer, from a screenplay by Vojin Gjaja. It stars Michael Shannon, Alexander Ludwig, Charles Melton, David James Elliott and Ash Santos.",
    id: "4858e56b-8265-4a5f-82d7-bfc14cd53ac1",
    rating: 0.8153741548454128,
  },
  {
    displayImageUrl:
      "https://upload.wikimedia.org/wikipedia/en/9/9b/Eternals_%28film%29_poster.jpeg",
    displayName: "Eternals",
    format: "Movie",
    genres: ["Superhero"],
    summary:
      "Eternals is a 2021 American superhero film based on the Marvel Comics race of the same name. Produced by Marvel Studios and distributed by Walt Disney Studios Motion Pictures, it is the 26th film in the Marvel Cinematic Universe (MCU). The film is directed by Chloé Zhao, who wrote the screenplay with Patrick Burleigh, Ryan Firpo, and Kaz Firpo. It stars an ensemble cast including Gemma Chan, Richard Madden, Kumail Nanjiani, Lia McHugh, Brian Tyree Henry, Lauren Ridloff, Barry Keoghan, Don Lee, Kit Harington, Salma Hayek, and Angelina Jolie. In the film, the Eternals, immortal alien beings, emerge from hiding after thousands of years to protect Earth from their ancient counterparts, the Deviants.",
    id: "6ba5471f-c419-4aa2-8a26-97b96715c229",
    rating: 0.6008307995338484,
  },
  {
    displayImageUrl:
      "https://upload.wikimedia.org/wikipedia/en/0/0c/Red_Notice_-_film_promotional_image.jpg",
    displayName: "Red Notice",
    format: "Movie",
    genres: ["Action", "Comedy"],
    summary:
      "Red Notice is a 2021 American action comedy film written and directed by Rawson Marshall Thurber starring Dwayne Johnson alongside Ryan Reynolds and Gal Gadot and Ritu Arya. It marks the third collaboration between Thurber and Johnson, following Central Intelligence (2016) and Skyscraper (2018). In the film, an FBI agent reluctantly teams up with a renowned art robber in order to catch an even more notorious robber.",
    id: "e0828e58-24b1-4368-9c26-c983167a02bc",
    rating: 0.9289580158588646,
  },
  {
    displayImageUrl:
      "https://upload.wikimedia.org/wikipedia/en/b/ba/Finch_%28film%29.jpg",
    displayName: "Finch",
    format: "Movie",
    genres: [],
    summary:
      "Finch is a 2021 American post-apocalyptic survival film directed by Miguel Sapochnik and written by Craig Luck and Ivor Powell. The film stars Tom Hanks and Caleb Landry Jones. The story follows an aging man named Finch, a survivor in a now nearly uninhabitable Earth, who builds and teaches a robot to take care of his dog when he dies.",
    id: "e9908f74-a8f3-448b-8c89-35bda2d05a56",
    rating: 0.6541163713921831,
  },
  {
    displayImageUrl:
      "https://upload.wikimedia.org/wikipedia/en/e/ea/Spencer_%28film%29.png",
    displayName: "Spencer",
    format: "Movie",
    genres: ["Drama", "Historical"],
    summary:
      "Spencer is a 2021 historical psychological drama film directed by Pablo Larraín from a screenplay by Steven Knight. The film is about Princess Diana's existential crisis during the Christmas of 1991, as she considers divorcing Prince Charles and leaving the British royal family. Kristen Stewart and Jack Farthing star as Diana and Charles respectively, joined by Timothy Spall, Sean Harris, and Sally Hawkins.",
    id: "62486b7d-83de-4ec6-988e-45fac3cc9e7e",
    rating: 0.12013951893693231,
  },
  {
    displayImageUrl:
      "https://upload.wikimedia.org/wikipedia/en/4/45/Dangerous_%28film%29.jpg",
    displayName: "Dangerous",
    format: "Movie",
    genres: ["Action", "Thriller"],
    summary:
      "Dangerous is a 2021 action thriller film directed by David Hackl and starring Scott Eastwood, Tyrese Gibson, Famke Janssen, Kevin Durand, and Mel Gibson. The film was released on November 5, 2021. It was David Hackl's fifth film as director. Dangerous was produced by Kevin DeWalt, Ben DeWalt and Doug Falconer under the banners of Mind's Eye Entertainment and Falconer Pictures; and marks the last film of Falconer as a producer - he suddenly died in July 2021 before the release of the film. The film was distributed in the United States and the United Kingdom by Lionsgate. It received negative reviews from critics for its plot and action.",
    id: "fa7a9ec1-4d74-4272-9bdd-544fef4b72b6",
    rating: 0.6326636188955481,
  },
  {
    displayImageUrl:
      "https://upload.wikimedia.org/wikipedia/en/f/f6/Love_Hard_poster.jpg",
    displayName: "Love Hard",
    format: "Movie",
    genres: ["Comedy", "Romance"],
    summary:
      "Love Hard is a 2021 American romantic comedy film directed by Hernán Jiménez and written by Danny Mackey and Rebecca Ewing. Starring Nina Dobrev, Jimmy O. Yang and Darren Barnet, it is about a young woman who travels to her online crush's hometown for Christmas but discovers she's been catfished. It was produced by Wonderland Sound and Vision and filmed in Vancouver from October to November 2020. It released by Netflix on November 5, 2021.",
    id: "e22f8876-10ee-4b7a-affd-9ce981471dfe",
    rating: 0.8173015630122502,
  },
  {
    displayImageUrl:
      "https://upload.wikimedia.org/wikipedia/en/9/95/The_Beta_Test_teaser_poster.jpg",
    displayName: "The Beta Test",
    format: "Movie",
    genres: ["Comedy", "Thriller"],
    summary:
      "The Beta Test is a 2021 dark comedy thriller film written and directed by Jim Cummings and PJ McCabe. It follows a talent agent whose life is turned upside-down after taking part in a secret sex pact; Cummings and McCabe star alongside Virginia Newcomb and Jessie Barr.",
    id: "898a8199-af73-4f21-92f6-72d7ccf5d34a",
    rating: 0.22087219743069508,
  },
  {
    displayImageUrl:
      "https://upload.wikimedia.org/wikipedia/en/c/c5/Clifford2021Poster.jpg",
    displayName: "Clifford the Big Red Dog",
    format: "Movie",
    genres: ["Action", "Animated", "Comedy", "Fantasy", "Family"],
    summary:
      "Clifford the Big Red Dog is a 2021 live-action animated fantasy comedy film directed by Walt Becker from a screenplay by Blaise Hemingway and the writing team of Jay Scherick and David Ronn, and a story by Justin Malen and Ellen Rapoport, based on the children's book series of the same name by Norman Bridwell. The film stars Jack Whitehall, Darby Camp, Tony Hale, Sienna Guillory, David Alan Grier, Russell Wong, Izaac Wang, Kenan Thompson and John Cleese.",
    id: "f0b7b41a-5a9f-4188-8669-ada2abaf82eb",
    rating: 0.2942665381792853,
  },
  {
    displayImageUrl:
      "https://upload.wikimedia.org/wikipedia/en/9/91/Tick_Tick_Boom_Movie_poster.jpg",
    displayName: "Tick, Tick... Boom!",
    format: "Movie",
    genres: ["Musical", "Biography"],
    summary:
      "Tick, Tick... Boom! is a 2021 American biographical musical film directed by Lin-Manuel Miranda in his feature directorial debut. Written by Steven Levenson, who also serves as an executive producer, it is based on the stage musical of the same name by Jonathan Larson, a semi-autobiographical story about Larson writing a musical to enter into the theater industry. The film stars Andrew Garfield as Larson, alongside Robin de Jesús, Alexandra Shipp, Joshua Henry, Judith Light, and Vanessa Hudgens.",
    id: "feef1435-1858-456b-bc7e-93fd5c594654",
    rating: 0.35739447578103856,
  },
  {
    displayImageUrl:
      "https://upload.wikimedia.org/wikipedia/en/d/dc/Home_Sweet_Home_Alone_Poster.jpg",
    displayName: "Home Sweet Home Alone",
    format: "Movie",
    genres: ["Comedy"],
    summary:
      "Home Sweet Home Alone is a 2021 American Christmas comedy film directed by Dan Mazer, written by Mikey Day and Streeter Seidell, and starring Ellie Kemper, Rob Delaney, Archie Yates, Aisling Bea, Kenan Thompson, Pete Holmes, Ally Maki, and Chris Parnell. The sixth film in the Home Alone franchise, Home Sweet Home Alone was produced by 20th Century Studios as an original title for Disney+, the first 20th Century Studios film to be produced for the streaming service. The film was announced after The Walt Disney Company acquired 21st Century Fox and inherited the rights to the Home Alone franchise.",
    id: "bdd5c837-03f8-4ac3-ac58-39283a04a145",
    rating: 0.9536232818128869,
  },
  {
    displayImageUrl:
      "https://upload.wikimedia.org/wikipedia/en/2/27/Apex_%28film%29.jpg",
    displayName: "Apex",
    format: "Movie",
    genres: ["Action", "Science Fiction", "War"],
    summary:
      "Apex, titled Apex Predator in the UK, is a 2021 American science fiction action film directed by Edward John Drake and written by John Drake and Corey William Large. It stars Neal McDonough and Bruce Willis and was released on November 12, 2021.",
    id: "4a04f4eb-8d59-4c23-b1ba-dcef6f44d895",
    rating: 0.8863687877161834,
  },
  {
    displayImageUrl:
      "https://upload.wikimedia.org/wikipedia/en/6/6d/The_Power_of_the_Dog_%28film%29.jpg",
    displayName: "The Power of the Dog",
    format: "Movie",
    genres: ["Drama", "Western"],
    summary:
      "The Power of the Dog is a 2021 revisionist Western psychological drama film written and directed by Jane Campion. It is based on Thomas Savage's 1967 novel of the same title. The film stars Benedict Cumberbatch, Kirsten Dunst, Jesse Plemons, and Kodi Smit-McPhee. Set in Montana and shot mostly within rural Otago, the film is an international co-production among New Zealand, the United Kingdom, Canada, and Australia.",
    id: "1976654f-821c-4e1d-8ba4-d950d6e31685",
    rating: 0.862005208804274,
  },
  {
    displayImageUrl:
      "https://upload.wikimedia.org/wikipedia/en/9/91/Bruised_film.jpg",
    displayName: "Bruised",
    format: "Movie",
    genres: ["Drama", "Sports"],
    summary:
      "Bruised is a 2020 sports drama film starring and directed by Halle Berry in her directorial debut, who also served as the producer. It co-stars Shamier Anderson, Adan Canto, Sheila Atim, Stephen McKinley Henderson and Adriane Lenox. The screenplay was written by Michelle Rosenfarb.",
    id: "148d7edd-71ab-4e3d-8acf-3c29bc553c67",
    rating: 0.043795252894557546,
  },
  {
    displayImageUrl:
      "https://upload.wikimedia.org/wikipedia/en/9/97/The_Princess_Switch_3.jpg",
    displayName: "The Princess Switch 3: Romancing the Star",
    format: "Movie",
    genres: ["Comedy", "Romance"],
    summary:
      "The Princess Switch 3: Romancing the Star is a 2021 American Christmas romantic comedy film directed by Mike Rohl and written by Robin Bernheim Burger, based on the characters created by Burger and Megan Metzger. The third film in The Princess Switch franchise, stars Vanessa Hudgens, Sam Palladio, Suanne Braun, Nick Sagar and Hazel Beattie. The story follows Margaret Delacourt, Queen of Montenaro, Stacy Juliette DeNovo Wyndham, Princess of Belgravia and Lady Fiona Pembroke, Margaret’s cousin. When a priceless Christmas relic is stolen, the trio come together and track down a mysterious jewel thief.",
    id: "8953b58b-86a0-42a5-9066-2b008a084011",
    rating: 0.6317872359192112,
  },
  {
    displayImageUrl:
      "https://upload.wikimedia.org/wikipedia/en/d/d1/Ghostbusters_-_Afterlife_official_theatrical_poster.jpg",
    displayName: "Ghostbusters: Afterlife",
    format: "Movie",
    genres: ["Comedy", "Supernatural"],
    summary:
      "Ghostbusters: Afterlife is a 2021 American supernatural comedy film directed by Jason Reitman from a screenplay he co-wrote with Gil Kenan. It is the sequel to Ghostbusters (1984) and Ghostbusters II (1989), and the fourth film in the Ghostbusters franchise. The film stars Carrie Coon, Finn Wolfhard, Mckenna Grace, and Paul Rudd, alongside Bill Murray, Dan Aykroyd, Ernie Hudson, Annie Potts, and Sigourney Weaver reprising their characters from the earlier films. Set 32 years after the events of Ghostbusters II, it follows a single mother and her children who move to an Oklahoma farm they inherited from her estranged father Egon Spengler, a member of the original Ghostbusters.",
    id: "5d9ef5ac-4cdf-421f-be8c-1396776be150",
    rating: 0.5806231788174725,
  },
  {
    displayImageUrl:
      "https://upload.wikimedia.org/wikipedia/en/8/86/King_Richard_poster.jpeg",
    displayName: "King Richard",
    format: "Movie",
    genres: ["Drama", "Sports", "Biography"],
    summary:
      "King Richard is a 2021 American biographical sports drama film directed by Reinaldo Marcus Green and written by Zach Baylin. The film stars Will Smith as Richard Williams, the father and coach of famed tennis players Venus and Serena Williams, with Aunjanue Ellis, Saniyya Sidney, Demi Singleton, Tony Goldwyn, and Jon Bernthal in supporting roles.",
    id: "77440570-6785-45f0-83cf-ff4936c2fed8",
    rating: 0.35358505677846264,
  },
  {
    displayImageUrl:
      "https://upload.wikimedia.org/wikipedia/en/d/de/Extinct%28film%29poster.jpg",
    displayName: "Extinct",
    format: "Movie",
    genres: ["Animated", "Comedy", "Science Fiction"],
    summary:
      "Extinct is a 2021 computer-animated science fiction comedy film directed by David Silverman, and co-directed by Raymond S. Persi, from a screenplay by Joel Cohen, John Frink, and Rob LaZebnik. It features the voices of Rachel Bloom, Adam Devine, Zazie Beetz, Ken Jeong, Catherine O'Hara, Benedict Wong, Reggie Watts, and Jim Jefferies in a story following two flummels, an extinct bunny-like species with giant holes in the center, that find themselves transported from their island home in the year 1835 to modern day Shanghai.",
    id: "d31aec1a-e18e-4384-9a31-e335b3b4aad4",
    rating: 0.6424981850970073,
  },
  {
    displayImageUrl:
      "https://upload.wikimedia.org/wikipedia/en/5/56/C%27mon_C%27mon.jpg",
    displayName: "C'mon C'mon",
    format: "Movie",
    genres: ["Drama"],
    summary:
      "C'mon C'mon is a 2021 American black-and-white drama film written and directed by Mike Mills, and starring Joaquin Phoenix, Gaby Hoffmann, Scoot McNairy, Molly Webster, Jaboukie Young-White, and Woody Norman. It had its world premiere at the 48th Telluride Film Festival on September 2, 2021, and was given a limited theatrical release by A24 starting on November 19, 2021. The film received critical acclaim, with praise for its performances, direction, and cinematography.",
    id: "420ea8b8-34f3-44e6-87b3-d08c0c85ca54",
    rating: 0.029770848052512067,
  },
  {
    displayImageUrl:
      "https://upload.wikimedia.org/wikipedia/en/4/4a/Black_Friday%21_film_poster.jpg",
    displayName: "Black Friday",
    format: "Movie",
    genres: ["Comedy", "Horror"],
    summary:
      "Black Friday is a 2021 American horror comedy film written by Andy Greskoviak and directed by Casey Tebo. It stars Devon Sawa, Ivana Baquero, Ryan Lee, Stephen Peck, Michael Jai White, and Bruce Campbell.",
    id: "7fde3fe7-b414-4001-865d-bb919d3cea01",
    rating: 0.4480042240283768,
  },
  {
    displayImageUrl:
      "https://upload.wikimedia.org/wikipedia/en/0/08/Zeros_and_Ones.jpg",
    displayName: "Zeros and Ones",
    format: "Movie",
    genres: ["Thriller"],
    summary:
      "Zeros and Ones is a 2021 American-Italian thriller film written and directed by Abel Ferrara and starring Ethan Hawke.",
    id: "a0aeb8b4-1854-470a-9501-4a280b495d8c",
    rating: 0.8885143503339346,
  },
  {
    displayImageUrl:
      "https://upload.wikimedia.org/wikipedia/en/b/be/Friend_of_the_World.jpg",
    displayName: "Friend of the World",
    format: "Movie",
    genres: ["Independent"],
    summary:
      "Friend of the World is a 2020 American independent black-and-white film written and directed by Brian Patrick Butler in his feature film debut, starring Nick Young and Alexandra Slade. The surreal experimental film takes place post-apocalypse and tells the story of a young filmmaker and a military general trapped in a bunker with a mysterious threat. The film has been categorized as a psychedelic film, a surrealist film, and an end of the world film.",
    id: "12db25f9-c826-4220-b055-f7b5db649e4e",
    rating: 0.6614975000600518,
  },
  {
    displayImageUrl:
      "https://upload.wikimedia.org/wikipedia/en/8/83/Encanto_poster.jpg",
    displayName: "Encanto",
    format: "Movie",
    genres: ["Animated", "Comedy", "Fantasy", "Musical"],
    summary:
      "Encanto is a 2021 American computer-animated musical fantasy comedy film produced by Walt Disney Animation Studios and distributed by Walt Disney Studios Motion Pictures. The 60th film produced by the studio, it was directed by Jared Bush and Byron Howard, co-directed by Charise Castro Smith, and produced by Yvett Merino and Clark Spencer, with original songs by Lin-Manuel Miranda. The screenplay was written by Castro Smith and Bush, both of whom also conceived the film's story with Howard, Miranda, Jason Hand, and Nancy Kruse. The film stars the voices of Stephanie Beatriz, María Cecilia Botero, John Leguizamo, Mauro Castillo, Jessica Darrow, Angie Cepeda, Carolina Gaitán, Diane Guerrero, and Wilmer Valderrama. Encanto follows a multigenerational Colombian family, the Madrigals, led by a matriarch (Botero) whose children and grandchildren—except for Mirabel Madrigal (Beatriz)—receive magical gifts from a miracle that helps them serve the people in their rural community called the Encanto. When Mirabel learns that the family is losing their magic, she sets out to find out what is happening, and save her family and their magical house.",
    id: "bc99140f-61e5-4e1d-95f8-8e8d2332a37c",
    rating: 0.16127877096731869,
  },
  {
    displayImageUrl:
      "https://upload.wikimedia.org/wikipedia/en/f/fe/House.of.Gucci.film.jpeg",
    displayName: "House of Gucci",
    format: "Movie",
    genres: ["Crime", "Drama", "Biography"],
    summary:
      "House of Gucci is a 2021 American biographical crime drama film directed by Ridley Scott, based on the 2001 book The House of Gucci: A Sensational Story of Murder, Madness, Glamour, and Greed by Sara Gay Forden. The film follows Patrizia Reggiani and Maurizio Gucci, as their romance transforms into a fight for control of the Italian fashion brand Gucci. Jared Leto, Jeremy Irons, Jack Huston, Salma Hayek, and Al Pacino also star.",
    id: "bb2f7acd-f377-4065-a802-44b4ca7f378b",
    rating: 0.7536346022680234,
  },
  {
    displayImageUrl:
      "https://upload.wikimedia.org/wikipedia/en/0/02/The_Unforgiveable.jpeg",
    displayName: "The Unforgivable",
    format: "Movie",
    genres: ["Drama"],
    summary:
      "The Unforgivable is a 2021 drama film directed by Nora Fingscheidt and written by Peter Craig, Hillary Seitz, and Courtenay Miles, based on the 2009 British miniseries Unforgiven written by Sally Wainwright. The film stars Sandra Bullock as a woman who, following her release from prison after serving twenty years for committing murder, is determined to reunite with her estranged younger sister. Vincent D'Onofrio, Jon Bernthal, Richard Thomas, Linda Emond, Aisling Franciosi, Rob Morgan, and Viola Davis also star.",
    id: "355a662c-f14b-4713-a3fa-e023cba30181",
    rating: 0.2756349664265796,
  },
  {
    displayImageUrl:
      "https://upload.wikimedia.org/wikipedia/en/0/01/Welcome_to_Raccoon_City.jpg",
    displayName: "Resident Evil: Welcome to Raccoon City",
    format: "Movie",
    genres: ["Action", "Horror"],
    summary:
      "Resident Evil: Welcome to Raccoon City is a 2021 action horror film written and directed by Johannes Roberts. Adapted from the stories of the first and second games by Capcom, it serves as a reboot of the Resident Evil film series and is the seventh live-action film based on the video game series. The film stars Kaya Scodelario, Hannah John-Kamen, Robbie Amell, Tom Hopper, Avan Jogia, Donal Logue, and Neal McDonough. Set in 1998, it follows a group of survivors trying to survive during a zombie outbreak in the small town of Raccoon City.",
    id: "6a2f7f72-3213-4fe2-8313-b58fb4a0554b",
    rating: 0.05328172997847869,
  },
  {
    displayImageUrl:
      "https://upload.wikimedia.org/wikipedia/en/f/f0/8_Bit_Christmas.jpg",
    displayName: "8-Bit Christmas",
    format: "Movie",
    genres: ["Comedy"],
    summary:
      "8-Bit Christmas is a 2021 American Christmas comedy film directed by Michael Dowse, from a screenplay by Kevin Jakubowski based upon his novel of the same name. It stars Neil Patrick Harris, Winslow Fegley, June Diane Raphael, David Cross, and Steve Zahn. The film was released on November 24, 2021, on HBO Max, receiving generally favorable reviews from critics.",
    id: "6c8d4406-dc36-4520-a4ac-7a3b781541d4",
    rating: 0.21053022092149232,
  },
  {
    displayImageUrl:
      "https://upload.wikimedia.org/wikipedia/en/c/c0/The_Humans_poster.jpeg",
    displayName: "The Humans",
    format: "Movie",
    genres: ["Drama"],
    summary:
      "The Humans is a 2021 American psychological drama film written and directed by Stephen Karam in his feature directorial debut, and based on his one-act play of the same name. It stars Richard Jenkins, Jayne Houdyshell, Amy Schumer, Beanie Feldstein, Steven Yeun, and June Squibb. It had its world premiere at the 2021 Toronto International Film Festival on September 12, 2021. The film was released by A24 on November 24, 2021, both in theaters and on Showtime.",
    id: "3ce7e97e-069e-4680-861c-70476f785134",
    rating: 0.8304757982778177,
  },
  {
    displayImageUrl:
      "https://upload.wikimedia.org/wikipedia/en/3/3d/SouthParkPostCovid.jpg",
    displayName: "South Park: Post Covid",
    format: "Movie",
    genres: ["Animated", "Comedy", "Erotic"],
    summary:
      '"South Park: Post Covid" is a 2021 American adult animated comedy television special episode written and directed by Trey Parker. It is the first in a series of South Park television specials for the streaming service Paramount+ and premiered on November 25, 2021. It is also considered to be the 310th episode overall of the television series.',
    id: "9fc6662a-d23f-4e78-9474-e275434265af",
    rating: 0.5284566163170394,
  },
  {
    displayImageUrl:
      "https://upload.wikimedia.org/wikipedia/en/3/3c/LicoricePizzaPoster.jpeg",
    displayName: "Licorice Pizza",
    format: "Movie",
    genres: ["Comedy", "Drama"],
    summary:
      "Licorice Pizza is a 2021 American comedy-drama film written and directed by Paul Thomas Anderson. It stars Alana Haim and Cooper Hoffman in their film debuts, alongside an ensemble supporting cast including Sean Penn, Tom Waits, Bradley Cooper, and Benny Safdie. Set in 1973, the film follows the development of a young couple's relationship.",
    id: "8d21235b-2c37-4d97-9fea-897305f6fc89",
    rating: 0.7581061803538771,
  },
  {
    displayImageUrl:
      "https://upload.wikimedia.org/wikipedia/en/3/38/Single_All_the_Way_poster.jpg",
    displayName: "Single All the Way",
    format: "Movie",
    genres: ["Comedy", "Romance"],
    summary:
      "Single All the Way is a 2021 Canadian Christmas romantic comedy film directed by Michael Mayer and written by Chad Hodge. The plot follows a man who convinces his best friend to pretend to be his boyfriend when he goes home for Christmas, only to be set up on a blind date by his mother. Luke Macfarlane, Barry Bostwick, Jennifer Robertson, and Jennifer Coolidge also star.",
    id: "11ac7745-4dd5-4111-865b-667ef35a07a9",
    rating: 0.07075313817600093,
  },
  {
    displayImageUrl:
      "https://upload.wikimedia.org/wikipedia/en/6/66/BacktoTheOutback.jpg",
    displayName: "Back to the Outback",
    format: "Movie",
    genres: ["Adventure", "Animated", "Comedy"],
    summary:
      "Back to the Outback is a 2021 computer-animated adventure comedy film directed by Clare Knight and Harry Cripps, in both their directorial debuts, from a screenplay written by Cripps, and a story by Gregory Lessans and Cripps. The voice cast includes Isla Fisher, Tim Minchin, Eric Bana, Guy Pearce, Miranda Tapsell, Angus Imrie, Keith Urban, and Jacki Weaver. Produced by Weed Road Pictures, Reel FX Creative Studios, Netflix Animation, and distributed by Netflix.",
    id: "49ed9082-af7c-4c6f-a6d9-499665f38cf8",
    rating: 0.7757442102749481,
  },
  {
    displayImageUrl:
      "https://upload.wikimedia.org/wikipedia/en/c/cd/Diary_of_a_Wimpy_Kid_%282021%29_Official_Poster.jpg",
    displayName: "Diary of a Wimpy Kid",
    format: "Movie",
    genres: ["Animated", "Comedy"],
    summary:
      "Diary of a Wimpy Kid is a 2021 computer-animated comedy film directed by Swinton Scott from a screenplay by Jeff Kinney, based on his 2007 book of the same name. It is the second film adaptation of the book, following the 2010 live-action film, while serving as the first fully-animated reboot in the Diary of a Wimpy Kid film series, and the fifth installment overall. The film stars the voices of Brady Noon, Ethan William Childress, Chris Diamantopoulos, Erica Cerra, and Hunter Dillon.",
    id: "10332475-3296-4f41-8e3a-46c3b59ab716",
    rating: 0.6688227056225744,
  },
  {
    displayImageUrl:
      "https://upload.wikimedia.org/wikipedia/en/9/92/Encounter_poster.jpeg",
    displayName: "Encounter",
    format: "Movie",
    genres: ["Crime", "Drama", "Thriller"],
    summary:
      "Encounter is a 2021 crime drama thriller film, directed by Michael Pearce from a screenplay by Pearce and Joe Barton. The film stars Riz Ahmed, Octavia Spencer, Janina Gavankar, Rory Cochrane, Lucian-River Chauhan, and Aditya Geddada.",
    id: "ed0f1057-108e-4513-a729-f8b1b7e33955",
    rating: 0.8653728590179475,
  },
  {
    displayImageUrl:
      "https://upload.wikimedia.org/wikipedia/en/f/f1/Mixtape_xlg.jpg",
    displayName: "Mixtape",
    format: "Movie",
    genres: ["Comedy"],
    summary:
      "Mixtape is a 2021 American comedy film directed by Valerie Weiss from a screenplay by Stacey Menear. It stars Gemma Brooke Allen, Nick Thune, and Julie Bowen.",
    id: "9db6ddab-1ba8-467f-b744-9b17eb785dc4",
    rating: 0.49970519976785166,
  },
  {
    displayImageUrl:
      "https://upload.wikimedia.org/wikipedia/en/c/c4/Deadlock_2021_poster.jpg",
    displayName: "Deadlock",
    format: "Movie",
    genres: ["Action", "Thriller"],
    summary:
      "Deadlock is a 2021 American action thriller film directed by Jared Cohn, starring Patrick Muldoon and Bruce Willis. It was released in the United States on December 3, 2021, by Saban Films.",
    id: "94d6e672-dde6-4e09-ac59-0924e18bbb62",
    rating: 0.2710019233737566,
  },
  {
    displayImageUrl:
      "https://upload.wikimedia.org/wikipedia/en/2/2e/West_Side_Story_2021_Official_Poster.jpg",
    displayName: "West Side Story",
    format: "Movie",
    genres: ["Drama", "Musical", "Romance"],
    summary:
      "West Side Story is a 2021 American musical romantic drama film directed and co-produced by Steven Spielberg from a screenplay by Tony Kushner. It is the second feature-length adaptation of the 1957 stage musical of the same name. It stars Ansel Elgort and Rachel Zegler in her film debut with Ariana DeBose, David Alvarez, Mike Faist, and Rita Moreno in supporting roles. Moreno, who starred in the 1961 film adaptation, also served as an executive producer alongside Kushner. The film features music composed by Leonard Bernstein with lyrics by Stephen Sondheim.",
    id: "6df8d255-3345-457a-a4fd-5b75b00404ae",
    rating: 0.6652527529564882,
  },
  {
    displayImageUrl:
      "https://upload.wikimedia.org/wikipedia/en/5/5c/Don%27t_Look_Up_2021_film.jpg",
    displayName: "Don't Look Up",
    format: "Movie",
    genres: ["Comedy", "Political", "Satire"],
    summary:
      "Don't Look Up is a 2021 American apocalyptic political satire black comedy film written, co-produced, and directed by Adam McKay from a story he co-wrote with David Sirota. It stars an ensemble cast featuring Leonardo DiCaprio, Jennifer Lawrence, Rob Morgan, Jonah Hill, Mark Rylance, Tyler Perry, Timothée Chalamet, Ron Perlman, Ariana Grande, Kid Cudi, Cate Blanchett, and Meryl Streep. The film tells the story of two astronomers attempting to warn humanity about an approaching comet that will destroy human civilization. The impact event is an allegory for climate change, and the film is a satire of government, political, celebrity, and media indifference to the climate crisis.",
    id: "9740fa5e-1835-4ed0-b874-61c48148febb",
    rating: 0.043374883106555684,
  },
  {
    displayImageUrl:
      "https://upload.wikimedia.org/wikipedia/en/8/83/National_Champions_%28film%29.jpg",
    displayName: "National Champions",
    format: "Movie",
    genres: ["Drama", "Sports"],
    summary:
      "National Champions is a 2021 American sports drama film directed by Ric Roman Waugh, based on the play of the same name by Adam Mervis. The film stars Stephan James, J. K. Simmons, Alexander Ludwig, Lil Rel Howery, Tim Blake Nelson, Andrew Bachelor, Jeffrey Donovan, David Koechner, Kristin Chenoweth, Timothy Olyphant, and Uzo Aduba.",
    id: "237b1663-d6fa-4dd7-b2db-652271041f35",
    rating: 0.9248136643224913,
  },
  {
    displayImageUrl:
      "https://upload.wikimedia.org/wikipedia/en/6/62/Being_the_Ricardos.jpeg",
    displayName: "Being the Ricardos",
    format: "Movie",
    genres: ["Drama", "Biography"],
    summary:
      "Being the Ricardos is a 2021 American biographical drama film written and directed by Aaron Sorkin, about the relationship between I Love Lucy stars Lucille Ball and Desi Arnaz. Nicole Kidman and Javier Bardem star as Ball and Arnaz, while J. K. Simmons, Nina Arianda, Tony Hale, Alia Shawkat, Jake Lacy, and Clark Gregg are featured in supporting roles.",
    id: "93a16bae-e070-4de3-bfc3-1cf466dd75cb",
    rating: 0.27141352120295714,
  },
  {
    displayImageUrl:
      "https://upload.wikimedia.org/wikipedia/en/e/e7/Red_Rocket_%28film%29.jpg",
    displayName: "Red Rocket",
    format: "Movie",
    genres: ["Comedy", "Drama"],
    summary:
      "Red Rocket is a 2021 American black comedy drama film directed by Sean Baker from a screenplay co-written with Chris Bergoch. It stars Simon Rex, Bree Elrod, and Suzanna Son. The plot follows a porn star (Rex) who returns to his hometown and begins a relationship with an adolescent girl (Son).",
    id: "ba446927-12de-4eac-9986-a344f12c35eb",
    rating: 0.27618121310722743,
  },
  {
    displayImageUrl:
      "https://upload.wikimedia.org/wikipedia/en/d/d9/The_Hating_Game_film_poster.png",
    displayName: "The Hating Game",
    format: "Movie",
    genres: ["Comedy", "Romance"],
    summary:
      "The Hating Game is a 2021 American romantic comedy film directed by Peter Hutchings. It is based on the novel of the same name by Sally Thorne, and stars Lucy Hale and Austin Stowell in the lead roles. It was released in theaters and video on demand on December 10, 2021, by Vertical Entertainment. The film received generally positive reviews from critics.",
    id: "7fbc8219-fc67-49b8-afb5-b521863d3211",
    rating: 0.09994138514837902,
  },
  {
    displayImageUrl:
      "https://upload.wikimedia.org/wikipedia/en/5/5d/Rumble_2021_film_poster.png",
    displayName: "Rumble",
    format: "Movie",
    genres: ["Animated", "Comedy", "Sports"],
    summary:
      "Rumble is a 2021 American computer-animated sports comedy film directed by Hamish Grieve with a screenplay by Grieve and Matt Lieberman. Loosely based on Monster on the Hill, a graphic novel by Rob Harrell, the film stars the voices of Will Arnett, Geraldine Viswanathan, Terry Crews, Stephen A. Smith, Jimmy Tatro, Tony Danza, Susan Kelechi Watson, Tony Shalhoub, Bridget Everett, Greta Lee, Ben Schwartz, Roman Reigns and Becky Lynch.",
    id: "4eb682bc-324a-451a-9982-f2a6cf13fc69",
    rating: 0.4500735011500163,
  },
  {
    displayImageUrl:
      "https://upload.wikimedia.org/wikipedia/en/4/45/SouthParkPostCovidTheReturn.jpg",
    displayName: "South Park: Post Covid: The Return of Covid",
    format: "Movie",
    genres: ["Animated", "Comedy", "Erotic"],
    summary:
      '"South Park: Post Covid: The Return of Covid" is a 2021 American adult animated comedy television special episode written and directed by Trey Parker. It is the second in a series of South Park television specials for the streaming service Paramount+ and premiered on December 16, 2021. It is a direct sequel to and continues the storyline of the previous special, "South Park: Post Covid". It is also the 311th episode of the series.',
    id: "79865198-c614-4a50-8f56-7d39434a1662",
    rating: 0.8307883432198107,
  },
  {
    displayImageUrl:
      "https://upload.wikimedia.org/wikipedia/en/0/00/Spider-Man_No_Way_Home_poster.jpg",
    displayName: "Spider-Man: No Way Home",
    format: "Movie",
    genres: ["Superhero"],
    summary:
      "Spider-Man: No Way Home is a 2021 American superhero film based on the Marvel Comics character Spider-Man, co-produced by Columbia Pictures and Marvel Studios and distributed by Sony Pictures Releasing. It is the sequel to Spider-Man: Homecoming (2017) and Spider-Man: Far From Home (2019), and the 27th film in the Marvel Cinematic Universe (MCU). The film was directed by Jon Watts and written by Chris McKenna and Erik Sommers. It stars Tom Holland as Peter Parker / Spider-Man alongside Zendaya, Benedict Cumberbatch, Jacob Batalon, Jon Favreau, Jamie Foxx, Willem Dafoe, Alfred Molina, Benedict Wong, Tony Revolori, Marisa Tomei, Andrew Garfield, and Tobey Maguire. In the film, Parker asks Dr. Stephen Strange (Cumberbatch) to use magic to make his identity as Spider-Man a secret again following its public revelation at the end of Far From Home. When the spell goes wrong because of Parker's actions, the multiverse is broken open, which allows visitors from alternate realities to enter Parker's universe.",
    id: "08f605eb-5287-4087-b889-efa9d7170216",
    rating: 0.047571500638650344,
  },
  {
    displayImageUrl:
      "https://upload.wikimedia.org/wikipedia/en/5/52/Nightmare_Alley_%282021_film%29.jpg",
    displayName: "Nightmare Alley",
    format: "Movie",
    genres: ["Noir", "Thriller"],
    summary:
      "Nightmare Alley is a 2021 neo-noir psychological thriller film co-written and directed by Guillermo del Toro, and based on the 1946 novel of the same name by William Lindsay Gresham. It is the second feature film adaptation of Gresham's novel, following the 1947 version. A co-production between Searchlight Pictures, TSG Entertainment, and Double Dare You Productions, the film stars Bradley Cooper as a charming and ambitious carnival worker with a mysterious past who takes big risks to boost his career. Cate Blanchett, Toni Collette, Willem Dafoe, Richard Jenkins, Rooney Mara, Ron Perlman, Mary Steenburgen, and David Strathairn also star.",
    id: "4df507ce-eaee-4290-a6f8-b6095bed7055",
    rating: 0.41232188840273687,
  },
  {
    displayImageUrl:
      "https://upload.wikimedia.org/wikipedia/en/0/0b/The_Lost_Daughter_%28film%29.jpg",
    displayName: "The Lost Daughter",
    format: "Movie",
    genres: ["Drama"],
    summary:
      "The Lost Daughter is a 2021 psychological drama film adapted for the screen and directed by Maggie Gyllenhaal based on the 2006 novel of the same name by Elena Ferrante. The film stars Olivia Colman, Dakota Johnson, Jessie Buckley, Paul Mescal, Dagmara Domińczyk, Jack Farthing, Oliver Jackson-Cohen, Peter Sarsgaard, and Ed Harris. Colman also serves as an executive producer.",
    id: "d504220c-1887-42f9-be5a-548a3dc8921e",
    rating: 0.4132260141947546,
  },
  {
    displayImageUrl:
      "https://upload.wikimedia.org/wikipedia/en/1/1d/Swan_Song_%282021_Benjamin_Cleary_film%29.jpg",
    displayName: "Swan Song",
    format: "Movie",
    genres: ["Drama", "Science Fiction", "Romance"],
    summary:
      "Swan Song is a 2021 American science fiction romantic drama film written and directed by Benjamin Cleary. The film stars Mahershala Ali, Naomie Harris, Awkwafina, Glenn Close, and Adam Beach.",
    id: "eee20b71-f206-4c18-99e3-efe74542221e",
    rating: 0.926579347550718,
  },
  {
    displayImageUrl:
      "https://upload.wikimedia.org/wikipedia/en/b/b0/The_Tender_Bar_poster.jpg",
    displayName: "The Tender Bar",
    format: "Movie",
    genres: [],
    summary:
      "The Tender Bar is a 2021 American coming-of-age film directed by George Clooney from a screenplay by William Monahan. Adapted from the 2005 memoir of the same name by J. R. Moehringer, it recounts Moehringer's life growing up on Long Island. It stars Ben Affleck, Tye Sheridan, Daniel Ranieri, Lily Rabe, and Christopher Lloyd. It was the final film appearance of Sondra James before her death in September 2021.",
    id: "987b260a-f4ad-411a-9de5-9ebe30c07067",
    rating: 0.34578822388847796,
  },
  {
    displayImageUrl:
      "https://upload.wikimedia.org/wikipedia/en/0/02/Mother_Android.jpg",
    displayName: "Mother/Android",
    format: "Movie",
    genres: ["Science Fiction", "Thriller"],
    summary:
      "Mother/Android is a 2021 American post-apocalyptic science fiction thriller film, written and directed by Mattson Tomlin for his feature directorial debut, and starring Chloë Grace Moretz, Algee Smith, and Raúl Castillo. The film tells the story of a pregnant woman and her boyfriend who try to reach a fortified Boston amidst an AI takeover. It was released on December 17, 2021, on Hulu.",
    id: "a58a5770-066a-4d6a-bb09-5baa76389fae",
    rating: 0.08495147528974134,
  },
  {
    displayImageUrl:
      "https://upload.wikimedia.org/wikipedia/en/0/04/Fortress_2021_poster.jpg",
    displayName: "Fortress",
    format: "Movie",
    genres: ["Action"],
    summary:
      "Fortress is a 2021 American action film directed by James Cullen Bressack and written by Alan Horsnail, based on a story by Emile Hirsch and Randall Emmett. It stars Jesse Metcalfe, Bruce Willis, Chad Michael Murray, Kelly Greyson, Ser'Darius Blain, and Shannen Doherty. The film was released in select theaters and on video on demand by Lionsgate Films on December 17, 2021.",
    id: "97b3c183-69f5-4f39-ad1a-ad054f2c6b53",
    rating: 0.6157183426646764,
  },
  {
    displayImageUrl:
      "https://upload.wikimedia.org/wikipedia/en/8/87/Sing_2_poster.jpg",
    displayName: "Sing 2",
    format: "Movie",
    genres: ["Animated", "Comedy", "Musical"],
    summary:
      "Sing 2 is a 2021 American computer-animated jukebox musical comedy film produced by Illumination and distributed by Universal Pictures. The sequel to Sing (2016) and the second film in the franchise, it was again written and directed by Garth Jennings, co-directed by Christophe Lourdelet, and produced by Chris Meledandri and Janet Healy.",
    id: "b33ba8bd-f91f-4993-b473-ae405edec06c",
    rating: 0.2524275522437538,
  },
  {
    displayImageUrl:
      "https://upload.wikimedia.org/wikipedia/en/5/50/The_Matrix_Resurrections.jpg",
    displayName: "The Matrix Resurrections",
    format: "Movie",
    genres: ["Action", "Science Fiction"],
    summary:
      "The Matrix Resurrections is a 2021 American science fiction action film produced, co-written, and directed by Lana Wachowski, and being the first in Matrix franchise to be directed solely by Lana, without her sister, Lilly. It is the sequel to The Matrix Revolutions (2003) and the fourth installment in The Matrix film franchise. The film stars Keanu Reeves, Carrie-Anne Moss, Yahya Abdul-Mateen II, Jessica Henwick, Jonathan Groff, Neil Patrick Harris, Priyanka Chopra Jonas, Christina Ricci, and Jada Pinkett Smith. The film is set sixty years after Revolutions and follows Neo, who lives a seemingly ordinary life as a video game developer having trouble with distinguishing fantasy from reality. A group of rebels, with the help of a programmed version of Morpheus, free Neo from a new version of the Matrix and fight a new enemy that holds Trinity captive.",
    id: "da10597c-4087-45d9-b020-45a365993616",
    rating: 0.7258931867926066,
  },
  {
    displayImageUrl:
      "https://upload.wikimedia.org/wikipedia/en/6/67/The_King%27s_Man.jpg",
    displayName: "The King's Man",
    format: "Movie",
    genres: ["Action", "Spy"],
    summary:
      "The King's Man is a 2021 spy action film directed by Matthew Vaughn from a screenplay by Vaughn and Karl Gajdusek and a story by Vaughn. The third installment in the British Kingsman film series, which is based on the comic book The Secret Service by Mark Millar and Dave Gibbons, it is a prequel to Kingsman: The Secret Service (2014) and Kingsman: The Golden Circle (2017). Its ensemble cast includes Ralph Fiennes, Gemma Arterton, Rhys Ifans, Matthew Goode, Tom Hollander, Harris Dickinson, Daniel Brühl, Djimon Hounsou, and Charles Dance. It focuses on several events during World War I and the birth of the Kingsman organisation.",
    id: "4663e9b6-9e33-4708-937b-ea2368c36caf",
    rating: 0.796280884450153,
  },
  {
    displayImageUrl:
      "https://upload.wikimedia.org/wikipedia/en/6/69/The_Tragedy_of_Macbeth_2021_poster.jpg",
    displayName: "The Tragedy of Macbeth",
    format: "Movie",
    genres: ["Historical", "Thriller"],
    summary:
      "The Tragedy of Macbeth is a 2021 American historical thriller film written, directed and produced by Joel Coen, based on the play Macbeth by William Shakespeare. It is the first film directed by one of the Coen brothers without the other's involvement. The film stars Denzel Washington, Frances McDormand, Bertie Carvel, Alex Hassell, Corey Hawkins, Harry Melling, Kathryn Hunter, and Brendan Gleeson.",
    id: "d7c36e81-3d79-4e45-a1e9-3c3f465e8be2",
    rating: 0.2813107045639207,
  },
  {
    displayImageUrl:
      "https://upload.wikimedia.org/wikipedia/en/f/fc/A_Journal_for_Jordan.jpg",
    displayName: "A Journal for Jordan",
    format: "Movie",
    genres: ["Drama", "Romance"],
    summary:
      "A Journal for Jordan is a 2021 American romantic drama film directed and co-produced by Denzel Washington from a screenplay written by Virgil Williams, based on the memoir A Journal for Jordan: A Story of Love and Honor by Dana Canedy. The film stars Michael B. Jordan and Chanté Adams in the lead roles, along with Jalon Christian, Robert Wisdom, and Tamara Tunie in supporting roles.",
    id: "2b71141e-cf2f-45bb-acbe-de36e297717e",
    rating: 0.20028730510361847,
  },
  {
    displayImageUrl:
      "https://upload.wikimedia.org/wikipedia/en/4/4c/American_Underdog.jpg",
    displayName: "American Underdog",
    format: "Movie",
    genres: ["Sports", "Biography"],
    summary:
      "American Underdog is a 2021 American biographical sports film about National Football League (NFL) quarterback Kurt Warner. Directed by Andrew and Jon Erwin, the film follows Warner's journey as an undrafted player who ascended to winning Super Bowl XXXIV. It stars Zachary Levi as Warner, alongside Anna Paquin as his wife Brenda and Dennis Quaid as his head coach Dick Vermeil.",
    id: "fe2c9d47-6955-47b1-8055-9cb0fe8f9993",
    rating: 0.5143310990805736,
  },
  {
    displayImageUrl:
      "https://upload.wikimedia.org/wikipedia/en/8/89/Memoria_poster.jpg",
    displayName: "Memoria",
    format: "Movie",
    genres: ["Drama", "Fantasy", "Mystery"],
    summary:
      "Memoria is a 2021 fantasy drama mystery film written, directed and co-produced by Apichatpong Weerasethakul, starring Tilda Swinton, Elkin Díaz, Jeanne Balibar, Juan Pablo Urrego and Daniel Giménez Cacho.",
    id: "28c03039-7f5e-4cdf-921e-474ca0b5dc7d",
    rating: 0.8491271033654475,
  },
  {
    displayImageUrl:
      "https://upload.wikimedia.org/wikipedia/en/5/52/The_355_poster.jpeg",
    displayName: "The 355",
    format: "Movie",
    genres: ["Action", "Spy", "Thriller"],
    summary:
      "The 355 is a 2022 American action spy thriller film directed by Simon Kinberg from a screenplay by Theresa Rebeck and Kinberg, and a story by Rebeck. The film features an ensemble cast, starring Jessica Chastain, Penélope Cruz, Fan Bingbing, Diane Kruger, and Lupita Nyong'o as a group of international spies who must work together to stop a terrorist organization from starting World War III. Édgar Ramírez and Sebastian Stan also star. The title is derived from Agent 355, the codename of a female spy for the Patriots during the American Revolution.",
    id: "2bd79625-25aa-4b47-9737-d93372b0aef2",
    rating: 0.6426402322529976,
  },
  {
    displayImageUrl:
      "https://upload.wikimedia.org/wikipedia/en/c/c7/Legend_of_la_llorona.jpg",
    displayName: "The Legend of La Llorona",
    format: "Movie",
    genres: ["Horror"],
    summary:
      "The Legend of La Llorona is a 2022 American Horror film directed by Patricia Harris Seeley and written by José Prendes, Cameron Larson and Patricia Harris Seeley. The film stars Autumn Reeser, Danny Trejo, Antonio Cupo and Zamia Fardiño. The film was released on January 7, 2022.",
    id: "517b3246-33a6-4643-986b-0b12bbfe4aa1",
    rating: 0.7671751647755833,
  },
  {
    displayImageUrl:
      "https://upload.wikimedia.org/wikipedia/en/a/a8/The_Commando.jpeg",
    displayName: "The Commando",
    format: "Movie",
    genres: ["Action", "Crime", "Thriller"],
    summary:
      "The Commando is a 2022 American action crime thriller film directed by Asif Akbar and starring Mickey Rourke and Michael Jai White.",
    id: "fe312595-1623-4275-aff5-6ad8ff26cfbb",
    rating: 0.24237446437102816,
  },
  {
    displayImageUrl:
      "https://upload.wikimedia.org/wikipedia/en/1/16/American_Siege.jpg",
    displayName: "American Siege",
    format: "Movie",
    genres: ["Action"],
    summary:
      "American Siege is a 2022 American action film written and directed by Edward Drake. It stars Timothy V. Murphy, Bruce Willis, Rob Gough, Johann Urb, Anna Hindman, Johnny Messner, Cullen G. Chambers, and Janet Jones. The film was released by Shout! Studios on January 7, 2022. American Siege was panned by critics.",
    id: "482f3a79-318c-403f-bbe6-9feeb6b8ab65",
    rating: 0.2527993595556346,
  },
  {
    displayImageUrl:
      "https://upload.wikimedia.org/wikipedia/en/2/24/Scream2022film.jpeg",
    displayName: "Scream",
    format: "Movie",
    genres: ["Slasher"],
    summary:
      'Scream is a 2022 American slasher film directed by Matt Bettinelli-Olpin and Tyler Gillett, and written by James Vanderbilt and Guy Busick. It is the fifth installment in the Scream film series; though billed as a relaunch of the film series, the film is a direct sequel to Scream 4 (2011). The first film in the series to not be directed by Wes Craven, following his death in 2015, the film is dedicated to Craven at the beginning of the closing credits. The film stars Melissa Barrera, Kyle Gallner, Mason Gooding, Mikey Madison, Dylan Minnette, Jenna Ortega, Jack Quaid, Jasmin Savoy Brown, and Sonia Ammar, with Marley Shelton, Skeet Ulrich, Roger L. Jackson, Heather Matarazzo, Courteney Cox, David Arquette, and Neve Campbell reprising their roles from previous installments. The plot takes place twenty-five years after the original Woodsboro murders from Scream (1996), when yet another Ghostface appears and begins targeting a group of teenagers who are each somehow linked to the original killings. Similar to previous entries, Scream combines the violence of the slasher genre with elements of black comedy and "whodunit" mystery to satirize the trend of reboots and legacy sequels ("requels"). The film also provides commentary on the horror fandom culture, particularly the divide between "elevated horror" and classic slasher films.',
    id: "7c284592-d364-4941-9f2a-78e73bfa4309",
    rating: 0.1680553358722119,
  },
  {
    displayImageUrl:
      "https://upload.wikimedia.org/wikipedia/en/8/8b/Hotel_Transylvania_Transformania.jpg",
    displayName: "Hotel Transylvania: Transformania",
    format: "Movie",
    genres: ["Adventure", "Animated", "Comedy"],
    summary:
      'Hotel Transylvania: Transformania is a 2022 American computer-animated adventure comedy film produced by Columbia Pictures and Sony Pictures Animation and released by Amazon Studios. The fourth and final installment in the Hotel Transylvania franchise and the sequel to Hotel Transylvania 3: Summer Vacation (2018), the film is directed by Derek Drymon and Jennifer Kluska from a screenplay by Amos Vernon, Nunzio Randazzo and Genndy Tartakovsky. It stars the voices of Andy Samberg, Selena Gomez, Kathryn Hahn, Jim Gaffigan, Steve Buscemi, Molly Shannon, David Spade, Keegan-Michael Key, Brian Hull, Fran Drescher, Brad Abrell, Asher Blinkoff, Tyler "Ninja" Blevins and Zoe Berri. In the film, Dracula and Johnny, who transformed into a human and monster, must find the way to South America to revert, before their transformations become permanent.',
    id: "840ad13c-ed1e-4ca6-bb98-56c2b94a722c",
    rating: 0.27600689022652314,
  },
  {
    displayImageUrl:
      "https://upload.wikimedia.org/wikipedia/en/8/86/Shattered_film.jpg",
    displayName: "Shattered",
    format: "Movie",
    genres: ["Thriller"],
    summary:
      "Shattered is a 2022 American thriller film directed by Luis Prieto, written by David Loughery, and starring Cameron Monaghan, Frank Grillo, Lilly Krug, and John Malkovich.",
    id: "dc7d0996-b215-47dc-a789-5d46121bdc87",
    rating: 0.778127903930609,
  },
  {
    displayImageUrl:
      "https://upload.wikimedia.org/wikipedia/en/4/42/The_Royal_Treatment.jpg",
    displayName: "The Royal Treatment",
    format: "Movie",
    genres: ["Romance"],
    summary:
      "The Royal Treatment is a 2022 American romance film directed by Rick Jacobson and written by Holly Hester. It stars Laura Marano as Manhattan hairdresser Izzy, who is given an opportunity to work at the wedding of Prince Thomas, played by Mena Massoud.",
    id: "e875891b-f1a2-4eb6-931a-2611f8b21efb",
    rating: 0.687406323098205,
  },
  {
    displayImageUrl:
      "https://upload.wikimedia.org/wikipedia/en/6/64/Redeeming_Love_%282022_film%29.jpg",
    displayName: "Redeeming Love",
    format: "Movie",
    genres: ["Romance", "Western"],
    summary:
      "Redeeming Love is a 2022 American Christian Western romance film directed by D.J. Caruso, who co-wrote the screenplay with Francine Rivers. The film is based on Rivers' 1991 novel of the same name, which was based on the Biblical story of Hosea, and is set in the American Old West during the California Gold Rush. It stars Abigail Cowen, Tom Lewis and Logan Marshall-Green.",
    id: "09299580-d93f-4224-a60f-4957b7f0d3f2",
    rating: 0.7403530875695616,
  },
  {
    displayImageUrl:
      "https://upload.wikimedia.org/wikipedia/en/c/ca/The_King%27s_Daughter_%282022_film%29.jpg",
    displayName: "The King's Daughter",
    format: "Movie",
    genres: ["Action", "Adventure", "Fantasy"],
    summary:
      "The King's Daughter is a 2022 action-adventure fantasy film directed by Sean McNamara from a screenplay by Barry Berman and James Schamus. It is based on the 1997 novel The Moon and the Sun by Vonda N. McIntyre. The film stars Pierce Brosnan as King Louis XIV, Kaya Scodelario as Marie-Josèphe, and Benjamin Walker as Yves De La Croix. It was William Hurt's final screen performance to be released before his death in March 2022, though not his final film work, as it had been filmed eight years earlier.",
    id: "eb3f9963-b615-4314-a1e2-60ab16c9974d",
    rating: 0.7907945923790387,
  },
  {
    displayImageUrl:
      "https://upload.wikimedia.org/wikipedia/en/f/f5/The_Tiger_Rising_%28film%29.jpg",
    displayName: "The Tiger Rising",
    format: "Movie",
    genres: ["Drama"],
    summary:
      "The Tiger Rising is a 2022 American drama film written and directed by Ray Giarratana and starring Christian Convery, Madalen Mills, Katharine McPhee, Sam Trammell, Dennis Quaid and Queen Latifah. It is based on the 2001 book of the same name by Kate DiCamillo.",
    id: "2c4a14b3-f050-4c5f-9bf4-4c4c9903368a",
    rating: 0.26359024110725016,
  },
  {
    displayImageUrl:
      "https://upload.wikimedia.org/wikipedia/en/4/44/Hellblazers.jpeg",
    displayName: "Hellblazers",
    format: "Movie",
    genres: ["Action", "Horror"],
    summary:
      "Hellblazers is a 2022 American action horror film directed by Justin Lee and starring Bruce Dern, Billy Zane, Tony Todd and Adrienne Barbeau.",
    id: "ffc4bace-58dd-4920-970e-207c5dc5d3e8",
    rating: 0.6980999986368432,
  },
  {
    displayImageUrl:
      "https://upload.wikimedia.org/wikipedia/en/a/a4/The_Fallout_2021.jpg",
    displayName: "The Fallout",
    format: "Movie",
    genres: ["Drama"],
    summary:
      "The Fallout is a 2021 American drama film written and directed by Megan Park in her feature film directorial debut. The film stars Jenna Ortega as Vada Cavell, a high school student who navigates significant emotional trauma following a school shooting. The film also stars Maddie Ziegler, Julie Bowen, John Ortiz, Niles Fitch, Will Ropp, and Shailene Woodley in supporting roles. The score is composed by American musician and actor Finneas O'Connell.",
    id: "5dc08b43-8a24-43f4-b429-b49240384d61",
    rating: 0.6354335934878921,
  },
  {
    displayImageUrl:
      "https://upload.wikimedia.org/wikipedia/en/5/5c/Home_Team_%282022_film%29.jpg",
    displayName: "Home Team",
    format: "Movie",
    genres: ["Comedy", "Sports", "Biography"],
    summary:
      "Home Team is a 2022 American biographical sports comedy film directed by Charles and Daniel Kinnane, written by Chris Titone and Keith Blum, and starring Kevin James in the lead role, Taylor Lautner, Rob Schneider, Jackie Sandler, and Tait Blum. Inspired by actual events, the film tells the story of New Orleans Saints head coach Sean Payton who coached his 12-year-old son's football team during his one-year suspension from the NFL.",
    id: "1f83c811-f08a-4b3f-8576-b3df4619a802",
    rating: 0.3163507286830938,
  },
  {
    displayImageUrl:
      "https://upload.wikimedia.org/wikipedia/en/0/0f/The_Ice_Age_Adventures_of_Buck_Wild.jpg",
    displayName: "The Ice Age Adventures of Buck Wild",
    format: "Movie",
    genres: ["Adventure", "Animated", "Comedy"],
    summary:
      "The Ice Age Adventures of Buck Wild is a 2022 computer-animated adventure comedy film directed by John C. Donkin, in his feature directorial debut, with a screenplay by Jim Hecht, Ray DeLaurentis, and William Schifrin. It serves as a spin-off of the Ice Age franchise and is set after the events of Ice Age: Collision Course. The film stars the voices of Simon Pegg, Vincent Tong, Aaron Harris, Utkarsh Ambudkar, and Justina Machado also starring in the film.",
    id: "f346578d-911f-44fa-893a-f84cb7e2bb24",
    rating: 0.6736090621675972,
  },
  {
    displayImageUrl:
      "https://upload.wikimedia.org/wikipedia/en/b/b4/Clean_%282021_film%29.jpg",
    displayName: "Clean",
    format: "Movie",
    genres: ["Action", "Thriller"],
    summary:
      "Clean is a 2021 American action thriller film directed by Paul Solet and starring Adrien Brody, who also produced and wrote the film.",
    id: "f9bd3091-86f4-4f08-9b91-c40140589965",
    rating: 0.48496800692256636,
  },
  {
    displayImageUrl:
      "https://upload.wikimedia.org/wikipedia/en/c/ca/Sundown_%282021_film%29.jpg",
    displayName: "Sundown",
    format: "Movie",
    genres: ["Drama"],
    summary:
      "Sundown is a 2021 drama film written and directed by Michel Franco. It stars Tim Roth, Charlotte Gainsbourg and Iazua Larios. The plot follows a wealthy man (Roth) who attempts to abandon his family on vacation after the death of his mother. The film had its world premiere at the Venice Film Festival on 5 September 2021, and was released in the United States by Bleecker Street on 28 January 2022. The film was met with generally positive reviews.",
    id: "31f0c924-2a98-48c2-af16-76111be37a2b",
    rating: 0.5513108211846798,
  },
  {
    displayImageUrl:
      "https://upload.wikimedia.org/wikipedia/en/e/e4/Jackass_Forever_film_poster.png",
    displayName: "Jackass Forever",
    format: "Movie",
    genres: ["Comedy"],
    summary:
      "Jackass Forever is a 2022 American stunt comedy film directed and produced by Jeff Tremaine, along with producers Spike Jonze and Johnny Knoxville, and was released by Paramount Pictures. It is the fourth main installment in the Jackass film series, following Jackass 3D (2010). The film stars original Jackass members Knoxville, Steve-O, Dave England, Wee Man, Danger Ehren, Chris Pontius, Preston Lacy, newcomers to the Jackass crew, and celebrity guests. This is the first Jackass film not to feature Ryan Dunn since his death in 2011 and the first without Bam Margera being a primary cast member as he was fired during production, appearing briefly in one skit.",
    id: "76d962b3-7e08-4ccf-9dd2-0dc593e4e392",
    rating: 0.3489455768438907,
  },
  {
    displayImageUrl:
      "https://upload.wikimedia.org/wikipedia/en/d/d3/Moonfall_film_poster.jpg",
    displayName: "Moonfall",
    format: "Movie",
    genres: ["Disaster", "Science Fiction"],
    summary:
      "Moonfall is a 2022 science fiction disaster film co-written, directed, and produced by Roland Emmerich. It stars Halle Berry, Patrick Wilson, John Bradley, Michael Peña, Charlie Plummer, Kelly Yu, Carolina Bartczak and Donald Sutherland. It follows two former astronauts alongside a conspiracy theorist who discover the hidden truth about Earth's moon when it suddenly leaves its orbit. Shot in Montreal on a $138–146 million budget, it is one of the most expensive independently produced films ever made.",
    id: "0c791c1d-642c-4741-8a8b-c7b4d515d04b",
    rating: 0.5918019134386814,
  },
  {
    displayImageUrl:
      "https://upload.wikimedia.org/wikipedia/en/2/22/Last_Looks.jpg",
    displayName: "Last Looks",
    format: "Movie",
    genres: ["Mystery", "War"],
    summary:
      "Last Looks is a 2022 American-British mystery film, directed by Tim Kirkby, from a screenplay by Howard Michael Gould based on his novel of the same name. It stars Charlie Hunnam, Mel Gibson, Morena Baccarin, Lucy Fry, Rupert Friend, Dominic Monaghan, Jacob Scipio and Clancy Brown.",
    id: "ffd19568-3ff5-4cb6-92d8-f079ad06310f",
    rating: 0.3710591272283048,
  },
  {
    displayImageUrl:
      "https://upload.wikimedia.org/wikipedia/en/1/1d/The_Long_Night_%282022_film%29.jpeg",
    displayName: "The Long Night",
    format: "Movie",
    genres: ["Horror"],
    summary:
      "The Long Night is a 2022 American horror film written by Robert Sheppe and Mark Young and directed Rich Ragsdale. It stars Scout Taylor-Compton, Nolan Gerard Funk, Jeff Fahey, Deborah Kara Unger. The film is about a couple whose quiet weekend takes a bizarre turn when a nightmarish cult and their maniacal leader come to fulfill an apocalyptic prophesy.",
    id: "6b218a67-b0a1-479f-9dd3-7c1829d3b556",
    rating: 0.3466032230198135,
  },
  {
    displayImageUrl:
      "https://upload.wikimedia.org/wikipedia/en/7/7c/Kimi_%28film%29.jpg",
    displayName: "Kimi",
    format: "Movie",
    genres: ["Thriller"],
    summary:
      "Kimi is a 2022 American thriller film directed by Steven Soderbergh and written and produced by David Koepp. The film stars Zoë Kravitz. It was released on HBO Max on February 10, 2022, to generally positive reviews.",
    id: "08117c50-fa00-4a59-8792-ed85ad02c494",
    rating: 0.3114408599173233,
  },
  {
    displayImageUrl:
      "https://upload.wikimedia.org/wikipedia/en/2/2c/Shut_In_%282022_film%29.jpg",
    displayName: "Shut In",
    format: "Movie",
    genres: ["Thriller"],
    summary:
      "Shut In is a 2022 American thriller film directed by D.J. Caruso, written by Melanie Toast, and starring Rainey Qualley, Jake Horowitz, Luciana VanDette and Vincent Gallo. Shut In is The Daily Wire's first original film and their third to be released on their streaming platform.",
    id: "cc502a83-b9ef-4fef-b1b7-ec6d9abeaa56",
    rating: 0.8706912742454711,
  },
  {
    displayImageUrl:
      "https://upload.wikimedia.org/wikipedia/en/e/e9/Death_on_the_Nile_%282020_film%29_poster.png",
    displayName: "Death on the Nile",
    format: "Movie",
    genres: ["Mystery"],
    summary:
      "Death on the Nile is a 2022 mystery film directed by Kenneth Branagh from a screenplay by Michael Green, based on the 1937 novel of the same name by Agatha Christie, and the second big screen adaptation of Christie's novel, following the 1978 film. It was produced by Branagh, Ridley Scott, Judy Hofflund and Kevin J. Walsh, as a sequel to 2017’s Murder on the Orient Express. It stars an ensemble cast with Branagh and Tom Bateman reprising their roles as Hercule Poirot and Bouc, respectively, alongside Annette Bening, Russell Brand, Ali Fazal, Dawn French, Gal Gadot, Armie Hammer, Rose Leslie, Emma Mackey, Sophie Okonedo, Jennifer Saunders and Letitia Wright.",
    id: "128bc0fc-c550-4240-beb3-b03675450974",
    rating: 0.6705966270300927,
  },
  {
    displayImageUrl:
      "https://upload.wikimedia.org/wikipedia/en/f/f9/Marry_Me_%282022_film%29.jpg",
    displayName: "Marry Me",
    format: "Movie",
    genres: ["Comedy", "Drama", "Romance"],
    summary:
      'Marry Me is a 2022 American romantic comedy-drama film directed by Kat Coiro, with a screenplay by John Rogers, Tami Sagher, and Harper Dill. Based on the 2012 graphic novel of the same title by Bobby Crosby, it stars Jennifer Lopez as Kat Valdez, a pop star, who decides to marry Charlie Gilbert, a math teacher holding a "Marry Me" sign, after learning that her on-stage bridegroom Bastian (Maluma) has been having an affair. John Bradley, Sarah Silverman, Ricky Guillart, and Chloe Coleman also star in supporting roles.',
    id: "a70bcee4-e546-4ee9-a20e-c74518deca78",
    rating: 0.41337241074389874,
  },
  {
    displayImageUrl:
      "https://upload.wikimedia.org/wikipedia/en/a/ad/Blacklight_%28film%29.jpg",
    displayName: "Blacklight",
    format: "Movie",
    genres: ["Action", "Thriller"],
    summary:
      "Blacklight is a 2022 action thriller film directed and co-written by Mark Williams. The film stars Liam Neeson as a brooding FBI fixer who gets involved in a government conspiracy; Emmy Raver-Lampman, Taylor John Smith, and Aidan Quinn also star.",
    id: "95687a58-a5a6-44a5-b7bf-88a3049eb4aa",
    rating: 0.46107479392662754,
  },
  {
    displayImageUrl:
      "https://upload.wikimedia.org/wikipedia/en/e/ef/I_Want_You_Back_%28film%29.jpg",
    displayName: "I Want You Back",
    format: "Movie",
    genres: ["Comedy", "Romance"],
    summary:
      "I Want You Back is a 2022 American romantic comedy film directed by Jason Orley from a screenplay by Isaac Aptaker and Elizabeth Berger. It stars Charlie Day and Jenny Slate as two recently dumped strangers who team up to sabotage the new relationships of their exes. Manny Jacinto, Clark Backo, and Mason Gooding also star.",
    id: "27ef791a-b209-4e10-99c8-dcd08a6ffdad",
    rating: 0.2247730671962025,
  },
  {
    displayImageUrl:
      "https://upload.wikimedia.org/wikipedia/en/f/fc/Tall_Girl_2.jpg",
    displayName: "Tall Girl 2",
    format: "Movie",
    genres: ["Comedy", "Teen", "Romance"],
    summary:
      "Tall Girl 2 is a 2022 American teen romantic comedy film directed by Emily Ting from a screenplay by Sam Wolfson. The film stars Ava Michelle, Sabrina Carpenter, Griffin Gluck, and Steve Zahn. It is the sequel to the 2019 film Tall Girl. The film was released on February 11, 2022 and received mixed reviews.",
    id: "5ef40a0f-8135-4596-a8a6-a77534394ea2",
    rating: 0.5447675906898537,
  },
  {
    displayImageUrl:
      "https://upload.wikimedia.org/wikipedia/en/8/87/The_Sky_Is_Everywhere.jpeg",
    displayName: "The Sky Is Everywhere",
    format: "Movie",
    genres: ["Drama", "Romance"],
    summary:
      "The Sky Is Everywhere is a 2022 American coming-of-age romantic drama film directed by Josephine Decker and written by Jandy Nelson, based on the 2010 novel of the same name. The film stars Grace Kaufman, Pico Alexander, Jacques Colimon, Cherry Jones, and Jason Segel.",
    id: "52495ad3-9cfe-495a-b35c-391f2732b8b3",
    rating: 0.013734304104388917,
  },
  {
    displayImageUrl:
      "https://upload.wikimedia.org/wikipedia/en/3/31/The_In_Between_poster.jpeg",
    displayName: "The In Between",
    format: "Movie",
    genres: ["Romance", "Science Fiction"],
    summary:
      "The In Between is a 2022 American science fiction romance film directed by Arie Posin, written by Marc Klein, and starring Joey King and Kyle Allen. The film was released on February 11, 2022 on Paramount+ and on April 8, 2022 on Netflix.",
    id: "10f2fe62-6a69-46c3-acfb-56a683b23871",
    rating: 0.6222038379518204,
  },
  {
    displayImageUrl:
      "https://upload.wikimedia.org/wikipedia/en/d/dc/Poster_for_Fistful_of_Vengeance.png",
    displayName: "Fistful of Vengeance",
    format: "Movie",
    genres: ["Action", "Supernatural", "Thriller"],
    summary:
      "Fistful of Vengeance is a 2022 American supernatural action thriller film directed by Roel Reiné, and written by Cameron Litvack, Jessica Chou and Yalun Tu. The film serves as a follow-up to the first season of the television series Wu Assassins, and stars Iko Uwais, Lewis Tan, Lawrence Kao, JuJu Chan, Pearl Thusi, Francesca Corney, Jason Tobin, Rhatha Phongam and Simon Kuke. The film was released worldwide on February 17, 2022, on Netflix.",
    id: "bc631e9c-4df2-48ed-bdc3-7de5f269a4b0",
    rating: 0.21927483609576548,
  },
  {
    displayImageUrl:
      "https://upload.wikimedia.org/wikipedia/en/d/d4/Uncharted_Official_Poster.jpg",
    displayName: "Uncharted",
    format: "Movie",
    genres: ["Action", "Adventure"],
    summary:
      "Uncharted is a 2022 American action-adventure film directed by Ruben Fleischer from a screenplay by Rafe Lee Judkins, Art Marcum, and Matt Holloway, based on the video game franchise of the same name developed by Naughty Dog and published by Sony Interactive Entertainment. It stars Tom Holland as Nathan Drake and Mark Wahlberg as Victor Sullivan, with Sophia Ali, Tati Gabrielle, and Antonio Banderas in supporting roles. In the film, Drake is recruited by Sullivan in a race against corrupt billionaire Santiago Moncada (Banderas) and mercenary leader Jo Braddock (Gabrielle) to locate the fabled treasure of the Magellan expedition.",
    id: "701fd8cb-de7f-4996-afb0-a637040f4dc0",
    rating: 0.35275280342642024,
  },
  {
    displayImageUrl:
      "https://upload.wikimedia.org/wikipedia/en/1/12/Dog_%282022_film%29.jpg",
    displayName: "Dog",
    format: "Movie",
    genres: ["Comedy", "Drama"],
    summary:
      "Dog is a 2022 American comedy drama road film directed by Channing Tatum and Reid Carolin, both making their respective film directorial debuts, based on a story by Carolin and Brett Rodriguez. The film stars Tatum as an Army Ranger who is tasked with escorting the military dog of his fallen friend to his funeral. The film also stars Jane Adams, Kevin Nash, Q'orianka Kilcher, Ethan Suplee, Emmy Raver-Lampman, and Nicole LaLiberte in supporting roles. The film was produced by Free Association on a budget of $15 million.",
    id: "0ef92aa1-2ad2-45ef-9145-ce37337ff593",
    rating: 0.378371836007656,
  },
  {
    displayImageUrl:
      "https://upload.wikimedia.org/wikipedia/en/d/dd/NetflixTCMPoster.jpg",
    displayName: "Texas Chainsaw Massacre",
    format: "Movie",
    genres: ["Slasher"],
    summary:
      "Texas Chainsaw Massacre is a 2022 American slasher film directed by David Blue Garcia, with a screenplay by Chris Thomas Devlin, from a story by Fede Álvarez and Rodo Sayagues. It is the ninth installment of the Texas Chainsaw Massacre franchise. Set several decades after the original film, the story focuses on the serial killer Leatherface targeting a group of young adults and coming into conflict with a vengeful survivor of his previous murders. The project is a joint-venture production between Legendary Pictures, Exurbia Films, and Bad Hombre. The film stars Sarah Yarkin, Elsie Fisher, Mark Burnham, Moe Dunford, Nell Hudson, Jessica Allain, Olwen Fouéré, Jacob Latimore, and Alice Krige.",
    id: "241436c2-7010-4de0-b5df-fe17980a02d4",
    rating: 0.34578006067008293,
  },
  {
    displayImageUrl:
      "https://upload.wikimedia.org/wikipedia/en/5/5b/The_Cursed_%282021_film%29.jpeg",
    displayName: "The Cursed",
    format: "Movie",
    genres: ["Horror"],
    summary:
      "The Cursed is a 2021 gothic horror film directed and written by Sean Ellis. The film stars Boyd Holbrook, Kelly Reilly, Alistair Petrie, and Roxane Duran. The film premiered at the 2021 Sundance Film Festival under the title Eight for Silver. The film was released in the United States on February 18, 2022, by LD Entertainment. It received generally positive reviews from critics.",
    id: "ce4ce9ee-7544-48b3-924d-ec69201a2146",
    rating: 0.394156499181209,
  },
  {
    displayImageUrl:
      "https://upload.wikimedia.org/wikipedia/en/a/a3/A_Fairy_Tale_After_All_poster.png",
    displayName: "A Fairy Tale After All",
    format: "Movie",
    genres: ["Fantasy", "Musical"],
    summary:
      "A Fairy Tale After All is a 2022 American musical fantasy film produced, written and directed by Erik Peter Carlson. The film stars Emily Shenaut, Brian Hull, Gabriel Burrafato, Bridget Winder, Timothy N. Kopacz, and Anna Brisbin. The film was released theatrical and VOD by Vertical Entertainment on February 18, 2022.",
    id: "175b5ab9-247d-4104-ae6e-58ebc4fa04e0",
    rating: 0.6334256670857841,
  },
  {
    displayImageUrl:
      "https://upload.wikimedia.org/wikipedia/en/e/e4/Cyrano_poster.jpg",
    displayName: "Cyrano",
    format: "Movie",
    genres: ["Drama", "Musical", "Romance"],
    summary:
      "Cyrano is a 2021 musical romantic drama film directed by Joe Wright and with a screenplay by Erica Schmidt, based on Schmidt's 2018 stage musical of the same name, itself based on the 1897 Edmond Rostand play Cyrano de Bergerac. The film stars Peter Dinklage, Haley Bennett, Kelvin Harrison Jr., and Ben Mendelsohn.",
    id: "ec2fe9dc-5327-43fb-8686-a85795b46859",
    rating: 0.602845950334316,
  },
  {
    displayImageUrl:
      "https://upload.wikimedia.org/wikipedia/en/1/1a/Studio_666.jpeg",
    displayName: "Studio 666",
    format: "Movie",
    genres: ["Comedy", "Horror"],
    summary:
      "Studio 666 is a 2022 American horror comedy film directed by BJ McDonnell from a screenplay by Jeff Buhler and Rebecca Hughes, based on a story by Dave Grohl. Grohl stars, alongside his Foo Fighters bandmates Nate Mendel, Pat Smear, Taylor Hawkins, Chris Shiflett, and Rami Jaffee. Whitney Cummings, Leslie Grossman, Will Forte, Jenna Ortega, and Jeff Garlin co-star in the ensemble cast. In the film, the Foo Fighters move into a cursed mansion to record a new album.",
    id: "0919b5f3-e313-49b4-af0a-8137c4fc1f87",
    rating: 0.08007242344967658,
  },
  {
    displayImageUrl:
      "https://upload.wikimedia.org/wikipedia/en/1/1c/A_madea_homecoming.jpeg",
    displayName: "A Madea Homecoming",
    format: "Movie",
    genres: ["Comedy"],
    summary:
      "A Madea Homecoming is a 2022 American comedy film produced, written, and directed by Tyler Perry and his second film to be released by Netflix. Besides Perry, the film stars Cassi Davis-Patton, David Mann, Tamela Mann, Gabrielle Dennis, and Brendan O'Carroll. It is the twelfth film in the Madea cinematic universe which tells the story of Madea partaking in her great-grandson's college graduation party as hidden secrets emerge and surprise visitors show up. It was released on February 25, 2022. It is adapted from Perry's stage play Madea's Farewell Play, the first Madea film to be adapted from a stage play since A Madea Christmas. The film is also a crossover between the Madea franchise and the Irish sitcom Mrs. Brown's Boys.",
    id: "d051f13b-03e3-4d2d-a3e4-07e61765a1bf",
    rating: 0.5717408789612917,
  },
  {
    displayImageUrl:
      "https://upload.wikimedia.org/wikipedia/en/1/1d/No_Exit_poster.jpeg",
    displayName: "No Exit",
    format: "Movie",
    genres: ["Thriller", "War"],
    summary:
      'No Exit is a 2022 American thriller film directed by Damien Power from a screenplay by Andrew Barrer and Gabriel Ferrari, based on the 2017 novel of the same name by Taylor Adams. It stars Havana Rose Liu as a recovering drug addict who discovers a kidnapping in progress while stranded at a rest stop during a blizzard. Danny Ramirez, David Rysdahl, Dale Dickey, and Dennis Haysbert co-star as the four suspects while Mila Harris plays the victim. No Exit was released on February 25, 2022, on Hulu by 20th Century Studios. It received mixed reviews from critics, who categorized it as a "reasonably diverting" popcorn movie.',
    id: "e8301d90-74d6-42ae-8a64-e20576cd4a27",
    rating: 0.25541600922689756,
  },
  {
    displayImageUrl:
      "https://upload.wikimedia.org/wikipedia/en/3/3c/Gasoline_Alley_%282022_film%29.jpeg",
    displayName: "Gasoline Alley",
    format: "Movie",
    genres: ["Action", "Thriller", "War"],
    summary:
      "Gasoline Alley is a 2022 American action thriller film directed by Edward John Drake, starring Devon Sawa, Bruce Willis and Luke Wilson. It was released in the United States on February 25, 2022 by Saban Films.",
    id: "8d407832-85a5-4773-ad37-08c2d735f880",
    rating: 0.40863403474799953,
  },
  {
    displayImageUrl:
      "https://upload.wikimedia.org/wikipedia/en/f/ff/The_Batman_%28film%29_poster.jpg",
    displayName: "The Batman",
    format: "Movie",
    genres: ["Superhero"],
    summary:
      "The Batman is a 2022 American superhero film based on the DC Comics character Batman. Produced by Warner Bros. Pictures, DC Films, 6th & Idaho, and Dylan Clark Productions, and distributed by Warner Bros. Pictures, it is a reboot of the Batman film franchise. The film was directed by Matt Reeves, who wrote the screenplay with Peter Craig. It stars Robert Pattinson as Bruce Wayne / Batman alongside Zoë Kravitz, Paul Dano, Jeffrey Wright, John Turturro, Peter Sarsgaard, Andy Serkis, and Colin Farrell. The film sees Batman, who has been fighting crime in Gotham City for two years, uncover corruption while pursuing the Riddler (Dano), a serial killer who targets Gotham's corrupt elite.",
    id: "ac681380-9630-4ad5-a188-c8cc10913dc3",
    rating: 0.671278894948437,
  },
  {
    displayImageUrl:
      "https://upload.wikimedia.org/wikipedia/en/8/84/After_Yang.jpg",
    displayName: "After Yang",
    format: "Movie",
    genres: ["Drama", "Science Fiction"],
    summary:
      "After Yang is a 2021 American science fiction drama film adaptation written, directed, and edited by Kogonada. It stars Colin Farrell, Jodie Turner-Smith, Justin H. Min, Malea Emma Tjandrawidjaja, and Haley Lu Richardson. The plot follows a family's attempts to repair their unresponsive robotic child. The film had its world premiere at the Cannes Film Festival on July 8, 2021, and was released on March 4, 2022, by A24 and Showtime. It received generally positive reviews from critics.",
    id: "3ee4f971-79ef-4eb9-834b-7b2ce561082b",
    rating: 0.5681361342829898,
  },
  {
    displayImageUrl:
      "https://upload.wikimedia.org/wikipedia/en/b/b0/Fresh_%282022%29_Poster.jpeg",
    displayName: "Fresh",
    format: "Movie",
    genres: ["Horror", "Thriller"],
    summary:
      "Fresh is a 2022 American horror thriller film directed by Mimi Cave, in her directorial debut, from a screenplay by Lauryn Kahn. The film stars Daisy Edgar-Jones and Sebastian Stan. It is a co-production between Legendary Pictures and Hyperobject Industries; Adam McKay produced the film alongside Kevin J. Messick.",
    id: "607ae9c3-ea3d-415d-9a0f-d4bf659e62eb",
    rating: 0.5568796043044537,
  },
  {
    displayImageUrl:
      "https://upload.wikimedia.org/wikipedia/en/f/f9/A_Day_to_Die_poster.png",
    displayName: "A Day to Die",
    format: "Movie",
    genres: ["Action"],
    summary:
      "A Day to Die is an 2022 American heist action film written, directed, and produced by Wes Miller. It stars Kevin Dillon, Bruce Willis, Gianni Capaldi, Brooke Butler, Leon, and Frank Grillo. The film was released on March 4, 2022, by Vertical Entertainment.",
    id: "f13edac7-9779-4b23-bb30-1fbfa52bcd69",
    rating: 0.928094976773266,
  },
  {
    displayImageUrl:
      "https://upload.wikimedia.org/wikipedia/en/d/d7/The_Adam_Project_poster.png",
    displayName: "The Adam Project",
    format: "Movie",
    genres: ["Action", "Comedy", "Science Fiction"],
    summary:
      "The Adam Project is a 2022 American science fiction action comedy film co-produced by Skydance Media, Maximum Effort, and 21 Laps Entertainment. It was directed by Shawn Levy from a screenplay written by Jonathan Tropper, T.S. Nowlin, Jennifer Flackett and Mark Levin. The movie stars Ryan Reynolds, Walker Scobell, Mark Ruffalo, Jennifer Garner, Catherine Keener and Zoe Saldaña. The plot follows a fighter pilot (Reynolds) from the future, who goes back in time and encounters his younger self (Scobell).",
    id: "08a5e94e-eafb-4d29-ad02-7ac6796ecee9",
    rating: 0.7274608431087481,
  },
  {
    displayImageUrl:
      "https://upload.wikimedia.org/wikipedia/en/9/9e/Turning_Red_poster.jpg",
    displayName: "Turning Red",
    format: "Movie",
    genres: ["Animated", "Comedy", "Fantasy"],
    summary:
      'Turning Red is a 2022 American computer-animated fantasy comedy film produced by Pixar Animation Studios and distributed by Walt Disney Studios Motion Pictures. It was directed by Domee Shi and produced by Lindsey Collins, from a screenplay written by Shi and Julia Cho, and a story by Shi, Cho, and Sarah Streicher. The film marks the first Pixar feature film solely directed by a woman. It stars the voices of Rosalie Chiang, Sandra Oh, Ava Morse, Hyein Park, Maitreyi Ramakrishnan, Orion Lee, Wai Ching Ho, Tristan Allerick Chen, and James Hong. Set in Toronto, Ontario, in 2002, the film follows Meilin "Mei" Lee (Chiang), a 13-year-old Chinese-Canadian student who transforms into a giant red panda when she experiences any strong emotion, due to a hereditary curse.',
    id: "9c601085-bafe-4e11-ac50-114b3c669f36",
    rating: 0.0760361276812711,
  },
  {
    displayImageUrl:
      "https://upload.wikimedia.org/wikipedia/en/e/ee/Tyson%27s_Run_New_Poster.jpg",
    displayName: "Tyson's Run",
    format: "Movie",
    genres: ["Drama"],
    summary:
      "Tyson's Run is a 2022 American drama film written and directed by Kim Bass and starring Rory Cochrane, Amy Smart, Major Dodson and Barkhad Abdi.",
    id: "65dd4e20-2944-4d8e-881f-585794f51eda",
    rating: 0.15230161682243093,
  },
  {
    displayImageUrl:
      "https://upload.wikimedia.org/wikipedia/en/c/c6/Rescued_by_Ruby.jpeg",
    displayName: "Rescued by Ruby",
    format: "Movie",
    genres: ["Drama", "Biography"],
    summary:
      "Rescued by Ruby is a 2022 American biographical drama film directed by Katt Shea. Its story follows a state trooper named Dan, who dreams of joining the K-9 search and rescue team of the state police, however has been unsuccessful in doing so until he befriends a shelter dog named Ruby. The film is based on a true story. The film was released on March 17, 2022, by Netflix.",
    id: "dadab85a-bdaa-43af-9a64-16afffa511c8",
    rating: 0.8399038177627929,
  },
  {
    displayImageUrl:
      "https://upload.wikimedia.org/wikipedia/en/c/cc/The_Outfit_%28film%29.jpg",
    displayName: "The Outfit",
    format: "Movie",
    genres: ["Crime", "Drama", "Thriller"],
    summary:
      "The Outfit is a 2022 American psychological crime drama thriller film directed by Graham Moore in his directorial debut from a screenplay by Moore and Johnathan McClain. The film stars Mark Rylance who leads an ensemble cast including Zoey Deutch, Johnny Flynn, Dylan O'Brien, Nikki Amuka-Bird, and Simon Russell Beale. Rylance plays an English cutter who works at a tailor shop in Chicago, whose primary customers are a family of vicious gangsters. The film premiered at the 72nd Berlin International Film Festival on February 14, 2022, and released in the United States on March 18, 2022, by Focus Features, to positive reviews.",
    id: "e66007e6-4d9b-418b-8167-b97a905bb9e2",
    rating: 0.08515440122943008,
  },
  {
    displayImageUrl:
      "https://upload.wikimedia.org/wikipedia/en/3/37/Deep_Water_%282022_film%29.jpg",
    displayName: "Deep Water",
    format: "Movie",
    genres: ["Erotic", "Thriller"],
    summary:
      "Deep Water is a 2022 erotic psychological thriller film directed by Adrian Lyne, from a screenplay by Zach Helm and Sam Levinson, based on the 1957 novel of the same name by Patricia Highsmith. The film stars Ben Affleck and Ana de Armas, with Tracy Letts, Lil Rel Howery, Dash Mihok, Finn Wittrock, Kristen Connolly, and Jacob Elordi appearing in supporting roles. It marks Lyne's return to filmmaking after a 20-year absence since his last film, Unfaithful (2002).",
    id: "e4623859-7214-4e1c-8c4b-9a484c8a18a9",
    rating: 0.9720378192584682,
  },
  {
    displayImageUrl:
      "https://upload.wikimedia.org/wikipedia/en/b/bf/Cheaper_by_the_Dozen_2022_poster.jpg",
    displayName: "Cheaper by the Dozen",
    format: "Movie",
    genres: ["Comedy", "Family"],
    summary:
      "Cheaper by the Dozen is a 2022 American family-comedy film directed by Gail Lerner from a screenplay written by Kenya Barris and Jenifer Rice-Genzuk Henry, with Shawn Levy serving as an executive producer. It is the third film adaptation of the 1948 semi-autobiographical novel of the same name by Frank Bunker Gilbreth Jr. and his sister Ernestine Gilbreth Carey following the 1950 and 2003 films. The film stars Gabrielle Union, Zach Braff, Erika Christensen, and Timon Kyle Durratt with supporting roles by Christian Cote, Sebastian Cote, Christina Anthony, Caylee Blosenski, Journey Brown, Brittany Daniel, Mykal-Michelle Harris, Cynthia Daniel Hauser, Abby Elliott, Ron Funches, Leo Abelo Perry, Luke Prael, June Diane Raphael, Andre Robinson, Kylie Rogers, and Aryan Simhadri. It tells the story of a restaurant proprietor and his second wife as they raise the kids from the restaurateur's previous marriage, the second wife's family, and the children they later conceived as their respective exes are still involved in their children's life.",
    id: "b9cb5177-ceb5-4b90-8b5b-0db59ee2edfa",
    rating: 0.4768001544656508,
  },
  {
    displayImageUrl:
      "https://upload.wikimedia.org/wikipedia/en/2/2e/Windfall_%282022_film%29.jpg",
    displayName: "Windfall",
    format: "Movie",
    genres: ["Crime", "Thriller"],
    summary:
      "Windfall is a 2022 American crime thriller film directed by Charlie McDowell from a screenplay by Andrew Kevin Walker and Justin Lader. The film stars Jason Segel, Lily Collins, and Jesse Plemons.",
    id: "00f47bae-deb1-4e13-97aa-9338ec44208f",
    rating: 0.12706716469224522,
  },
  {
    displayImageUrl:
      "https://upload.wikimedia.org/wikipedia/en/3/34/X_%282022_film%29.jpeg",
    displayName: "X",
    format: "Movie",
    genres: ["Slasher"],
    summary:
      "X is a 2022 American slasher film written, directed, produced and edited by Ti West. It stars Mia Goth in dual roles: a young woman named Maxine and Pearl, an elderly woman. The film also stars Jenna Ortega, Martin Henderson, Brittany Snow, Owen Campbell, Stephen Ure, and Scott Mescudi appearing in supporting roles. The film follows a cast and crew who gather to make a pornographic film on an elderly couple's rural Texas property, but find themselves threatened by the killer couple.",
    id: "39496f67-7f7d-4a63-bebb-53d6ffc71e99",
    rating: 0.13250750088768237,
  },
  {
    displayImageUrl:
      "https://upload.wikimedia.org/wikipedia/en/4/43/Umma_%282022_film%29.jpg",
    displayName: "Umma",
    format: "Movie",
    genres: ["Horror", "Supernatural"],
    summary:
      "Umma (Korean: 엄마) is a 2022 American supernatural horror film, written and directed by Iris K. Shim. The film stars Sandra Oh, Fivel Stewart, MeeWha Alana Lee, Tom Yi, Odeya Rush, and Dermot Mulroney. Sam Raimi serves as a producer on the film. The film follows Amanda (Oh), a single mother who lives with her daughter in an isolated farm being haunted by her mother's ghost.",
    id: "9183c9b5-d40e-4280-ab38-b9b395b06a5f",
    rating: 0.007754206932681251,
  },
  {
    displayImageUrl:
      "https://upload.wikimedia.org/wikipedia/en/0/00/Alice_%282022_film%29.jpg",
    displayName: "Alice",
    format: "Movie",
    genres: ["Crime", "Thriller"],
    summary:
      "Alice is a 2022 American crime thriller film set in the 1970s, written and directed by Krystin Ver Linden, in her directorial debut. The film stars Keke Palmer, Jonny Lee Miller, Common, Gaius Charles, and Alicia Witt.",
    id: "a6f2d420-5cbd-480d-b373-ad20d7e7588b",
    rating: 0.1261342765545448,
  },
  {
    displayImageUrl:
      "https://upload.wikimedia.org/wikipedia/en/f/f6/Master_poster.jpg",
    displayName: "Master",
    format: "Movie",
    genres: ["Horror", "Thriller"],
    summary:
      "Master is a 2022 American psychological horror thriller film written and directed by Mariama Diallo in her directorial debut. The film stars Regina Hall, Zoe Renee, and Amber Gray.",
    id: "3c948e23-aac9-4350-a3bc-414f29a7c80e",
    rating: 0.529867726412715,
  },
  {
    displayImageUrl:
      "https://upload.wikimedia.org/wikipedia/en/0/03/Measure_of_Revenge.jpeg",
    displayName: "Measure of Revenge",
    format: "Movie",
    genres: ["Thriller"],
    summary:
      "Measure of Revenge is a 2022 American thriller film directed by Peyfa. It stars Bella Thorne, Melissa Leo, Roma Maffia, Jake Weary and Adrian Martinez. Timur Bekbosunov, Jordan Galland wrote the screenplay.\nJen Gatien and Peter Wong produced the film.",
    id: "06c1470a-9ea4-45d5-88a1-2651bfc60169",
    rating: 0.5904510248376551,
  },
  {
    displayImageUrl:
      "https://upload.wikimedia.org/wikipedia/en/e/ee/TheLostCityPoster.jpg",
    displayName: "The Lost City",
    format: "Movie",
    genres: ["Action", "Adventure", "Comedy"],
    summary:
      "The Lost City is a 2022 American action-adventure comedy film directed by the Nee brothers, who co-wrote the screenplay with Oren Uziel and Dana Fox, from a story conceived by Seth Gordon. It stars Sandra Bullock and Channing Tatum as a romance novelist and her cover model respectively who must escape a billionaire who wants her to find a lost ancient burial chamber described in one of her books. The film co-stars Da'Vine Joy Randolph and Brad Pitt.",
    id: "1499e2e1-e3ab-4bb8-b95e-d9f322674bb9",
    rating: 0.8981652210578277,
  },
  {
    displayImageUrl:
      "https://upload.wikimedia.org/wikipedia/en/1/1e/Everything_Everywhere_All_at_Once.jpg",
    displayName: "Everything Everywhere All at Once",
    format: "Movie",
    genres: ["Comedy", "Drama", "Science Fiction"],
    summary:
      "Everything Everywhere All at Once is a 2022 American absurdist science fiction comedy-drama film written and directed by Daniel Kwan and Daniel Scheinert, who produced it with Anthony and Joe Russo and Jonathan Wang. Michelle Yeoh stars as Evelyn Quan Wang, a Chinese-American immigrant who, while being audited by the IRS, discovers that she must connect with parallel universe versions of herself to prevent a powerful being from destroying the multiverse. The film also stars Stephanie Hsu, Ke Huy Quan, Jamie Lee Curtis, Jenny Slate, Harry Shum Jr., and James Hong in supporting roles. And it was fun. They had a lot of fun when they made this movie. It was fun to watch too",
    id: "7d2f44f4-a41a-4323-b6f5-463fb8e2aede",
    rating: 0.5626379115289741,
  },
  {
    displayImageUrl:
      "https://upload.wikimedia.org/wikipedia/en/e/e5/Infinite_Storm.png",
    displayName: "Infinite Storm",
    format: "Movie",
    genres: ["Adventure", "Drama"],
    summary:
      "Infinite Storm is a 2022 American drama adventure film directed by Małgorzata Szumowska, co-directed by Michał Englert, and with a screenplay by Josh Rollins, based on the article High Places: Footprints in the Snow Lead to an Emotional Rescue by Ty Gagne. The film stars Naomi Watts, Billy Howle, Denis O'Hare, Parker Sawyers and Eliot Sumner.",
    id: "671fbf43-ac41-487b-8dea-bcd0bd6cf6c9",
    rating: 0.3420692842752169,
  },
  {
    displayImageUrl:
      "https://upload.wikimedia.org/wikipedia/en/a/a9/7DaysFilmPoster.png",
    displayName: "7 Days",
    format: "Movie",
    genres: ["Comedy", "Romance"],
    summary:
      "7 Days is an 2021 American romantic comedy film directed by Roshan Sethi, in his directorial debut, from a screenplay by Sethi and Karan Soni. It stars Soni, Geraldine Viswanathan, Mark Duplass, Zenobia Shroff, Aparna Nancherla, Gita Reddy and Jeffrey Self.",
    id: "79255bcb-ac20-43ff-8a7f-67d7771c8b0f",
    rating: 0.5078626003159514,
  },
  {
    displayImageUrl:
      "https://upload.wikimedia.org/wikipedia/en/1/19/Moonshot_%282022_film%29.jpg",
    displayName: "Moonshot",
    format: "Movie",
    genres: ["Comedy", "Romance", "Science Fiction"],
    summary:
      "Moonshot is a 2022 American science-fiction romantic comedy film directed by Chris Winterbauer and written by Max Taxe. It stars Cole Sprouse, Lana Condor, Mason Gooding, Emily Rudd, and Zach Braff. The plot follows a college student (Condor) who helps a barista (Sprouse) sneak on board a space shuttle to Mars. The film was released on HBO Max on March 31, 2022, and was removed from the service in August.",
    id: "9925cd7f-e3bd-4c36-92ad-eb9e86c1dc56",
    rating: 0.7384366284110722,
  },
  {
    displayImageUrl:
      "https://upload.wikimedia.org/wikipedia/en/2/2f/Morbius_%28film%29_poster.jpg",
    displayName: "Morbius",
    format: "Movie",
    genres: ["Superhero"],
    summary:
      "Morbius is a 2022 American superhero film based on the Marvel Comics character of the same name, produced by Columbia Pictures in association with Marvel. Distributed by Sony Pictures Releasing, it is the third film in Sony's Spider-Man Universe (SSU). Directed by Daniel Espinosa and written by Matt Sazama and Burk Sharpless, it stars Jared Leto as Dr. Michael Morbius, alongside Matt Smith, Adria Arjona, Jared Harris, Al Madrigal, and Tyrese Gibson. In the film, Morbius and his surrogate brother Milo (Smith) become living vampires after curing themselves of a rare blood disease.",
    id: "31de63a7-0920-4252-8a71-d043a84f14e1",
    rating: 0.029723074553825057,
  },
  {
    displayImageUrl:
      "https://upload.wikimedia.org/wikipedia/en/8/82/The_Bubble_%282022_film%29.jpg",
    displayName: "The Bubble",
    format: "Movie",
    genres: ["Comedy"],
    summary:
      "The Bubble is a 2022 American comedy film directed by Judd Apatow from a screenplay co-written with Pam Brady. The film features an ensemble cast that includes Karen Gillan, Vir Das, Pedro Pascal, Iris Apatow, Fred Armisen, Maria Bakalova, David Duchovny, Keegan-Michael Key, Leslie Mann, Kate McKinnon, Guz Khan, Peter Serafinowicz and Harry Trevaldwyn. It follows the cast and crew of a blockbuster action franchise who attempt to shoot a sequel while quarantining at a posh hotel during the COVID-19 pandemic.",
    id: "5d9a648b-24fd-47a7-937d-601b6d9653ac",
    rating: 0.2086350396139589,
  },
  {
    displayImageUrl:
      "https://upload.wikimedia.org/wikipedia/en/c/cb/The_Contractor_%282022_film%29.jpg",
    displayName: "The Contractor",
    format: "Movie",
    genres: ["Action", "Thriller"],
    summary:
      "The Contractor is a 2022 American action thriller film directed by Tarik Saleh in his English-language film debut. The film stars Chris Pine, Ben Foster, Gillian Jacobs, Eddie Marsan, J. D. Pardo, Florian Munteanu, and Kiefer Sutherland. Filming began in Europe including Fort Bragg in October 2019 and wrapped in the filming at the end of 2019.",
    id: "9b2a8bfa-6125-4294-8531-00f71176373b",
    rating: 0.4158416206600226,
  },
  {
    displayImageUrl:
      "https://upload.wikimedia.org/wikipedia/en/3/3b/Better_Nate_Than_Ever_poster.jpeg",
    displayName: "Better Nate Than Ever",
    format: "Movie",
    genres: ["Comedy", "Musical"],
    summary:
      "Better Nate Than Ever is a 2022 American musical comedy film written and directed by Tim Federle, based on his 2013 novel of the same name. Described as a coming-of-age story involving musical theater and Broadway, the story centers on the titular Nate Foster, played by Rueby Wood in his first film role. Lisa Kudrow, Aria Brooks and Joshua Bassett serve in supporting cast roles.",
    id: "4c5ece75-1397-4176-8e73-986c160c7660",
    rating: 0.6916696941715363,
  },
  {
    displayImageUrl:
      "https://upload.wikimedia.org/wikipedia/en/c/cd/Apollo_10%C2%BD_A_Space_Age_Childhood_Poster.jpeg",
    displayName: "Apollo 10 1⁄2: A Space Age Childhood",
    format: "Movie",
    genres: ["Animated", "Drama", "Teen"],
    summary:
      "Apollo 10+1⁄2: A Space Age Childhood is a 2022 American animated coming of age drama film set during the events preceding the Apollo 11 Moon landing, loosely based on the childhood of writer, director, and producer Richard Linklater. It presents a fictional tale of a fourth-grader who becomes the first person to land on the Moon and stars Glen Powell, Jack Black, Zachary Levi and Josh Wiggins.",
    id: "2da3f2a8-00ac-4c77-b1e9-cdbc3e7b5f40",
    rating: 0.2834354135749195,
  },
  {
    displayImageUrl:
      "https://upload.wikimedia.org/wikipedia/en/3/3e/Sonic_the_Hedgehog_2_film_poster.jpg",
    displayName: "Sonic the Hedgehog 2",
    format: "Movie",
    genres: ["Action", "Adventure", "Comedy"],
    summary:
      "Sonic the Hedgehog 2 is a 2022 action-adventure comedy film based on the video game series published by Sega, and the sequel to Sonic the Hedgehog (2020). Directed by Jeff Fowler and written by Pat Casey, Josh Miller, and John Whittington, the film stars Ben Schwartz, Jim Carrey, James Marsden, Tika Sumpter, Natasha Rothwell, Adam Pally, Lee Majdoub, and Colleen O'Shaughnessey reprising their roles, with Idris Elba and Shemar Moore joining the cast. In the film, after settling in Green Hills, Sonic tries to prove himself as a hero, but his big test comes when the evil Doctor Robotnik returns, alongside his new rival, Knuckles the Echidna, in search of the Master Emerald.",
    id: "859a8efe-ae17-4676-8e58-03fd43c1549c",
    rating: 0.7360654202944847,
  },
  {
    displayImageUrl:
      "https://upload.wikimedia.org/wikipedia/en/d/d2/Ambulance_film_poster.jpg",
    displayName: "Ambulance",
    format: "Movie",
    genres: ["Action", "Thriller"],
    summary:
      "Ambulance is a 2022 American action thriller film directed and co-produced by Michael Bay and written by Chris Fedak. A co-production between New Republic Pictures, Project X Entertainment and Bay Films, it is based on the 2005 Danish film of the same name by Laurits Munch-Petersen and Lars Andreas Pedersen. It stars Jake Gyllenhaal, Yahya Abdul-Mateen II, and Eiza González and follows two adoptive siblings turned bank robbers who hijack an ambulance and take two first responders hostage.",
    id: "a935949b-af1c-4191-8d0d-0844380c96df",
    rating: 0.22623784421977788,
  },
  {
    displayImageUrl:
      "https://upload.wikimedia.org/wikipedia/en/f/f0/All_the_Old_Knives.jpg",
    displayName: "All the Old Knives",
    format: "Movie",
    genres: ["Spy", "Thriller"],
    summary:
      "All the Old Knives is a 2022 American spy thriller film directed by Janus Metz Pedersen and written by Olen Steinhauer. It is based on Steinhauer's 2015 novel of the same name. The film stars Chris Pine, Thandiwe Newton, Laurence Fishburne, Jonathan Pryce and David Dawson.",
    id: "efa3dd30-0230-4702-8e23-af0549ab4942",
    rating: 0.19585970009991915,
  },
  {
    displayImageUrl:
      "https://upload.wikimedia.org/wikipedia/en/c/cd/Metal_Lords_Poster.jpg",
    displayName: "Metal Lords",
    format: "Movie",
    genres: ["Comedy", "Drama", "Teen"],
    summary:
      "Metal Lords is a 2022 American teen comedy-drama film written by D. B. Weiss and directed by Peter Sollett. Its story follows two high school best friends and metal music lovers, Hunter and Kevin, who set out to start a metal band, against societal norms. The film was released on Netflix on April 8, 2022.",
    id: "62999d99-1b1f-4e56-a423-91bfe1d30a01",
    rating: 0.45152192952730474,
  },
  {
    displayImageUrl:
      "https://upload.wikimedia.org/wikipedia/en/d/db/Father_Stu.jpg",
    displayName: "Father Stu",
    format: "Movie",
    genres: ["Drama", "Biography"],
    summary:
      "Father Stu is a 2022 biographical drama film starring Mark Wahlberg as Stuart Long, a boxer-turned-Catholic priest who lives with a progressive muscle disorder. The film is written and directed by Rosalind Ross in her directorial debut. The film was produced on a budget of $4 million.",
    id: "7a8101f4-b156-43ff-9b4c-22a3a5c96fae",
    rating: 0.4467293265803829,
  },
  {
    displayImageUrl:
      "https://upload.wikimedia.org/wikipedia/en/3/34/Fantastic_Beasts-_The_Secrets_of_Dumbledore.png",
    displayName: "Fantastic Beasts: The Secrets of Dumbledore",
    format: "Movie",
    genres: ["Fantasy"],
    summary:
      "Fantastic Beasts: The Secrets of Dumbledore is a 2022 fantasy film directed by David Yates from a screenplay by J. K. Rowling and Steve Kloves, based on a screenplay by Rowling. The sequel to Fantastic Beasts: The Crimes of Grindelwald (2018), it is the third instalment in the  Fantastic Beasts film series and the eleventh overall in the Wizarding World franchise. The film features an ensemble cast that includes Eddie Redmayne, Jude Law, Ezra Miller, Dan Fogler, Alison Sudol, Callum Turner, Jessica Williams, Katherine Waterston, and Mads Mikkelsen. Set several years after the events of its predecessor, the film sees Albus Dumbledore tasking Newt Scamander and his allies with a mission that takes them into the heart of dark wizard Gellert Grindelwald's army.",
    id: "4c13ffc3-deb0-4d50-8893-fc33fb60bb92",
    rating: 0.4953754540088551,
  },
  {
    displayImageUrl:
      "https://upload.wikimedia.org/wikipedia/en/d/d1/Dual_%282022_film%29.jpg",
    displayName: "Dual",
    format: "Movie",
    genres: ["Science Fiction", "Thriller"],
    summary:
      "Dual is a 2022 American satirical science fiction thriller film written, directed, and produced by Riley Stearns. It stars Karen Gillan, Beulah Koale, Theo James, and Aaron Paul. The plot follows a woman who has to fight a clone of herself to the death after she unexpectedly recovers from a terminal illness. The film premiered at the 2022 Sundance Film Festival on January 22, 2022. It was released in the United States on April 15, 2022, by RLJE Films.",
    id: "0e277bbf-a8f2-4966-a9d2-20086305fe2f",
    rating: 0.9596451489041811,
  },
  {
    displayImageUrl:
      "https://upload.wikimedia.org/wikipedia/en/8/8d/Choose_or_Die_film_poster.png",
    displayName: "Choose or Die",
    format: "Movie",
    genres: ["Horror", "Thriller"],
    summary:
      "Choose or Die is a 2022 British horror thriller film directed by Toby Meakins in his feature directorial debut. The film stars Iola Evans, Asa Butterfield, Robert Englund and Eddie Marsan.",
    id: "ced0673c-53c8-4c29-84a0-3643bc179c68",
    rating: 0.37202964177175435,
  },
  {
    displayImageUrl:
      "https://upload.wikimedia.org/wikipedia/en/e/e7/Titanic_666.jpeg",
    displayName: "Titanic 666",
    format: "Movie",
    genres: ["Horror", "Supernatural"],
    summary:
      "Titanic 666 is a 2022 American supernatural horror film directed by Nick Lyon and produced by The Asylum. It is a sequel to Titanic II (2010) and stars Jamie Bamber and Keesha Sharp. It was released on Tubi on the United States on April 15, 2022, on the 110th anniversary of the sinking of the Titanic. The film received generally unfavorable reviews, and users on social media noted the film's similarity to Titanic (1997) and Studio 666 (2022).",
    id: "bea48d05-d59b-4bc4-9afe-33c7ecb9509c",
    rating: 0.7401033751105441,
  },
  {
    displayImageUrl:
      "https://upload.wikimedia.org/wikipedia/en/0/00/The_Bad_Guys_poster.jpeg",
    displayName: "The Bad Guys",
    format: "Movie",
    genres: ["Animated", "Comedy", "Family", "Action"],
    summary:
      "The Bad Guys is a 2022 American computer-animated heist comedy film loosely based on the children's book series of the same name by Aaron Blabey, produced by DreamWorks Animation Studios and distributed by Universal Pictures. The film was directed by Pierre Perifel from a screenplay by Etan Cohen, and stars the voices of Sam Rockwell, Marc Maron, Awkwafina, Craig Robinson, Anthony Ramos, Richard Ayoade, Zazie Beetz, Alex Borstein, and Lilly Singh. It tells the story of a criminal group of anthropomorphic animals who, upon being caught, pretend to attempt to reform themselves as model citizens, only for their leader to find himself genuinely drawn to changing his ways for good as a new villain has his own plans.",
    id: "aeed3b1a-d6af-4b0b-abd6-88b6827d7473",
    rating: 0.6498083193211528,
  },
  {
    displayImageUrl:
      "https://upload.wikimedia.org/wikipedia/en/8/8c/The_Northman.png",
    displayName: "The Northman",
    format: "Movie",
    genres: ["Action", "Historical", "Thriller"],
    summary:
      "The Northman is a 2022 American epic historical action thriller film directed by Robert Eggers, who co-wrote the screenplay with Sjón. Based on the legend of Amleth, the film stars Alexander Skarsgård, Nicole Kidman, Claes Bang, Anya Taylor-Joy, Ethan Hawke, Björk and Willem Dafoe. The plot centers on Amleth, a Viking prince who sets out on a quest to avenge the murder of his father. The film is heavily influenced by Norse mythology.",
    id: "da9621a4-d609-494a-a37f-ed107888e20d",
    rating: 0.29767910721787194,
  },
  {
    displayImageUrl:
      "https://upload.wikimedia.org/wikipedia/en/8/87/The_Unbearable_Weight_of_Massive_Talent.jpg",
    displayName: "The Unbearable Weight of Massive Talent",
    format: "Movie",
    genres: ["Action", "Comedy"],
    summary:
      "The Unbearable Weight of Massive Talent is a 2022 American action comedy film directed by Tom Gormican, who co-wrote the screenplay with Kevin Etten. It stars Nicolas Cage as a fictionalized version of himself, along with a supporting cast including Pedro Pascal, Sharon Horgan, Ike Barinholtz, Alessandra Mastronardi, Jacob Scipio, Neil Patrick Harris and Tiffany Haddish. Filming began in Croatia on October 5, 2020.",
    id: "077b5ea8-9a08-4377-8935-a9b8e1cca915",
    rating: 0.9162728791085115,
  },
  {
    displayImageUrl:
      "https://upload.wikimedia.org/wikipedia/en/6/62/Polar_Bear_film_poster.png",
    displayName: "Polar Bear",
    format: "Movie",
    genres: ["Documentary"],
    summary:
      "Polar Bear is a 2022 American nature documentary film about polar bears directed by Alastair Fothergill and Jeff Wilson. Narrated by Catherine Keener, it is the sixteenth nature documentary to be released under the Disneynature label. The film was released as a Disney+ exclusive on Earth Day April 22, 2022.",
    id: "b0d71a41-1d84-44b2-8ff8-ac66cab138d1",
    rating: 0.19167096526761118,
  },
  {
    displayImageUrl:
      "https://upload.wikimedia.org/wikipedia/en/7/73/The_Survivor_%282021_film%29.jpg",
    displayName: "The Survivor",
    format: "Movie",
    genres: ["Drama", "Biography"],
    summary:
      "The Survivor is a 2021 biographical drama film, directed by Barry Levinson, from a screenplay by Justine Juel Gillmer. Ben Foster stars as Harry Haft, a real-life survivor of the Auschwitz concentration camp, where he boxed fellow inmates to survive. Vicky Krieps, Billy Magnussen, Peter Sarsgaard, John Leguizamo, and Danny DeVito co-star. The film had its world premiere at the Toronto International Film Festival in September 2021, and was released on HBO on April 27, 2022.",
    id: "9724218e-8bda-45b3-b87f-027809557b7d",
    rating: 0.5368663458829861,
  },
  {
    displayImageUrl:
      "https://upload.wikimedia.org/wikipedia/en/7/77/Memory_official_logo.png",
    displayName: "Memory",
    format: "Movie",
    genres: ["Action", "Thriller"],
    summary:
      "Memory is a 2022 American action thriller film directed by Martin Campbell from a screenplay by Dario Scardapane. It is based on the novel De Zaak Alzheimer by Jef Geeraerts and is a remake of the novel's previous adaptation, the Belgian film The Alzheimer Case. The film stars Liam Neeson as a brooding hitman with early dementia who must go on the run after declining a contract on a young girl; Guy Pearce, Monica Bellucci, Harold Torres, Taj Atwal and Ray Fearon also star.",
    id: "0f5a43eb-d75e-4e8a-be9e-3e1b883a58cf",
    rating: 0.008307305283742794,
  },
  {
    displayImageUrl:
      "https://upload.wikimedia.org/wikipedia/en/4/4f/Crush_%282022_film%29.jpg",
    displayName: "Crush",
    format: "Movie",
    genres: ["Comedy", "Romance"],
    summary:
      "Crush is a 2022 American coming-of-age romantic comedy film directed by Sammi Cohen and written by Kirsten King and Casey Rackham. The film stars Rowan Blanchard and Auliʻi Cravalho in a story about a teenage girl joining her high-school track team to get closer to her crush, only to discover she is getting closer to another teammate. Crush was released digitally on April 29, 2022, on Hulu.",
    id: "7b232bfa-fc55-4a42-80de-a5845b845475",
    rating: 0.04653412137409041,
  },
  {
    displayImageUrl:
      "https://upload.wikimedia.org/wikipedia/en/6/68/Fortress_Sniper%27s_Eye.jpg",
    displayName: "Fortress: Sniper's Eye",
    format: "Movie",
    genres: ["Action"],
    summary:
      "Fortress: Sniper's Eye is a 2022 American action film directed by Josh Sternfeld as a sequel to Fortress (2021). It stars Jesse Metcalfe, Bruce Willis, and Chad Michael Murray. The film was released on April 29, 2022, by Lionsgate Films.",
    id: "b4c355ee-b426-4793-9ec8-ba2fb281aa4d",
    rating: 0.40418582348769605,
  },
  {
    displayName: "Green Ghost and the Masters of the Stone",
    format: "Movie",
    genres: [],
    id: "d953382e-34fd-45bf-b98e-d2d665157ead",
    rating: 0.09146076253250235,
  },
  {
    displayImageUrl:
      "https://upload.wikimedia.org/wikipedia/en/9/97/Corrective_Measures_poster.png",
    displayName: "Corrective Measures",
    format: "Movie",
    genres: ["Superhero"],
    summary:
      "Corrective Measures is a 2022 American superhero film written, produced and directed by Sean O'Reilly and starring Bruce Willis and Michael Rooker. It is based on the graphic novel of the same name by Grant Chastain. It is also O'Reilly's debut in a live-action feature film.",
    id: "5f326240-6d35-4d13-82ec-7343f16aca45",
    rating: 0.5317827426835167,
  },
  {
    displayImageUrl:
      "https://upload.wikimedia.org/wikipedia/en/1/17/Doctor_Strange_in_the_Multiverse_of_Madness_poster.jpg",
    displayName: "Doctor Strange in the Multiverse of Madness",
    format: "Movie",
    genres: ["Superhero"],
    summary:
      "Doctor Strange in the Multiverse of Madness is a 2022 American superhero film based on Marvel Comics featuring the character Doctor Strange. Produced by Marvel Studios and distributed by Walt Disney Studios Motion Pictures, it is the sequel to Doctor Strange (2016) and the 28th film in the Marvel Cinematic Universe (MCU). The film was directed by Sam Raimi, written by Michael Waldron, and stars Benedict Cumberbatch as Stephen Strange, alongside Elizabeth Olsen, Chiwetel Ejiofor, Benedict Wong, Xochitl Gomez, Michael Stuhlbarg, and Rachel McAdams. In the film, Strange protects America Chavez (Gomez), a teenager capable of traveling the multiverse, from Wanda Maximoff (Olsen).",
    id: "19e53f5c-e8c7-49a5-9939-0b0621ad9ca4",
    rating: 0.06601984038925646,
  },
  {
    displayImageUrl:
      "https://upload.wikimedia.org/wikipedia/en/d/dc/Along_for_the_Ride_%28film%29.jpg",
    displayName: "Along for the Ride",
    format: "Movie",
    genres: ["Drama", "Romance"],
    summary:
      'Along for the Ride is a 2022 American romantic drama film written and directed by Sofia Alvarez, based on the novel of the same name by Sarah Dessen. The film stars Emma Pasarow, Belmont Cameli, Kate Bosworth, Laura Kariuki, Andie MacDowell and Dermot Mulroney. The film was released on May 6, 2022 by Netflix.\nThe film\'s official logline reads: "The summer before college Auden meets the mysterious Eli, a fellow insomniac. While the seaside town of Colby sleeps, the two embark on a nightly quest to help Auden experience the fun, carefree teen life she never knew she wanted."',
    id: "7c688965-9607-4fee-95b0-5a35ed7792ca",
    rating: 0.03869802559362978,
  },
  {
    displayImageUrl:
      "https://upload.wikimedia.org/wikipedia/en/1/14/Marmaduke_2022_poster.jpeg",
    displayName: "Marmaduke",
    format: "Movie",
    genres: ["Animated", "Comedy"],
    summary:
      "Marmaduke is a 2022 computer-animated comedy film directed by Mark Dippé, and co-directed by Phil Nibbelink, Youngki Lee, and Matt Whelan, based on the comic strip of the same name by Paul and Brad Anderson. It is the second feature-length film based on the strip following the 2010 live-action film. The film stars Pete Davidson as the voice of Marmaduke, along with J. K. Simmons and David Koechner. It was released by SC Films in international countries and on Netflix in the United States on May 6, 2022. Marmaduke was universally panned by critics and audiences, with criticisms going towards its animation, screenplay, story, characters, and humor.",
    id: "01d9cfc3-f7d8-4122-8761-56eccb38d967",
    rating: 0.5383905846925614,
  },
  {
    displayImageUrl:
      "https://upload.wikimedia.org/wikipedia/en/2/24/Escape_the_Field.jpg",
    displayName: "Escape the Field",
    format: "Movie",
    genres: ["Thriller"],
    summary:
      "Escape the Field is a 2022 American thriller film directed by Emerson Moore and starring Jordan Claire Robbins, Theo Rossi, and Shane West.",
    id: "0c37b897-39f4-40e7-87e2-cd40b334be01",
    rating: 0.4884074913351224,
  },
  {
    displayImageUrl:
      "https://upload.wikimedia.org/wikipedia/en/thumb/7/77/Operation_Mincemeat.jpg/320px-Operation_Mincemeat.jpg",
    displayName: "Operation Mincemeat",
    format: "Movie",
    genres: ["Drama", "War"],
    summary:
      "Operation Mincemeat is a 2021 British war drama film directed by John Madden. It is based upon Ben Macintyre's book on the British Operation Mincemeat during the Second World War. The film stars Colin Firth, Kelly Macdonald, Matthew Macfadyen, Penelope Wilton, Johnny Flynn and Jason Isaacs. This was Paul Ritter's final film appearance, and was dedicated to his memory.",
    id: "f00ba48c-7798-457c-9afc-b9f5c015058d",
    rating: 0.9980057532202886,
  },
  {
    displayImageUrl:
      "https://upload.wikimedia.org/wikipedia/en/2/2f/SeniorYearNetflixTeaser.jpg",
    displayName: "Senior Year",
    format: "Movie",
    genres: ["Comedy"],
    summary:
      "Senior Year is a 2022 American comedy film directed by Alex Hardcastle from a screenplay by Andrew Knauer, Arthur Pielli, and Brandon Scott Jones. The film stars Rebel Wilson as a 37-year-old woman who awakens from a 20-year coma and decides to go back to high school to earn her diploma. Sam Richardson, Zoë Chao, Mary Holland, Justin Hartley, Chris Parnell, Angourie Rice, Michael Cimino, Jeremy Ray Taylor, Jones, and Alicia Silverstone also star. The film was released on May 13, 2022, by Netflix, and received mixed reviews from critics.",
    id: "e46657fb-8aab-412c-b51f-dfdaff024af3",
    rating: 0.629855172380265,
  },
  {
    displayImageUrl:
      "https://upload.wikimedia.org/wikipedia/en/0/04/Firestarter_%282022%29_poster.jpg",
    displayName: "Firestarter",
    format: "Movie",
    genres: ["Horror", "Science Fiction"],
    summary:
      "Firestarter is a 2022 American science fiction horror film directed by Keith Thomas, from a screenplay by Scott Teems, based on Stephen King's novel of the same name, and a remake of the 1984 film of the same name. The film stars Zac Efron, Ryan Kiera Armstrong, Sydney Lemmon, Kurtwood Smith, John Beasley, Michael Greyeyes, and Gloria Reuben. It is produced by Jason Blum and Akiva Goldsman under their Blumhouse Productions and Weed Road Pictures banners, respectively, alongside BoulderLight Pictures and Night Platform.",
    id: "496bc470-a0cf-460f-a451-4e4438b71ca9",
    rating: 0.9759443586593481,
  },
  {
    displayImageUrl:
      "https://upload.wikimedia.org/wikipedia/en/2/21/Sneakerella.jpg",
    displayName: "Sneakerella",
    format: "Movie",
    genres: ["Comedy", "Musical"],
    summary:
      "Sneakerella is a 2022 American musical comedy film directed by Elizabeth Allen Rosenbaum and written by David Light & Joseph Raso, Tamara Chestna, Mindy Stern, and George Gore II. A re-imagining of the classic fairy tale Cinderella, the film stars Chosen Jacobs, Lexi Underwood, Devyn Nekoda, Bryan Terrell Clark, Kolton Stewart, Hayward Leach, Robyn Alomar, Yvonne Senat Jones, Juan Chioran, and John Salley.",
    id: "b1415d51-0b48-43bb-bcac-a2e6b833cd89",
    rating: 0.1179967256546901,
  },
  {
    displayImageUrl:
      "https://upload.wikimedia.org/wikipedia/en/0/08/On_the_Count_of_Three.jpeg",
    displayName: "On the Count of Three",
    format: "Movie",
    genres: ["Comedy", "Drama"],
    summary:
      "On the Count of Three is an 2021 American black comedy-drama film directed by Jerrod Carmichael and written by Ari Katcher and Ryan Welch. It stars Carmichael and Christopher Abbott as two best friends who make a suicide pact and have one final day to take care of unfinished business. Tiffany Haddish, J. B. Smoove, Lavell Crawford, and Henry Winkler also star.",
    id: "d53e776c-7a47-4f97-9ada-c573c4d071a6",
    rating: 0.10167598626396868,
  },
  {
    displayImageUrl:
      "https://upload.wikimedia.org/wikipedia/en/9/99/Private_property_film.jpeg",
    displayName: "Private Property",
    format: "Movie",
    genres: ["Thriller"],
    summary:
      "Private Property is a 2022 American thriller film directed by Chadd Harbold and starring Ashley Benson and Shiloh Fernandez. It is a remake of the 1960 film of the same title.",
    id: "9964b264-646d-475e-9b44-bec7060799e9",
    rating: 0.46789663470275067,
  },
  {
    displayImageUrl:
      "https://upload.wikimedia.org/wikipedia/en/4/40/Family_camp.jpg",
    displayName: "Family Camp",
    format: "Movie",
    genres: ["Comedy"],
    summary:
      "Family Camp is a 2022 American religious comedy film directed by Brian Cates and written by Cates and Rene Gutteridge. The film stars Tommy Woodard, Eddie James, Leigh-Allyn Baker, and Gigi Orsillo, and follows two polar-opposite families who are forced to camp together, the fathers' struggles to hold onto their families and marriages as they compete for the coveted camp trophy. The film was released on May 13, 2022 in the United States, by Roadside Attractions. The film received mixed reviews and grossed $4 million at the box office.",
    id: "a5b8272c-b6fe-4781-9dc5-87e9d40bf433",
    rating: 0.36446275585721466,
  },
  {
    displayImageUrl:
      "https://upload.wikimedia.org/wikipedia/en/b/b9/Montana_Story.jpg",
    displayName: "Montana Story",
    format: "Movie",
    genres: ["Drama"],
    summary:
      "Montana Story is a 2021 American drama film written and directed by Scott McGehee and David Siegel. The film stars Haley Lu Richardson and Owen Teague. Two siblings return to their family's ranch in Montana after their father falls into a coma.",
    id: "ba2e8f5e-95b1-46b8-8be7-c7847f7add32",
    rating: 0.26294534366214606,
  },
  {
    displayImageUrl:
      "https://upload.wikimedia.org/wikipedia/en/e/e4/Vendetta_film_poster.png",
    displayName: "Vendetta",
    format: "Movie",
    genres: ["Action", "Thriller"],
    summary:
      "Vendetta is a 2022 American action-thriller revenge film written and directed by Jared Cohn and starring Clive Standen, Theo Rossi, Mike Tyson, Thomas Jane, and Bruce Willis.",
    id: "9c0cf421-6f41-467d-9059-87fbadff2cf8",
    rating: 0.22559036680702516,
  },
  {
    displayImageUrl:
      "https://upload.wikimedia.org/wikipedia/en/f/f4/Downton_Abbey_A_New_Era.jpg",
    displayName: "Downton Abbey: A New Era",
    format: "Movie",
    genres: ["Drama", "Historical"],
    summary:
      "Downton Abbey: A New Era is a 2022 historical drama film and the sequel to the 2019 film Downton Abbey. The film was written by Julian Fellowes, the creator and writer of the television series of the same name and was directed by Simon Curtis.\nDownton Abbey: A New Era was released in the United Kingdom on 29 April 2022 by Universal Pictures and was released in the United States on 20 May by Focus Features. Like the first film, it received generally positive reviews from critics.",
    id: "a26c68d0-b318-4058-8e26-317ec2f332f3",
    rating: 0.062254483578706665,
  },
  {
    displayImageUrl:
      "https://upload.wikimedia.org/wikipedia/en/4/46/Chip_n_Dale_Rescue_Rangers_Teaser_poster.jpg",
    displayName: "Chip 'n Dale: Rescue Rangers",
    format: "Movie",
    genres: ["Live Action", "Adventure", "Animated", "Comedy"],
    summary:
      "Chip 'n Dale: Rescue Rangers is a 2022 American live-action/animated adventure comedy film based on the characters Chip and Dale and continuation of the animated TV series of the same name, excluding the duo's previous filmography. Directed by Akiva Schaffer and written by Dan Gregor and Doug Mand, the film stars John Mulaney and Andy Samberg as the voices of the titular pair, respectively, with KiKi Layne, Will Arnett, Eric Bana, Flula Borg, Dennis Haysbert, Keegan-Michael Key, Tress MacNeille, Tim Robinson, Seth Rogen and J.K. Simmons. Walt Disney Pictures co-produced the film in association with The Lonely Island and alongside producers David Hoberman and Todd Lieberman's Mandeville Films.",
    id: "f3249fca-fcea-43e1-8b2f-3bd271a5a9fc",
    rating: 0.14676452602342893,
  },
  {
    displayImageUrl:
      "https://upload.wikimedia.org/wikipedia/en/a/a2/The_film_poster_to_represent_the_2022_film_%22Good_Mourning%22.png",
    displayName: "Good Mourning",
    format: "Movie",
    genres: ["Comedy"],
    summary:
      "Good Mourning is a 2022 American stoner comedy film written, produced and directed by and starring Machine Gun Kelly and Mod Sun, in their directorial debuts. It also stars Zach Villa, GaTa, Becky G, Dove Cameron and Megan Fox.",
    id: "a2c33447-43dc-43a2-8e28-b257150e5b37",
    rating: 0.0014541345352487856,
  },
  {
    displayImageUrl:
      "https://upload.wikimedia.org/wikipedia/en/f/f4/The_Valet_%282022_film%29.jpg",
    displayName: "The Valet",
    format: "Movie",
    genres: ["Comedy", "Romance"],
    summary:
      "The Valet is a 2022 American romantic comedy film directed by Richard Wong and written by Bob Fisher and Rob Greenberg. It is a remake of the French film The Valet (2006) by Francis Veber. It stars Eugenio Derbez and Samara Weaving, with Max Greenfield, Betsy Brandt, Marisol Nichols, Amaury Nolasco, Carmen Salinas, Noemi Gonzalez, Armando Hernández, Carlos Santos, Ravi Patel, and John Pirruccello in supporting roles. The film is dedicated to Salinas, who died in 2021. The plot follows a parking valet (Derbez) who is hired to date an actress (Weaving) trying to cover up an affair. It was released on Hulu on May 20, 2022. It received generally positive reviews from critics.",
    id: "3f649e85-bd7f-4c96-942b-c34759f5adb1",
    rating: 0.013580697921532048,
  },
  {
    displayImageUrl:
      "https://upload.wikimedia.org/wikipedia/en/d/d4/Emergency_%282022_film%29.jpg",
    displayName: "Emergency",
    format: "Movie",
    genres: ["Comedy", "Drama", "Thriller"],
    summary:
      "Emergency is a 2022 American thriller comedy-drama film directed by Carey Williams and written by K.D. Dávila, based on their 2018 short film of the same name. It stars RJ Cyler, Donald Elise Watkins, and Sebastian Chacon as three college students who must weigh the pros and cons of calling the police when faced with an unexpected situation.",
    id: "b2bd0ecc-6e61-4a46-9d52-7d8e840ebbac",
    rating: 0.44947057227144716,
  },
  {
    displayImageUrl:
      "https://upload.wikimedia.org/wikipedia/en/1/13/Top_Gun_Maverick_Poster.jpg",
    displayName: "Top Gun: Maverick",
    format: "Movie",
    genres: ["Action", "Drama"],
    summary:
      "Top Gun: Maverick is a 2022 American action drama film directed by Joseph Kosinski and written by Ehren Kruger, Eric Warren Singer and Christopher McQuarrie from stories by Peter Craig and Justin Marks. The film is a sequel to the 1986 film Top Gun. Tom Cruise reprises his starring role as the naval aviator Maverick. It was based on the characters of the original film created by Jim Cash and Jack Epps Jr. The film also stars Miles Teller, Jennifer Connelly, Jon Hamm, Glen Powell, Lewis Pullman, Ed Harris and Val Kilmer, who reprises his role as Iceman. In the film, Maverick confronts his past while training a group of younger Top Gun graduates, including the son of his deceased best friend, for a dangerous mission.",
    id: "5175c2a7-4f55-4cac-9527-4af12ca72017",
    rating: 0.46096802056262143,
  },
  {
    displayImageUrl:
      "https://upload.wikimedia.org/wikipedia/en/0/04/Bob%27s_Burgers_Movie_poster.jpg",
    displayName: "The Bob's Burgers Movie",
    format: "Movie",
    genres: ["Animated", "Comedy", "Musical"],
    summary:
      "The Bob's Burgers Movie is a 2022 American animated musical comedy film based on the Fox animated television series Bob's Burgers. It is directed by the series creator Loren Bouchard and series director Bernard Derriman, written by Bouchard and Nora Smith, and produced by Janelle Momary-Neely, Bouchard, and Smith. The original voice cast from the series reprises their roles including H. Jon Benjamin, Dan Mintz, Eugene Mirman, Larry Murphy, John Roberts, Kristen Schaal, David Wain, Zach Galifianakis, and Kevin Kline. As the events of the film take place between the 12th and 13th seasons of Bob's Burgers, the plot follows Bob and his family as they struggle to pay their loan after a sinkhole opens in front of their restaurant and affects business, while the kids try to solve the murder of a carnie.",
    id: "9d306962-04b8-4d69-851b-3cfabe2d439c",
    rating: 0.7781167934302571,
  },
  {
    displayImageUrl:
      "https://upload.wikimedia.org/wikipedia/en/a/a0/Zero_Contact.jpg",
    displayName: "Zero Contact",
    format: "Movie",
    genres: ["Thriller"],
    summary:
      "Zero Contact is a 2021 American thriller film directed by Rick Dugdale and starring Anthony Hopkins. It was the first feature film to be released via Vuele, a non-fungible token platform.",
    id: "697b54be-983d-4934-ac7a-c6acd2407851",
    rating: 0.154269765274478,
  },
  {
    displayImageUrl:
      "https://upload.wikimedia.org/wikipedia/en/b/bd/A_Chiara_poster.jpeg",
    displayName: "A Chiara",
    format: "Movie",
    genres: ["Drama"],
    summary:
      "A Chiara is a 2021 Italian-language drama film directed and written by Jonas Carpignano, the third film in his film trilogy set in a Calabrian town, following Mediterranea (2015) and A Ciambra (2017). The film stars Swamy Rotolo, Claudio Rotolo, Grecia Rotolo, and Carmela Fumo and had its world premiere at the Cannes Film Festival on July 9, 2021, in the Directors' Fortnight section, to very positive reviews. Following its festival screening, the film was distributed by MK2 Films and Lucky Red in Italy and Neon in the United States.",
    id: "059dc65e-0c90-4753-b119-f615df053b25",
    rating: 0.1552222706091373,
  },
  {
    displayImageUrl:
      "https://upload.wikimedia.org/wikipedia/en/a/ad/South_Park_The_Streaming_Wars.png",
    displayName: "South Park The Streaming Wars",
    format: "Movie",
    genres: ["Animated", "Comedy", "Erotic"],
    summary:
      '"South Park The Streaming Wars" is a 2022 American adult animated comedy television special episode written and directed by Trey Parker. It is the third South Park television special produced for Paramount+ and was released on June 1, 2022. It also serves as the 318th overall episode of the television series.',
    id: "76f6fefa-5c3b-4767-87da-8406edf6046f",
    rating: 0.7687601764044647,
  },
  {
    displayImageUrl:
      "https://upload.wikimedia.org/wikipedia/en/b/be/Hollywood_Stargirl.jpg",
    displayName: "Hollywood Stargirl",
    format: "Movie",
    genres: ["Drama", "Teen", "Romance"],
    summary:
      "Hollywood Stargirl is a 2022 American teen romantic drama film directed by Julia Hart from a screenplay that she co-wrote with Jordan Horowitz. The film is a sequel to the 2020 film Stargirl, which was in turn based on Jerry Spinelli's 2000 novel of the same name; it is not an adaptation of the novel's sequel Love, Stargirl.",
    id: "a9eae4f9-60cf-46e1-bc6e-11f70cfc85c3",
    rating: 0.7302055776224508,
  },
  {
    displayImageUrl:
      "https://upload.wikimedia.org/wikipedia/en/d/d4/Crimes_of_the_Future_%282022_film%29.jpg",
    displayName: "Crimes of the Future",
    format: "Movie",
    genres: ["Drama", "Horror", "Science Fiction"],
    summary:
      "Crimes of the Future is a 2022 science fiction body horror drama film written and directed by David Cronenberg. The film stars Viggo Mortensen, Léa Seydoux and Kristen Stewart. It follows a performance artist duo who perform surgery for audiences in a future where human evolution has accelerated for much of the population. Although the film shares its title with Cronenberg's 1970 film of the same name, it is not a remake as the story and concept are unrelated, and there is no connection between the two films whatsoever. The film marked Cronenberg's return to the science fiction and horror genres for the first time since Existenz (1999).",
    id: "c917107b-97ce-45b8-9b3c-24d457184750",
    rating: 0.7640853811618731,
  },
  {
    displayImageUrl:
      "https://upload.wikimedia.org/wikipedia/en/5/5c/Benediction_%28film%29.jpg",
    displayName: "Benediction",
    format: "Movie",
    genres: ["Drama", "Biography", "Romance"],
    summary:
      "Benediction is a 2021 biographical romantic drama film written and directed by Terence Davies. It stars Jack Lowden and Peter Capaldi as the war poet Siegfried Sassoon, along with Simon Russell Beale, Jeremy Irvine, Calam Lynch, Kate Phillips, Gemma Jones, and Ben Daniels. It was released in United Kingdom on 20 May 2022 by Vertigo Releasing and United States on 3 June 2022 by Roadside Attractions.",
    id: "9a56f60f-ef36-4206-b9a6-159ccf649b9c",
    rating: 0.14686803376527258,
  },
  {
    displayImageUrl:
      "https://upload.wikimedia.org/wikipedia/en/3/31/Interceptor_%28film%29.jpg",
    displayName: "Interceptor",
    format: "Movie",
    genres: ["Action", "Drama"],
    summary:
      "Interceptor is a 2022 action drama film directed by Matthew Reilly from a screenplay that he co-wrote with Stuart Beattie. The film stars Elsa Pataky and Luke Bracey. It is about terrorists who want to launch a nuclear attack on the United States with stolen missiles. When the terrorists attack a remote offshore missile interceptor platform that could stop their missiles, \nan officer (Pataky) defends the facility with courage and resourcefulness.",
    id: "7ce07d38-58be-4f70-9532-67b5b3944dfa",
    rating: 0.8419842950789207,
  },
  {
    displayImageUrl:
      "https://upload.wikimedia.org/wikipedia/en/0/05/Fire_Island_Movie_Poster.jpeg",
    displayName: "Fire Island",
    format: "Movie",
    genres: ["Comedy", "Romance"],
    summary:
      "Fire Island is a 2022 American romantic comedy film directed by Andrew Ahn, and written by and starring Joel Kim Booster. The film co-stars Bowen Yang, Conrad Ricamora, James Scully, and Margaret Cho. Inspired by Jane Austen's Pride and Prejudice, the story follows a group of gay friends who go on vacation to Fire Island, only for things to become complicated by classism and romance.",
    id: "251cf1b2-b157-4924-8dd1-90eef8914b46",
    rating: 0.6026136168838376,
  },
  {
    displayImageUrl:
      "https://upload.wikimedia.org/wikipedia/en/5/52/Watcher_poster.jpeg",
    displayName: "Watcher",
    format: "Movie",
    genres: ["Thriller"],
    summary:
      "Watcher is a 2022 psychological thriller film written and directed by Chloe Okuno in her feature film directorial and screenwriting debut, based on an original screenplay by Zack Ford. The film stars Maika Monroe, Karl Glusman, and Burn Gorman.",
    id: "3912094c-ecfb-4e25-9fb1-3cb8b572fa3c",
    rating: 0.730831022780319,
  },
  {
    displayImageUrl:
      "https://upload.wikimedia.org/wikipedia/en/1/1d/Dashcamrobsavage.jpg",
    displayName: "Dashcam",
    format: "Movie",
    genres: ["Horror"],
    summary:
      "Dashcam is a 2021 computer screen horror film directed by Rob Savage and written by Gemma Hurley, Savage, and Jed Shepherd. The film stars Annie Hardy, Amer Chadha-Patel, and Angela Enahoro. The entire film is shot from the perspective of either Hardy's hand-held iPhone or the dashcam in her car, as she livestreams her actions for viewers whose comments on the events are also displayed. The film follows Hardy, playing a semi-fictionalized version of herself, as she visits a friend in London amidst the COVID-19 pandemic, and finds herself in a series of nightmarish events after giving a strange woman a ride in her car. The film is produced by Jason Blum through his Blumhouse Productions banner, alongside Douglas Cox, and Savage.",
    id: "511e7e11-4525-40c1-a6ab-773d3e69a0e7",
    rating: 0.2252817270334584,
  },
  {
    displayImageUrl:
      "https://upload.wikimedia.org/wikipedia/en/6/64/White_Elephant_%282022_film%29.jpeg",
    displayName: "White Elephant",
    format: "Movie",
    genres: ["Action"],
    summary:
      "White Elephant is an American action film directed by Jesse V. Johnson and written by Johnson and Erik Martinez, based on a story by Johnson. It stars Michael Rooker, Bruce Willis, Olga Kurylenko, and John Malkovich.",
    id: "fbf41b78-ba76-433e-9450-57430be76855",
    rating: 0.21220227559581328,
  },
  {
    displayImageUrl:
      "https://upload.wikimedia.org/wikipedia/en/5/50/Hustle_%282022_film%29.jpg",
    displayName: "Hustle",
    format: "Movie",
    genres: ["Comedy", "Drama", "Sports"],
    summary:
      "Hustle is a 2022 American sports comedy-drama film directed by Jeremiah Zagar from a screenplay by Taylor Materne and Will Fetters and co-produced by and starring Adam Sandler as a down-on-his-luck NBA scout who discovers a raw but talented basketball player in Spain and tries to prepare him for the NBA draft. The film also stars Queen Latifah, Ben Foster, Robert Duvall, Heidi Gardner, and current National Basketball Association player Anthony Edwards. LeBron James produced through his SpringHill Company banner.",
    id: "4d7cbb99-cf3c-4374-918d-3d1dfb4d3d60",
    rating: 0.009949809614956617,
  },
  {
    displayImageUrl:
      "https://upload.wikimedia.org/wikipedia/en/c/ce/JurassicWorldDominion_Poster.jpeg",
    displayName: "Jurassic World Dominion",
    format: "Movie",
    genres: ["Action", "Science Fiction"],
    summary:
      "Jurassic World Dominion is a 2022 American science fiction action film directed by Colin Trevorrow, who co-wrote the screenplay with Emily Carmichael from a story by Derek Connolly and Trevorrow. The sequel to Jurassic World: Fallen Kingdom (2018), it is the third and final installment in the Jurassic World trilogy and the sixth installment overall in the Jurassic Park film series, concluding the storyline that started with Jurassic Park (1993). The film has an ensemble cast including Chris Pratt, Bryce Dallas Howard, Laura Dern, Jeff Goldblum, Sam Neill, DeWanda Wise, Mamoudou Athie, BD Wong, and Omar Sy. Dern, Goldblum, and Neill reprise their roles from the Jurassic Park trilogy, appearing together for the first time since the original film.",
    id: "088ab78f-18b3-4a02-b43f-be5320b2b24b",
    rating: 0.6728367325302724,
  },
  {
    displayImageUrl:
      "https://upload.wikimedia.org/wikipedia/en/e/e0/Halftime_Poster.jpg",
    displayName: "Jennifer Lopez: Halftime",
    format: "Movie",
    genres: ["Documentary"],
    summary:
      "Jennifer Lopez: Halftime is a 2022 American Netflix original documentary film directed by Amanda Micheli. Its story follows the career of Jennifer Lopez, with a heavy focus on her performance at the Super Bowl LIV halftime show and her film Hustlers (2019). The film premiered at the opening night of the 2022 Tribeca Film Festival, and was released on Netflix on June 14, 2022.",
    id: "63152ea9-5c8a-42bd-862a-b06e3a262d45",
    rating: 0.558452502020345,
  },
  {
    displayImageUrl:
      "https://upload.wikimedia.org/wikipedia/en/5/58/The_Father_of_the_Bride_%282022_film%29_poster.jpg",
    displayName: "Father of the Bride",
    format: "Movie",
    genres: ["Comedy", "Romance"],
    summary:
      "Father of the Bride is a 2022 American romantic comedy film directed by Gaz Alazraki and written by Matt Lopez, based on the 1949 novel of the same name by Edward Streeter. The film stars Andy García, Gloria Estefan, Adria Arjona, Isabela Merced, Diego Boneta, and Chloe Fineman. It is the third filmed version of the story, after the original 1950 film and the 1991 remake. Produced by Plan B Entertainment, it was released on June 16, 2022, by Warner Bros. Pictures and HBO Max.",
    id: "11bc8084-4025-44f1-93ae-7c84890778b9",
    rating: 0.015436307167039143,
  },
  {
    displayImageUrl:
      "https://upload.wikimedia.org/wikipedia/en/f/f9/Lightyear_%28film%29_poster.jpg",
    displayName: "Lightyear",
    format: "Movie",
    genres: ["Action", "Adventure", "Animated", "Science Fiction"],
    summary:
      "Lightyear is a 2022 American computer-animated science-fiction action-adventure film produced by Walt Disney Pictures and Pixar Animation Studios, and distributed by Walt Disney Studios Motion Pictures. The film is a spin-off of the Toy Story film series, but does not take place in the same fictional universe as them; rather, it is presented as a film that some of the characters in the main Toy Story films have seen. Lightyear centers on the character Buzz Lightyear, who in this film is human and not a toy. The film was directed by Angus MacLane and produced by Galyn Susman, from a screenplay and story written by MacLane and Jason Headley, both of whom co-wrote the latter with Matthew Aldrich. It stars Chris Evans as the voice of the titular character, with Keke Palmer, Peter Sohn, Taika Waititi, Dale Soules, James Brolin, and Uzo Aduba in supporting roles. The film follows Buzz Lightyear (Evans) operating as a space ranger who, after being marooned on a hostile planet with his commander and crew, tries to find a way back home while encountering a threat to the universe's safety.",
    id: "70c7ddc9-cddb-4126-8e2c-33bc216af782",
    rating: 0.7894130084089428,
  },
  {
    displayImageUrl:
      "https://upload.wikimedia.org/wikipedia/en/5/58/Spiderhead.jpg",
    displayName: "Spiderhead",
    format: "Movie",
    genres: ["Science Fiction", "Thriller"],
    summary:
      'Spiderhead is a 2022 American science fiction psychological thriller film directed by Joseph Kosinski, with a screenplay by Rhett Reese and Paul Wernick, based on the dystopian short story "Escape from Spiderhead" by George Saunders and first published in The New Yorker. The film stars Chris Hemsworth, Miles Teller, and Jurnee Smollett. The story follows inmates in a luxurious prison who participate in experiments involving mind-altering drugs. Principal photography took place in Australia in 2020.',
    id: "f197c026-6549-4f55-9a52-5e982b80968f",
    rating: 0.9509398017943658,
  },
  {
    displayImageUrl:
      "https://upload.wikimedia.org/wikipedia/en/5/59/Jerry_%26_Marge_Go_Large.jpg",
    displayName: "Jerry & Marge Go Large",
    format: "Movie",
    genres: ["Comedy", "Drama"],
    summary:
      "Jerry & Marge Go Large is a 2022 American comedy-drama film directed by David Frankel and written by Brad Copeland. Based on Jason Fagone's 2018 HuffPost article of the same name, the film stars Bryan Cranston and Annette Bening.",
    id: "317b7ac7-f086-4d86-8d03-e327c2787f8c",
    rating: 0.02866342579422132,
  },
  {
    displayImageUrl:
      "https://upload.wikimedia.org/wikipedia/en/6/66/Cha_Cha_Real_Smooth_%28poster%29.jpg",
    displayName: "Cha Cha Real Smooth",
    format: "Movie",
    genres: ["Comedy", "Drama"],
    summary:
      "Cha Cha Real Smooth is a 2022 American comedy-drama film written, produced, and directed by Cooper Raiff. The plot centers on a 22-year-old college graduate (Raiff) who starts making money as a party starter while he also strikes up a relationship with a 32-year-old mother. The cast also includes Raúl Castillo, Odeya Rush, Evan Assante, Vanessa Burghardt, Brad Garrett, and Leslie Mann.",
    id: "163868e4-fdfb-42a2-b633-1d556bf90069",
    rating: 0.47616404935831014,
  },
  {
    displayImageUrl:
      "https://upload.wikimedia.org/wikipedia/en/9/90/Mid-Century_2022.jpeg",
    displayName: "Mid-Century",
    format: "Movie",
    genres: ["Horror", "Thriller"],
    summary:
      "Mid-Century is a 2022 American horror thriller film directed by Sonja O'Hara and written and produced by Mike Stern. The film stars Bruce Dern, Stephen Lang and Shane West, with the latter two also serving as executive producers.",
    id: "9c31308b-4873-4355-86c9-42b7d824ea7a",
    rating: 0.823038658129075,
  },
  {
    displayImageUrl:
      "https://upload.wikimedia.org/wikipedia/en/0/0e/Abandoned_%282022%29.jpeg",
    displayName: "Abandoned",
    format: "Movie",
    genres: ["Horror"],
    summary:
      "Abandoned is a 2022 horror film directed by Spencer Squire and written by Erik Patterson and Jessica Scott. The film stars Emma Roberts, John Gallagher Jr. and Michael Shannon. The film was Squire's feature film directorial debut, with Roberts serving as one of the producers.",
    id: "17da6f2f-75fe-4d46-a8c2-ee1c8663e42b",
    rating: 0.4706437378972941,
  },
  {
    displayImageUrl:
      "https://upload.wikimedia.org/wikipedia/en/6/66/Beavis_and_Butt-head_2022_film_poster.jpg",
    displayName: "Beavis and Butt-Head Do the Universe",
    format: "Movie",
    genres: ["Animated", "Comedy", "Science Fiction", "Erotic"],
    summary:
      "Beavis and Butt-Head Do the Universe is a 2022 American adult animated science fiction comedy film directed by John Rice and Albert Calleros and written by Mike Judge, Lew Morton, Guy Maxtone-Graham and Ian Maxtone-Graham. It is the second film based on the animated television series Beavis and Butt-Head after Beavis and Butt-Head Do America (1996). The film follows teenage delinquents Beavis and Butt-Head, who are transported 24 years from 1998 to 2022, encounter parallel-universe versions of themselves and are hunted by the US government.",
    id: "f325851f-21b3-4f8d-a7e5-e09b42792834",
    rating: 0.7087750582662673,
  },
  {
    displayImageUrl:
      "https://upload.wikimedia.org/wikipedia/en/7/79/Elvis_2022_poster.jpg",
    displayName: "Elvis",
    format: "Movie",
    genres: ["Drama", "Biography"],
    summary:
      "Elvis is a 2022 biographical drama film directed by Baz Luhrmann from a screenplay he co-wrote with Sam Bromell, Craig Pearce, and Jeremy Doner. It chronicles the life of the American rock and roll singer and actor Elvis Presley under the management of Colonel Tom Parker. The film stars Austin Butler and Tom Hanks as Presley and Parker, respectively, with Olivia DeJonge, Helen Thomson, Richard Roxburgh, David Wenham, Kodi Smit-McPhee, and Luke Bracey in supporting roles.",
    id: "30e97671-cad9-48f9-b673-677abc963313",
    rating: 0.3564278586726324,
  },
  {
    displayImageUrl:
      "https://upload.wikimedia.org/wikipedia/en/7/7f/The_Black_Phone.jpg",
    displayName: "The Black Phone",
    format: "Movie",
    genres: ["Horror", "Supernatural"],
    summary:
      "The Black Phone is a 2021 American supernatural horror film directed by Scott Derrickson and written by Derrickson and C. Robert Cargill, who both produced with Jason Blum. It is an adaptation of the 2004 short story of the same name by Joe Hill. The film stars Mason Thames, Madeleine McGraw, Jeremy Davies, James Ransone, and Ethan Hawke. In the film, an abducted teenager (Thames) uses a mysterious telephone to communicate with the previous victims of his deranged captor (Hawke).",
    id: "f8903fd7-b773-4798-a44f-3a130df960b9",
    rating: 0.9154123086856469,
  },
  {
    displayImageUrl:
      "https://upload.wikimedia.org/wikipedia/en/7/75/The_Man_from_Toronto_%282022_film%29.jpg",
    displayName: "The Man from Toronto",
    format: "Movie",
    genres: ["Action", "Comedy"],
    summary:
      "The Man from Toronto is a 2022 American action comedy film directed by Patrick Hughes. The film stars Kevin Hart and Woody Harrelson, Kaley Cuoco, Jasmine Mathews, Lela Loren, Pierson Fodé, Jencarlos Canela, and Ellen Barkin.",
    id: "81721b85-592f-4d99-bca3-130331b5d643",
    rating: 0.6638553257009334,
  },
  {
    displayImageUrl:
      "https://upload.wikimedia.org/wikipedia/en/0/09/The_Sea_Beast_film_poster.png",
    displayName: "The Sea Beast",
    format: "Movie",
    genres: ["Adventure", "Animated"],
    summary:
      "The Sea Beast is a 2022 computer-animated adventure film directed by Chris Williams, who co-wrote the screenplay with Nell Benjamin and produced with Jed Schlanger. The film stars the voices of Karl Urban, Zaris-Angel Hator, Jared Harris, and Marianne Jean-Baptiste. It tells the story of a sea monster hunter and a young orphan girl who joins his group of sea monster hunters on their search for the elusive Red Bluster in the 17th century.",
    id: "0f55c8da-97a3-496a-ac92-5a2a5e14d837",
    rating: 0.4536941310206519,
  },
  {
    displayImageUrl:
      "https://upload.wikimedia.org/wikipedia/en/d/d4/Marcel_the_Shell_with_Shoes_On_%282021_film%29.jpg",
    displayName: "Marcel the Shell with Shoes On",
    format: "Movie",
    genres: ["Action", "Independent", "Animated", "Comedy", "Drama", "Satire"],
    summary:
      "Marcel the Shell with Shoes On is a 2021 American independent live-action/stop-motion animated mockumentary comedy-drama film directed by Dean Fleischer Camp, with a screenplay by Fleischer Camp, Jenny Slate and Nick Paley from a story by Fleischer Camp, Slate, Paley and Elisabeth Holm. It is based on and serves both as a direct stand-alone sequel and prequel to the series of shorts of the same name written by Slate and Fleischer Camp. Slate reprises her voice role as Marcel, an anthropomorphic shell living with his grandmother Connie. Fleischer Camp, Rosa Salazar, Thomas Mann, Lesley Stahl, and Isabella Rossellini also star. The film follows Marcel, a shell who lives with his grandmother, Connie, after posting a short film online bringing Marcel millions of passionate fans and a new hope of reuniting with his long-lost family.",
    id: "f9db814b-e845-4a96-95a2-3894cebe6442",
    rating: 0.0578868036345177,
  },
  {
    displayImageUrl:
      "https://upload.wikimedia.org/wikipedia/en/f/f5/Rise_%282022_film%29.jpg",
    displayName: "Rise",
    format: "Movie",
    genres: ["Drama", "Sports", "Biography"],
    summary:
      "Rise is a 2022 biographical sports drama film directed by Akin Omotoso, from a script written by Arash Amel. Based on the true story of three young Nigerian-Greek brothers, Giannis, Thanasis and Kostas Antetokounmpo, who emigrate to the United States and rise to fame and success within the National Basketball Association. The film stars newcomers Uche Agada, Ral Agada, and Jaden Osimuwa in the three primary roles; with Elijah Shomanke, Yetide Badaki, and Dayo Okeniyi in supporting family roles.",
    id: "9214ddc1-12d4-42fd-adbc-c5267f580b4c",
    rating: 0.25770123986038085,
  },
  {
    displayImageUrl:
      "https://upload.wikimedia.org/wikipedia/en/a/af/PressPlay-Poster.jpeg",
    displayName: "Press Play",
    format: "Movie",
    genres: ["Drama", "Science Fiction", "Romance"],
    summary:
      "Press Play is a 2022 science fiction romantic drama film written and directed by Greg Björkman in his directorial debut, from a story by Josh Boone. It stars Clara Rugaard, Lewis Pullman, Lyrica Okano, Christina Chang, Matt Walsh, and Danny Glover. It was shot on Oahu. The film was released in the United States on June 24, 2022, by The Avenue. It received mixed reviews from critics.",
    id: "fb27c581-6571-4b19-9b06-feccaa638203",
    rating: 0.055345088713019575,
  },
  {
    displayImageUrl:
      "https://upload.wikimedia.org/wikipedia/en/3/3b/Beauty_%282022_film%29.jpg",
    displayName: "Beauty",
    format: "Movie",
    genres: ["Drama"],
    summary:
      "Beauty is a 2022 American drama film directed by Andrew Dosunmu from a screenplay by Lena Waithe. It premiered at the 2022 Tribeca Film Festival and was released on Netflix on June 29, 2022. It stars Gracie Marie Bradley, Niecy Nash, Giancarlo Esposito, Sharon Stone, Andre Ozim, Michael Ward, and Kyle Bary.",
    id: "0082aef8-4b84-40a3-971a-6849f50d98e7",
    rating: 0.1155761863445588,
  },
  {
    displayImageUrl:
      "https://upload.wikimedia.org/wikipedia/en/4/45/Minions_The_Rise_of_Gru_poster.jpg",
    displayName: "Minions: The Rise of Gru",
    format: "Movie",
    genres: ["Animated", "Comedy"],
    summary:
      "Minions: The Rise of Gru is a 2022 American computer-animated comedy film produced by Illumination and distributed by Universal Pictures. It is the sequel to the spin-off prequel Minions (2015) and the fifth entry overall in the Despicable Me franchise. The film was directed by Kyle Balda, co-directed by Brad Ableson and Jonathan del Val, and produced by Chris Meledandri, Janet Healy and Chris Renaud, from a screenplay written by Matthew Fogel, and a story by Fogel and Brian Lynch. The film features Steve Carell reprising his role as Gru and Pierre Coffin as the Minions, with Taraji P. Henson, Michelle Yeoh, Russell Brand, Julie Andrews, and Alan Arkin in supporting roles. In the film, an eleven-year-old Gru plans to become a supervillain with the help of his Minions, which leads to a showdown with a malevolent team, the Vicious 6.",
    id: "ad099f22-0123-42d3-9756-737936723a57",
    rating: 0.7394491056656891,
  },
  {
    displayImageUrl:
      "https://upload.wikimedia.org/wikipedia/en/7/7b/The_Forgiven_%282021%29.jpeg",
    displayName: "The Forgiven",
    format: "Movie",
    genres: ["Drama"],
    summary:
      "The Forgiven is a 2021 drama film written and directed by John Michael McDonagh and based on the 2012 novel of the same name by Lawrence Osborne. The film stars Ralph Fiennes, Jessica Chastain, Matt Smith, Ismael Kanater, Caleb Landry Jones, Abbey Lee, Mourad Zaoui, Marie-Josée Croze, Alex Jennings, Saïd Taghmaoui, and Christopher Abbott. Elizabeth Eves and McDonagh produced the film under their House of Un-American Activities label.",
    id: "d28e20d6-e3a8-4b74-833e-291d683aefac",
    rating: 0.6162082242761766,
  },
  {
    displayImageUrl:
      "https://upload.wikimedia.org/wikipedia/en/3/3f/Mr._Malcolm%27s_List.jpg",
    displayName: "Mr. Malcolm's List",
    format: "Movie",
    genres: ["Drama", "Historical"],
    summary:
      "Mr. Malcolm's List is a 2022 period drama directed by Emma Holly Jones and written by Suzanne Allain, based on her novel of the same name. It stars Freida Pinto, Sope Dirisu, Oliver Jackson-Cohen, Ashley Park, Zawe Ashton, and Theo James.",
    id: "f27be031-573c-4a82-85a8-15006f4ca6cb",
    rating: 0.21212364302294384,
  },
  {
    displayImageUrl:
      "https://upload.wikimedia.org/wikipedia/en/f/f4/The_Princess_poster.jpeg",
    displayName: "The Princess",
    format: "Movie",
    genres: ["Action", "Comedy", "Thriller", "Historical"],
    summary:
      "The Princess is a 2022 American period action comedy thriller film directed by Le-Van Kiet and starring Joey King in the title role with Dominic Cooper, Olga Kurylenko, and Veronica Ngo. The film focuses on a strong-willed princess who fights to protect her family and save the kingdom when her suitor, a cruel sociopath she refuses to marry, intends on taking over the kingdom.",
    id: "b92f9884-5d75-4859-80a4-3352176382a2",
    rating: 0.582279115395109,
  },
  {
    displayImageUrl:
      "https://upload.wikimedia.org/wikipedia/en/4/43/Hot_Seat_%28film%29.jpg",
    displayName: "Hot Seat",
    format: "Movie",
    genres: ["Action", "Thriller"],
    summary:
      "Hot Seat is a 2022 American action-thriller film directed and produced by James Cullen Bressack. It stars Kevin Dillon and Mel Gibson.",
    id: "8ab36f5e-4cef-4351-8fdb-135206ec1f3a",
    rating: 0.5575380539067076,
  },
  {
    displayImageUrl:
      "https://upload.wikimedia.org/wikipedia/en/2/2e/Hello%2C_Goodbye%2C_and_Everything_in_Between_film_poster.png",
    displayName: "Hello, Goodbye, and Everything in Between",
    format: "Movie",
    genres: ["Drama", "Romance"],
    summary:
      "Hello, Goodbye, and Everything in Between is a 2022 American romantic drama film directed by Michael Lewen, in his directorial debut, from a screenplay by Amy Reed and Ben York Jones, based on the novel of the same name by Jennifer E. Smith. It stars Jordan Fisher, Talia Ryder, Ayo Edebiri, and Nico Hiraga. The film was released on July 6, 2022, by Netflix.",
    id: "392b8d67-71c6-4036-ad89-056568e280c0",
    rating: 0.7647292429749681,
  },
  {
    displayImageUrl:
      "https://upload.wikimedia.org/wikipedia/en/8/88/Thor_Love_and_Thunder_poster.jpeg",
    displayName: "Thor: Love and Thunder",
    format: "Movie",
    genres: ["Superhero"],
    summary:
      "Thor: Love and Thunder is a 2022 American superhero film based on Marvel Comics featuring the character Thor. Produced by Marvel Studios and distributed by Walt Disney Studios Motion Pictures, it is the sequel to Thor: Ragnarok (2017) and the 29th film in the Marvel Cinematic Universe (MCU). The film was directed by Taika Waititi, who co-wrote the screenplay with Jennifer Kaytin Robinson, and stars Chris Hemsworth as Thor alongside Christian Bale, Tessa Thompson, Jaimie Alexander, Waititi, Russell Crowe, and Natalie Portman. In the film, Thor attempts to find inner peace, but must return to action and recruit Valkyrie (Thompson), Korg (Waititi), and Jane Foster (Portman)—who is now the Mighty Thor—to stop Gorr the God Butcher (Bale) from eliminating all gods.",
    id: "40f7c01a-0eed-489d-92ae-f806799fcba4",
    rating: 0.20245212254732503,
  },
  {
    displayImageUrl:
      "https://upload.wikimedia.org/wikipedia/en/2/25/South_Park_The_Streaming_Wars_Part_2_poster.jpg",
    displayName: "South Park The Streaming Wars Part 2",
    format: "Movie",
    genres: ["Animated", "Comedy", "Erotic"],
    summary:
      '"South Park The Streaming Wars Part 2" is a 2022 American adult animated comedy television special episode written and directed by Trey Parker. It is the fourth South Park television special and 319th overall episode of the television series, and was released on Paramount+ on July 13, 2022. It concludes the storyline that began in its predecessor, "South Park The Streaming Wars".',
    id: "f90cc3a3-12a6-4730-a353-5dd309b4f889",
    rating: 0.5207334111184823,
  },
  {
    displayImageUrl:
      "https://upload.wikimedia.org/wikipedia/en/5/59/The_Gray_Man_poster.png",
    displayName: "The Gray Man",
    format: "Movie",
    genres: ["Action", "Thriller"],
    summary:
      "The Gray Man is a 2022 American action thriller film directed by Anthony and Joe Russo, from a screenplay the latter co-wrote with Christopher Markus and Stephen McFeely, based on the 2009 novel of the same name by Mark Greaney. The film stars Ryan Gosling, Chris Evans, Ana de Armas, Jessica Henwick, Regé-Jean Page, Wagner Moura, Julia Butters, Dhanush, Alfre Woodard, and Billy Bob Thornton. Produced by the Russo brothers' company, AGBO, it is the first film in a franchise based upon Greaney's Gray Man novels. The plot centers on CIA agent \"Sierra Six\", who is on the run from sociopathic ex-CIA agent and mercenary Lloyd Hansen upon discovering corrupt secrets about his superior.",
    id: "5db810b5-143d-4410-8077-636054dc56e7",
    rating: 0.5971863486270275,
  },
  {
    displayImageUrl:
      "https://upload.wikimedia.org/wikipedia/en/2/23/Where_the_Crawdads_Sing_%28film%29.jpg",
    displayName: "Where the Crawdads Sing",
    format: "Movie",
    genres: ["Drama", "Mystery"],
    summary:
      "Where the Crawdads Sing is a 2022 American mystery drama film based on the 2018 novel of the same name by Delia Owens. It was directed by Olivia Newman from a screenplay by Lucy Alibar, and was produced by Reese Witherspoon and Lauren Neustadter. Daisy Edgar-Jones leads the cast featuring Taylor John Smith, Harris Dickinson, Michael Hyatt, Sterling Macer Jr., Jojo Regina, Garret Dillahunt, Ahna O'Reilly, and David Strathairn. The story follows an abandoned yet defiant girl, Kya, who raises herself to adulthood in a North Carolina marshland, becoming a naturalist in the process. When the town's hotshot is found dead, she is the prime suspect and is tried for murder.",
    id: "ae0b8556-f532-4ee3-9aaa-d8911419a82a",
    rating: 0.7840286293538548,
  },
  {
    displayImageUrl:
      "https://upload.wikimedia.org/wikipedia/en/5/51/Paws_of_Fury_poster.jpg",
    displayName: "Paws of Fury: The Legend of Hank",
    format: "Movie",
    genres: ["Animated", "Comedy", "Martial Arts"],
    summary:
      "Paws of Fury: The Legend of Hank is a 2022 computer-animated martial arts comedy film directed by Rob Minkoff, Mark Koetsier and Chris Bailey. A loose remake of the 1974 live-action film Blazing Saddles, it features the voices of Michael Cera, Ricky Gervais, Mel Brooks, George Takei, Aasif Mandvi, Gabriel Iglesias, Djimon Hounsou, Michelle Yeoh and Samuel L. Jackson. The film takes place in a world of anthropomorphic animals, in which a dog named Hank learns to become a samurai to save a cat village from a conniving landlord.",
    id: "34410c49-efd5-4c51-b831-ab44aab77573",
    rating: 0.7085432881505236,
  },
  {
    displayImageUrl:
      "https://upload.wikimedia.org/wikipedia/en/f/fd/Persuasion_%282022_film%29.jpg",
    displayName: "Persuasion",
    format: "Movie",
    genres: ["Drama", "Romance"],
    summary:
      "Persuasion is a 2022 American romantic drama film directed by Carrie Cracknell from a screenplay by Ron Bass and Alice Victoria Winslow, based on the novel of the same name by Jane Austen. The film stars Dakota Johnson, Cosmo Jarvis, Nikki Amuka-Bird, Mia McKenna-Bruce, Richard E. Grant, and Henry Golding.",
    id: "a6482778-fbc1-4386-9878-78641d6e1ead",
    rating: 0.27162947895103295,
  },
  {
    displayImageUrl:
      "https://upload.wikimedia.org/wikipedia/en/8/8d/Gone_in_the_Night_%282022_film%29.jpg",
    displayName: "Gone in the Night",
    format: "Movie",
    genres: ["Thriller"],
    summary:
      "Gone in the Night is an 2022 American thriller film, directed by Eli Horowitz, in his directorial debut from a screenplay by Horowitz and Matthew Derby. It stars Winona Ryder, Dermot Mulroney, John Gallagher Jr., Owen Teague and Brianne Tju.",
    id: "ac754fe5-014a-4d87-9c8e-7d812d270821",
    rating: 0.5983473555091268,
  },
  {
    displayImageUrl:
      "https://upload.wikimedia.org/wikipedia/en/1/13/1Up_%28film%29.jpeg",
    displayName: "1Up",
    format: "Movie",
    genres: ["Comedy"],
    summary:
      "1Up is a 2022 American comedy film directed by Kyle Newman and written by Julia Yorks. It stars Paris Berelc, Taylor Zakhar Perez, Hari Nef, and Ruby Rose. It was released on July 15, 2022, by Amazon Studios.",
    id: "74461c69-22a1-4a2a-a9b7-21672dc4df15",
    rating: 0.07417962623328322,
  },
  {
    displayImageUrl:
      "https://upload.wikimedia.org/wikipedia/en/2/25/Wrong_Place.jpg",
    displayName: "Wrong Place",
    format: "Movie",
    genres: ["Action"],
    summary:
      "Wrong Place is a 2022 American action film directed by Mike Burns, from a script from Bill Lawrence, and produced by Randall Emmett and George Furla. It stars Ashley Greene and Bruce Willis.",
    id: "c90eaf86-4342-4775-a61e-ea1690e133e3",
    rating: 0.46416926244941226,
  },
  {
    displayImageUrl:
      "https://upload.wikimedia.org/wikipedia/en/e/ee/Don%27t_Make_Me_Go.jpg",
    displayName: "Don't Make Me Go",
    format: "Movie",
    genres: [],
    summary:
      "Don't Make Me Go is a 2022 American road trip film directed by Hannah Marks, written by Vera Herbert, and starring John Cho and Mia Isaac. It premiered at the Tribeca Film Festival on June 13, 2022, and was released on Amazon Prime Video on July 15, 2022.",
    id: "eb3199e4-2415-4cae-9a62-33da74700e44",
    rating: 0.42919671998470554,
  },
  {
    displayImageUrl:
      "https://upload.wikimedia.org/wikipedia/en/5/5f/He%27s_Watching.jpeg",
    displayName: "He's Watching",
    format: "Movie",
    genres: ["Found Footage", "Horror"],
    summary:
      "He's Watching, is a 2022 American found footage horror film written and directed by Jacob Aaron Estes, starring Iris Serena Estes and Lucas Steel Estes.",
    id: "720cffa4-1382-418c-bff6-b83f4589375c",
    rating: 0.25077228026666454,
  },
  {
    displayImageUrl:
      "https://upload.wikimedia.org/wikipedia/en/e/e6/Nope_%28film%29_poster.jpg",
    displayName: "Nope",
    format: "Movie",
    genres: ["Horror", "Science Fiction", "Western"],
    summary:
      "Nope is a 2022 American neo-Western science fiction horror film written, directed, and produced by Jordan Peele, under his and Ian Cooper's Monkeypaw Productions banner. It stars Daniel Kaluuya and Keke Palmer as horse-wrangling siblings attempting to capture evidence of an unidentified flying object. Appearing in supporting roles are Steven Yeun, Michael Wincott, Brandon Perea, and Keith David.",
    id: "80e400ff-a617-4002-a7d0-efa8f0476bb9",
    rating: 0.9924404416193502,
  },
  {
    displayImageUrl:
      "https://upload.wikimedia.org/wikipedia/en/5/58/Anything%27s_Possible_%28film%29.jpg",
    displayName: "Anything's Possible",
    format: "Movie",
    genres: ["Comedy", "Romance"],
    summary:
      "Anything's Possible is a 2022 American coming-of-age romantic comedy film directed by Billy Porter and written by Ximena García Lecuona.",
    id: "0142bd73-98ac-472d-b1ce-922557122c35",
    rating: 0.9279755743584601,
  },
  {
    displayImageUrl:
      "https://upload.wikimedia.org/wikipedia/en/c/c9/Alone_Together_2022_poster.jpg",
    displayName: "Alone Together",
    format: "Movie",
    genres: ["Drama", "Romance"],
    summary:
      "Alone Together is a 2022 American romantic drama film written and directed by Katie Holmes. The film stars Holmes, Jim Sturgess, Derek Luke, Melissa Leo, Zosia Mamet, and Becky Ann Baker. It premiered at the Tribeca Film Festival on July 14, 2022 and was released in the United States on July 22, 2022, by Vertical Entertainment.",
    id: "ff7e98ad-e3fb-4a9e-8534-a40b6917f8ae",
    rating: 0.6899491116634358,
  },
  {
    displayImageUrl:
      "https://upload.wikimedia.org/wikipedia/en/0/09/DC_League_of_Super-Pets.jpg",
    displayName: "DC League of Super-Pets",
    format: "Movie",
    genres: ["Animated", "Comedy", "Superhero"],
    summary:
      "DC League of Super-Pets is a 2022 American 3D computer-animated superhero comedy film based on the DC Comics superhero team Legion of Super-Pets. Produced by Warner Animation Group, DC Entertainment, and Seven Bucks Productions and distributed by Warner Bros. Pictures, it was directed by Jared Stern and co-directed by Sam J. Levine from a screenplay by Stern and John Whittington. The film stars Dwayne Johnson as the voice of Krypto, alongside a supporting ensemble voice cast that includes Kevin Hart, Kate McKinnon, John Krasinski, Vanessa Bayer, Natasha Lyonne, Diego Luna, Marc Maron, Thomas Middleditch, Ben Schwartz, and Keanu Reeves. The film tells the story of Superman's pet dog Krypto and shelter dog Ace who work with other animals to save the captured superheroes from Lex Luthor and Lulu.",
    id: "ddc726ef-9ba9-4e8b-b4ef-e6519676b248",
    rating: 0.15097695381164766,
  },
  {
    displayImageUrl:
      "https://upload.wikimedia.org/wikipedia/en/b/b6/Thirteen_Lives.jpeg",
    displayName: "Thirteen Lives",
    format: "Movie",
    genres: ["War", "Biography"],
    summary:
      "Thirteen Lives is a 2022 biographical survival film based on the Tham Luang cave rescue directed and produced by Ron Howard, from a screenplay written by William Nicholson. The film stars Viggo Mortensen, Colin Farrell, Joel Edgerton, and Tom Bateman.",
    id: "ea87407c-dd1b-44f1-99f3-2c423836bb09",
    rating: 0.47483240791231207,
  },
  {
    displayImageUrl:
      "https://upload.wikimedia.org/wikipedia/en/0/02/Vengeance_%282022_film%29.jpg",
    displayName: "Vengeance",
    format: "Movie",
    genres: ["Comedy", "Mystery"],
    summary:
      "Vengeance is a 2022 American black comedy mystery film written and directed by B. J. Novak, in his directorial debut. The film stars Novak, Boyd Holbrook, Dove Cameron, Issa Rae, and Ashton Kutcher. Jason Blum is a producer under his Blumhouse Productions banner, and Greg Gilreath and Adam Hendricks are producers under their Divide/Conquer banner.",
    id: "fa1bf9a2-2751-44ac-82c1-2210c8888281",
    rating: 0.9632770613271613,
  },
  {
    displayImageUrl:
      "https://upload.wikimedia.org/wikipedia/en/4/4e/Sharp_Stick.jpg",
    displayName: "Sharp Stick",
    format: "Movie",
    genres: ["Comedy"],
    summary:
      "Sharp Stick is a 2022 American comedy film written, directed, and produced by Lena Dunham. It stars Kristine Froseth, Jon Bernthal, Luka Sabbat, Scott Speedman, Dunham, Ebon Moss-Bachrach, Taylour Paige, and Jennifer Jason Leigh. The film premiered at the Sundance Film Festival on January 22, 2022, and was released theatrically in the United States on July 29, 2022, by Utopia. It received mixed reviews from critics. It was released on VOD on August 16, 2022.",
    id: "9910c9bf-8c35-4a3e-a6ae-1a60ed64bbc6",
    rating: 0.1871430431475749,
  },
  {
    displayImageUrl:
      "https://upload.wikimedia.org/wikipedia/en/2/24/Not_Okay_Poster.jpg",
    displayName: "Not Okay",
    format: "Movie",
    genres: ["Comedy", "Drama"],
    summary:
      "Not Okay is a 2022 American satirical black comedy-drama film written and directed by Quinn Shephard. It stars Zoey Deutch as a young woman who desperately wants to be famous and beloved on the Internet, succeeding when she pretends to be a survivor of a bombing. It also stars Mia Isaac, Nadia Alexander, Embeth Davidtz, Karan Soni, and Dylan O'Brien.",
    id: "b7b3c182-3e22-4167-b3ad-f358c0578811",
    rating: 0.8061027634783253,
  },
  {
    displayImageUrl:
      "https://upload.wikimedia.org/wikipedia/en/b/b3/Paradise_Highway_poster.png",
    displayName: "Paradise Highway",
    format: "Movie",
    genres: ["Thriller"],
    summary:
      "Paradise Highway is a 2022 thriller film written and directed by Anna Gutto and starring Juliette Binoche, Frank Grillo, and Morgan Freeman. An international co-production between the United States, Germany, and Switzerland, the film was released in the United States on July 29, 2022, by Lionsgate.",
    id: "58397255-38cb-4f4d-88d4-6856ccefafe8",
    rating: 0.6191619034894946,
  },
  {
    displayImageUrl:
      "https://upload.wikimedia.org/wikipedia/en/8/80/Resurrection_%282022_film%29.jpg",
    displayName: "Resurrection",
    format: "Movie",
    genres: ["Thriller"],
    summary:
      "Resurrection is a 2022 American psychological thriller film written and directed by Andrew Semans. It stars Rebecca Hall, Grace Kaufman, Michael Esper, and Tim Roth. The plot follows Margaret (Hall) as she tries to maintain control of her life when an abusive ex-boyfriend (Roth) re-appears in her vicinity. The film was shot in Albany, NY and Williamsburg, Brooklyn.",
    id: "6ae436e3-84d2-4cb8-8a4b-b46af383bc50",
    rating: 0.5099171187400857,
  },
  {
    displayImageUrl:
      "https://upload.wikimedia.org/wikipedia/en/c/c4/A_Love_Song_%28film%29.jpg",
    displayName: "A Love Song",
    format: "Movie",
    genres: ["Drama"],
    summary:
      "A Love Song is a 2022 American drama film written, directed, produced, and co-edited by Max Walker-Silverman in his feature directorial debut. It stars Dale Dickey and Wes Studi as two childhood friends who spend a night together by a lake in the mountains. The film premiered at the Sundance Film Festival on January 20, 2022, and was released in the United States on July 29, 2022, by Bleecker Street and Stage 6 Films. It received generally positive reviews from critics.",
    id: "46fcf946-8610-4607-8e29-bbfc798bb2cb",
    rating: 0.6249052900553556,
  },
  {
    displayImageUrl:
      "https://upload.wikimedia.org/wikipedia/en/b/ba/Honor_Society_2022_film_poster.jpg",
    displayName: "Honor Society",
    format: "Movie",
    genres: ["Comedy"],
    summary:
      "Honor Society is a 2022 American coming-of-age comedy film starring Angourie Rice and Gaten Matarazzo. It is directed by Oran Zegman based on a screenplay written by David A. Goodman.",
    id: "35470536-0e89-413a-ac5d-26ede9535725",
    rating: 0.5206176751364284,
  },
  {
    displayImageUrl:
      "https://upload.wikimedia.org/wikipedia/en/a/ae/Allegoria.jpeg",
    displayName: "Allegoria",
    format: "Movie",
    genres: ["Horror"],
    summary:
      "Allegoria is a 2022 American horror anthology film directed by Spider One, starring John Ennis, Bryce Johnson, Edward Hong, Adam Busch and Adam Marcinowski. It is the directorial debut of Spider One.",
    id: "830462c0-407f-4685-9794-b3287a1f5b48",
    rating: 0.012032878429433458,
  },
  {
    displayImageUrl:
      "https://upload.wikimedia.org/wikipedia/en/1/13/Bullet_Train_%28poster%29.jpeg",
    displayName: "Bullet Train",
    format: "Movie",
    genres: ["Action", "Comedy"],
    summary:
      "Bullet Train is a 2022 American action comedy film starring Brad Pitt as an assassin who must battle fellow killers while riding a bullet train. The film was directed by David Leitch from a screenplay by Zak Olkewicz, and produced by Antoine Fuqua, who initially conceived the film. It is based on the 2010 novel Maria Beetle, written by Kōtarō Isaka and translated by Sam Malissa, the second novel in Isaka's Hitman trilogy, of which the first novel was previously adapted as the 2015 Japanese film Grasshopper. The film also features an ensemble supporting cast including Joey King, Aaron Taylor-Johnson, Brian Tyree Henry, Andrew Koji, Hiroyuki Sanada, Michael Shannon, Benito A. Martínez Ocasio, and Sandra Bullock.",
    id: "14d90413-4b11-4292-9caa-05b36342468b",
    rating: 0.54257619972782,
  },
  {
    displayImageUrl:
      "https://upload.wikimedia.org/wikipedia/en/6/6e/Luck_%282022%29_poster.png",
    displayName: "Luck",
    format: "Movie",
    genres: ["Animated", "Comedy", "Fantasy"],
    summary:
      "Luck is a 2022 computer-animated fantasy comedy film directed by Peggy Holmes and co-directed by Javier Abad, from a screenplay written by Kiel Murray, and a story by Murray and the writing team of Jonathan Aibel and Glenn Berger, based on an original concept created by Rebeca Carrasco, Juan De Dios, and Julián Romero. Produced by Skydance Animation, the film features the voices of Eva Noblezada, Simon Pegg, Jane Fonda, Whoopi Goldberg, Flula Borg, Lil Rel Howery, Colin O'Donoghue, and John Ratzenberger. Set in the Land of Luck, the story follows the unluckiest person, Sam Greenfield (Noblezada), as she must unite with an anthropomorphic cat named Bob (Pegg) to turn her luck around.",
    id: "80fc6728-d96c-4c9a-baff-e7fb6321e6e7",
    rating: 0.05379694896549814,
  },
  {
    displayImageUrl:
      "https://upload.wikimedia.org/wikipedia/en/f/f4/Prey_2022_poster.png",
    displayName: "Prey",
    format: "Movie",
    genres: ["Action", "Science Fiction"],
    summary:
      "Prey is a 2022 American science fiction action film in the Predator franchise. It is the fifth installment and is a prequel to the first four films, being set in the Northern Great Plains in 1719. The film is directed by Dan Trachtenberg and written by Patrick Aison. It stars Amber Midthunder, Dakota Beavers, Dane DiLiegro, Michelle Thrush, Stormee Kipp, Julian Black Antelope, and Bennett Taylor. The story revolves around a young Comanche woman, Naru, who is striving to prove herself as a hunter. She finds herself having to protect her people from a vicious, humanoid alien that hunts humans for sport, as well as from French fur traders who are destroying the buffalo they rely on for survival.",
    id: "a3e60875-e216-45bb-8dba-0ced63c51b6e",
    rating: 0.4060805890899477,
  },
  {
    displayImageUrl:
      "https://upload.wikimedia.org/wikipedia/en/b/b7/Easter_Sunday_%28film%29.jpg",
    displayName: "Easter Sunday",
    format: "Movie",
    genres: ["Comedy"],
    summary:
      "Easter Sunday is a 2022 American comedy film starring Jo Koy as a struggling actor, comedian, and single father who attends a gathering of his loud and dysfunctional Filipino American family on Easter Sunday. The film is directed by Jay Chandrasekhar and written by Ken Cheng and Kate Angelo, from a story by Cheng. In addition to Koy, the film stars Eugene Cordero, Tia Carrere, Asif Ali, Lydia Gaston, Jimmy O. Yang, and Lou Diamond Phillips. Universal Pictures theatrically released the film on August 5, 2022. It received mixed reviews from critics.",
    id: "0d2d379c-c41c-4588-8c94-8702e37d4bb9",
    rating: 0.6219927021513323,
  },
  {
    displayImageUrl:
      "https://upload.wikimedia.org/wikipedia/en/b/b4/Rise_of_the_Teenage_Mutant_Ninja_Turtles-_The_Movie.jpeg",
    displayName: "Rise of the Teenage Mutant Ninja Turtles: The Movie",
    format: "Movie",
    genres: ["Animated", "Superhero", "War"],
    summary:
      "Rise of the Teenage Mutant Ninja Turtles: The Movie is a 2022 American animated superhero film directed by Andy Suriano and Ant Ward, from a screenplay written by Tony Gama-Lobo and Rebecca May, and a story by Suriano and Ward. Produced by Nickelodeon, it serves as a continuation of the animated television series Rise of the Teenage Mutant Ninja Turtles (2018–20). Ben Schwartz, Omar Miller, Brandon Mychal Smith, Josh Brener, Kat Graham, and Eric Bauza reprise their voice roles from the series and are joined by newcomer Haley Joel Osment. In the film, the Turtles are put to the test when a mysterious stranger named Casey Jones arrives from the future to warn them of an impending invasion by the most dangerous alien force in the galaxy, the Krang.",
    id: "0d235214-d31e-4ef3-bc09-8799a23acebe",
    rating: 0.5405644712375202,
  },
  {
    displayImageUrl:
      "https://upload.wikimedia.org/wikipedia/en/7/7f/Bodies_Bodies_Bodies_%28poster%29.jpeg",
    displayName: "Bodies Bodies Bodies",
    format: "Movie",
    genres: ["Comedy", "Horror"],
    summary:
      "Bodies Bodies Bodies is a 2022 American black comedy horror film directed by Halina Reijn, in her English-language debut, with a screenplay by Sarah DeLappe from a story by Kristen Roupenian. It stars Amandla Stenberg, Maria Bakalova, Myha'la Herrold, Chase Sui Wonders, Rachel Sennott, Lee Pace, and Pete Davidson.",
    id: "a300ad43-8c7d-4ba7-8ece-a8294ea3d6ea",
    rating: 0.37374714527215547,
  },
  {
    displayName: "They/Them",
    format: "Movie",
    genres: [],
    id: "600f1f7e-c4fa-4f04-bcbf-f43236e9275c",
    rating: 0.0186927099838039,
  },
  {
    displayImageUrl:
      "https://upload.wikimedia.org/wikipedia/en/f/f0/Secret_Headquarters_poster.jpg",
    displayName: "Secret Headquarters",
    format: "Movie",
    genres: ["Comedy", "Superhero"],
    summary:
      "Secret Headquarters is a 2022 American superhero comedy film directed by Henry Joost and Ariel Schulman, who co-wrote the movie with Christopher L. Yost and Josh Koenigsberg, based on a story by Yost. Starring Owen Wilson, Walker Scobell, Jesse Williams, Keith L. Williams, Momona Tamada, Charles Melton, and Michael Peña, the plot follows a child (Scobell) and his friends who begins to suspect his father (Wilson) might be a superhero after discovering a secret headquarters in his basement.",
    id: "e06e1404-678c-4f88-a482-2f08417a252c",
    rating: 0.18336873761565475,
  },
  {
    displayImageUrl:
      "https://upload.wikimedia.org/wikipedia/en/5/58/Day_Shift_%28film%29.jpg",
    displayName: "Day Shift",
    format: "Movie",
    genres: ["Action", "Comedy", "Horror"],
    summary:
      "Day Shift is a 2022 American action horror comedy film directed by J. J. Perry in his directorial debut, written by Tyler Tice and Shay Hatten from a story by Tice, and starring Jamie Foxx as a blue-collar father whose pool-cleaning job is a front for his work as a vampire hunter. The film also stars Dave Franco, Snoop Dogg, Natasha Liu Bordizzo, Meagan Good, Karla Souza, Steve Howey, and Scott Adkins.",
    id: "75b90af7-c671-4772-ad1b-499881b51ad2",
    rating: 0.4842534445930864,
  },
  {
    displayImageUrl:
      "https://upload.wikimedia.org/wikipedia/en/3/3b/Mack_%26_Rita.jpeg",
    displayName: "Mack & Rita",
    format: "Movie",
    genres: ["Comedy"],
    summary:
      "Mack & Rita is a 2022 American comedy film directed by Katie Aselton, from a screenplay by Madeline Walter and Paul Welsh. The plot follows a 30-year-old woman who wakes up as her 70-year-old self after a bachelorette party. Taylour Paige, Loretta Devine, Amy Hill, Lois Smith, Wendie Malick, Simon Rex, Martin Short, and Dustin Milligan also star. The film was released on August 12, 2022, by Gravitas Premiere, to negative reviews from critics, including a worst actress nomination for Keaton, but the performances of Paige and Milligan were praised.",
    id: "477ed1f8-ca16-45ab-a8a0-39c741e37752",
    rating: 0.6388895467519065,
  },
  {
    displayImageUrl:
      "https://upload.wikimedia.org/wikipedia/en/2/2a/Fall_%282022_film%29.jpg",
    displayName: "Fall",
    format: "Movie",
    genres: ["Thriller"],
    summary:
      "Fall is a 2022 survival thriller film directed and co-written by Scott Mann and Jonathan Frank. Starring Grace Caroline Currey, Virginia Gardner, Mason Gooding and Jeffrey Dean Morgan, it is about two women who climb a 2,000 foot (610 m) tall television broadcasting tower and become stranded at the top.",
    id: "295197cc-d750-468b-b732-6548cc1577c2",
    rating: 0.026066764655133134,
  },
  {
    displayImageUrl:
      "https://upload.wikimedia.org/wikipedia/en/5/58/Emily_the_Criminal.jpg",
    displayName: "Emily the Criminal",
    format: "Movie",
    genres: ["Crime", "Thriller"],
    summary:
      "Emily the Criminal is a 2022 American crime thriller film written and directed by John Patton Ford in his feature directorial debut. It stars Aubrey Plaza as the title character, with Theo Rossi, Megalyn Echikunwoke, and Gina Gershon in supporting roles. The film follows Emily Benetto, a young woman saddled with student debt and locked out of the job market due to a minor criminal record, who gets involved in a credit card scam that pulls her into the criminal underworld of Los Angeles.",
    id: "08851149-9c8c-474b-ad2c-96548232f586",
    rating: 0.838534289753512,
  },
  {
    displayImageUrl:
      "https://upload.wikimedia.org/wikipedia/en/a/ae/Summering.jpg",
    displayName: "Summering",
    format: "Movie",
    genres: ["Drama"],
    summary:
      "Summering is a 2022 American coming-of-age drama film co-written, directed, and produced by James Ponsoldt. It stars Lia Barnett, Lake Bell, Sarah Cooper, Ashley Madekwe, Madalen Mills, Megan Mullally, Eden Grace Redfield, and Sanai Victoria. It was released on August 12, 2022, by Bleecker Street.",
    id: "8a1ff029-3514-4cb5-bb0b-ae060fb7d434",
    rating: 0.41701599712455173,
  },
  {
    displayImageUrl:
      "https://upload.wikimedia.org/wikipedia/en/8/81/Beast_2022_American_poster.jpg",
    displayName: "Beast",
    format: "Movie",
    genres: ["Action", "Horror"],
    summary:
      "Beast is a 2022 survival action horror film directed by Baltasar Kormákur from a screenplay by Ryan Engle, based on a story by Jaime Primak Sullivan. The film stars Idris Elba, Iyana Halley, Leah Sava Jeffries, and Sharlto Copley. It follows a widowed father and his two teenage daughters who visit a South African game reserve but must fight to survive when they are stalked and attacked by a ferocious, rogue, man-killing lion.",
    id: "5ac491c0-3738-427d-920a-b10755d7629f",
    rating: 0.1895231664810284,
  },
  {
    displayImageUrl:
      "https://upload.wikimedia.org/wikipedia/en/b/b4/OrphanFirstKillPoster.jpg",
    displayName: "Orphan: First Kill",
    format: "Movie",
    genres: ["Horror"],
    summary:
      "Orphan: First Kill is a 2022 psychological horror film directed by William Brent Bell, written by David Coggeshall, based on a story by David Leslie Johnson-McGoldrick and Alex Mace. It is a prequel to the 2009 film Orphan. It stars Isabelle Fuhrman, Julia Stiles, Rossif Sutherland, Hiro Kanagawa, and Matthew Finlan.",
    id: "b60f869c-fbe9-4cea-aacc-4d5333affb78",
    rating: 0.5356918365690495,
  },
  {
    displayImageUrl:
      "https://upload.wikimedia.org/wikipedia/en/a/a8/Spin_Me_Round_%28film%29.jpg",
    displayName: "Spin Me Round",
    format: "Movie",
    genres: ["Comedy"],
    summary:
      "Spin Me Round is a 2022 American dark comedy film co-written by Jeff Baena and Alison Brie and directed by Baena. It premiered at the 2022 South by Southwest festival on March 12, 2022. It was released on August 19, 2022, by IFC Films in theaters and by AMC+ on video on demand.",
    id: "ef0b426b-d6ad-4953-819f-f42ff27c3f74",
    rating: 0.9489120595612011,
  },
  {
    displayImageUrl:
      "https://upload.wikimedia.org/wikipedia/en/d/de/Delias_gone.jpg",
    displayName: "Delia's Gone",
    format: "Movie",
    genres: ["Drama"],
    summary:
      "Delia's Gone is a 2022 drama film, written, directed, and produced by Robert Budreau, based upon a short story Caged Bird Sing by Michael Hamblin. It stars Stephan James, Marisa Tomei, Paul Walter Hauser, and Travis Fimmel.",
    id: "01c732f2-20e5-4ceb-a4f9-6c6d43e70f1d",
    rating: 0.41051650926123373,
  },
  {
    displayImageUrl:
      "https://upload.wikimedia.org/wikipedia/en/2/27/Three_Thousand_Years_of_Longing.jpeg",
    displayName: "Three Thousand Years of Longing",
    format: "Movie",
    genres: ["Drama", "Fantasy", "Romance"],
    summary:
      "Three Thousand Years of Longing is a 2022 fantasy romantic drama film directed and produced by George Miller. Written by Miller and Augusta Gore, it is based on the short story \"The Djinn in the Nightingale's Eye\" by A. S. Byatt and stars Idris Elba as a djinn who is unleashed from a bottle by a professor and tells her stories from his thousands of years of existence. The film is dedicated to Miller's mother Angela, as well as Rena Mitchell, relative of producer Doug Mitchell.",
    id: "a87d2aaf-fb63-469e-a65d-649682648783",
    rating: 0.09188432082291542,
  },
  {
    displayImageUrl:
      "https://upload.wikimedia.org/wikipedia/en/d/de/Samaritan2022Poster.jpg",
    displayName: "Samaritan",
    format: "Movie",
    genres: ["Superhero"],
    summary:
      'Samaritan is a 2022 American superhero film directed by Julius Avery and written by Bragi F. Schut. Described as a dark, new take on superhero movies, the story was previously adapted into the Mythos Comics graphic novels by Schut, Marc Olivent, and Renzo Podesta. It is a co-production of Metro-Goldwyn-Mayer and Balboa Productions. The film stars Sylvester Stallone in the main role, Javon "Wanna" Walton, Pilou Asbæk, Dascha Polanco, and Moisés Arias. The story follows a kid who suspects that his neighbor is secretly a superhero who was believed to have died many years prior.',
    id: "2e84c472-6270-4597-8cbf-9d9c39120fb2",
    rating: 0.5099850874912131,
  },
  {
    displayImageUrl:
      "https://upload.wikimedia.org/wikipedia/en/f/fa/Me_Time_%28film%29.jpg",
    displayName: "Me Time",
    format: "Movie",
    genres: ["Comedy"],
    summary:
      'Me Time is a 2022 American buddy comedy film written and directed by John Hamburg. The film stars Kevin Hart, Mark Wahlberg, Regina Hall, Luis Gerardo Méndez, and Jimmy O. Yang. It is about a stay-at-home dad as he finds himself with some "me time" for the first time in years while his wife and kids are away. He reconnects with his former best friend Huck for a wild weekend that nearly upends his life.',
    id: "793082cf-f149-496b-830e-b839b2e4cefa",
    rating: 0.9974971312629504,
  },
  {
    displayImageUrl:
      "https://upload.wikimedia.org/wikipedia/en/8/8a/The_Invitation_%282022_film%29_poster.jpg",
    displayName: "The Invitation",
    format: "Movie",
    genres: ["Horror", "Thriller"],
    summary:
      "The Invitation is a 2022 American horror thriller film directed by Jessica M. Thompson and written by Blair Butler. The film stars Nathalie Emmanuel and Thomas Doherty. Inspired by the novel Dracula by Bram Stoker, the film follows a young woman who, following her mother's death, meets long-lost family members for the first time, only to discover the dark secrets they carry with them.",
    id: "c1784273-14dd-4250-acac-7ea18eb4d8c0",
    rating: 0.7020487554488026,
  },
  {
    displayImageUrl:
      "https://upload.wikimedia.org/wikipedia/en/d/da/Breaking_%28film%29.jpg",
    displayName: "Breaking",
    format: "Movie",
    genres: ["Drama", "Thriller"],
    summary:
      'Breaking is a 2022 American thriller drama film starring John Boyega as a Marine Corps veteran, Brian Brown-Easley, who is in financial trouble and robs a bank. It is written and directed by Abi Damaris Corbin and co-written by Kwame Kwei-Armah, based on the true story of Brown-Easley, detailed in the 2018 Task & Purpose article "They Didn\'t Have to Kill Him" by Aaron Gell. The film also stars Nicole Beharie, Selenis Leyva, Connie Britton, Jeffrey Donovan, and Michael Kenneth Williams.',
    id: "9908a87e-bffb-4e04-b58f-2aeb611e2b4b",
    rating: 0.49060406604726436,
  },
  {
    displayImageUrl:
      "https://upload.wikimedia.org/wikipedia/en/7/70/Funny_Pages.jpg",
    displayName: "Funny Pages",
    format: "Movie",
    genres: ["Comedy"],
    summary:
      "Funny Pages is a 2022 American coming-of-age black comedy film written, directed, and edited by Owen Kline and produced by the Safdie brothers. It premiered at the 2022 Cannes Film Festival and was released in the United States on August 26, 2022, where it received positive reviews from critics.",
    id: "be767f98-1986-4fa1-a622-f849d760953f",
    rating: 0.6334010865679727,
  },
  {
    displayImageUrl:
      "https://upload.wikimedia.org/wikipedia/en/e/ee/Honk_for_Jesus._Save_Your_Soul_film_poster.png",
    displayName: "Honk for Jesus. Save Your Soul.",
    format: "Movie",
    genres: ["Comedy", "Short", "Satire"],
    summary:
      "Honk for Jesus. Save Your Soul. is a 2022 American mockumentary comedy film written, directed, and produced by Adamma Ebo, in her feature directorial debut, and is a feature-length adaptation of Ebo's 2018 short film of the same name. It stars Regina Hall and Sterling K. Brown as the first lady and the pastor of a megachurch, who attempt to reopen and rebuild their congregation, following a major scandal. Austin Crute, Nicole Beharie, and Conphidance also feature in supporting roles. Hall and Brown are also producers on the film alongside Daniel Kaluuya, who produced under his 59% Productions banner, with Jordan Peele serving as executive producer under his Monkeypaw Productions banner.",
    id: "d322f509-6381-4924-aaeb-564fbeda6a85",
    rating: 0.3508251339397521,
  },
  {
    displayImageUrl:
      "https://upload.wikimedia.org/wikipedia/en/5/5a/Gigi-Nate-poster.jpeg",
    displayName: "Gigi & Nate",
    format: "Movie",
    genres: ["Drama"],
    summary:
      "Gigi & Nate is a 2022 American coming-of-age drama film directed by Nick Hamm from a screenplay by David Hudgins. The film is based on a true story of a quadriplegic and a capuchin monkey. The film was released in the United States on September 2, 2022, by Roadside Attractions.",
    id: "b44300e9-30cb-4456-9321-ed808e560187",
    rating: 0.764700438903974,
  },
  {
    displayImageUrl:
      "https://upload.wikimedia.org/wikipedia/en/f/f7/Wire_Room_poster.png",
    displayName: "Wire Room",
    format: "Movie",
    genres: ["Action"],
    summary:
      "Wire Room is a 2022 American action film directed by Matt Eskandari, from a screenplay by Brandon Stiefer, and produced by Randall Emmett, George Furla, Oliver Trevena, Norton Herrick, Ceasar Richbow, Mark Stewart, and Noel Ashman. It stars Kevin Dillon and Bruce Willis.",
    id: "34c0723b-c161-40d2-81d0-a222b6ea91f6",
    rating: 0.4826044894425616,
  },
  {
    displayImageUrl:
      "https://upload.wikimedia.org/wikipedia/en/e/e7/One_Way_poster.jpg",
    displayName: "One Way",
    format: "Movie",
    genres: ["Action", "Crime", "Thriller"],
    summary:
      "One Way is an American action crime thriller film written by Ben Conway and directed by Andrew Baird. Principal photography began in 2021. The film stars Colson Baker, Kevin Bacon and Travis Fimmel.",
    id: "46341a22-93c6-4d90-9ddf-dd8283e18884",
    rating: 0.8596998920502958,
  },
  {
    displayImageUrl:
      "https://upload.wikimedia.org/wikipedia/en/6/63/AfterEverHappy.jpg",
    displayName: "After Ever Happy",
    format: "Movie",
    genres: ["Drama", "Romance"],
    summary:
      "After Ever Happy is a 2022 American romantic drama film directed by Castille Landon, from a screenplay by Sharon Soboil. Based on the 2015 novel of the same name by Anna Todd, it is a sequel to After We Fell, and the fourth overall installment in the After film series. The film stars Josephine Langford and Hero Fiennes Tiffin, reprising their roles as Tessa Young and Hardin Scott, respectively. The plot continues the premise of the three previous films.",
    id: "668ee055-73cd-4cbf-96b5-26c45bbcffa7",
    rating: 0.43056187483241626,
  },
  {
    displayImageUrl:
      "https://upload.wikimedia.org/wikipedia/en/5/5b/Pinocchio_2022_film_poster.png",
    displayName: "Pinocchio",
    format: "Movie",
    genres: ["Live Action", "Animated", "Fantasy", "Musical"],
    summary:
      "Pinocchio is a 2022 American live action/computer animated musical fantasy film directed by Robert Zemeckis from a screenplay by Zemeckis and Chris Weitz. Produced by Walt Disney Pictures, Depth of Field and ImageMovers, the film is a live-action remake of Walt Disney's 1940 animated film of the same name, which is itself based on the 1883 Italian book The Adventures of Pinocchio by Carlo Collodi. It stars Tom Hanks, Cynthia Erivo, Giuseppe Battiston and Luke Evans with Benjamin Evan Ainsworth, Joseph Gordon-Levitt, Keegan-Michael Key, and Lorraine Bracco in voice roles. The story follows a wooden puppet named Pinocchio, who is brought to life by a blue fairy (Erivo) after being crafted by an old Italian woodcarver named Geppetto (Hanks). While the role of Pinocchio's conscience Jiminy Cricket (Gordon-Levitt) attempts to guide Pinocchio in matters of right and wrong, Pinocchio encounters a host of unsavory characters in his efforts to become a real boy.",
    id: "c7889fc5-a572-4c6e-bde2-2da1b1571188",
    rating: 0.6030659863296677,
  },
  {
    displayImageUrl:
      "https://upload.wikimedia.org/wikipedia/en/e/eb/Barbarian_2022_film_poster.png",
    displayName: "Barbarian",
    format: "Movie",
    genres: ["Horror", "Thriller"],
    summary:
      "Barbarian is a 2022 American horror thriller film written and directed by Zach Cregger in his solo screen writing and directorial debut. It is produced by Arnon Milchan, Roy Lee, Raphael Margules, and J.D. Lifshitz. The film stars Georgina Campbell, Bill Skarsgård, and Justin Long. The plot sees a woman find out that the rental home she reserved has been accidentally double-booked by a man, not knowing of a dark secret within the dwelling.",
    id: "5bbdfdc9-3fa9-443c-8a70-70edcf3d573d",
    rating: 0.20527896324090222,
  },
  {
    displayImageUrl:
      "https://upload.wikimedia.org/wikipedia/en/3/3c/Film_poster_for_the_2022_film_End_of_the_Road.png",
    displayName: "End of the Road",
    format: "Movie",
    genres: ["Crime", "Thriller"],
    summary:
      "End of the Road is an 2022 American crime thriller film directed by Millicent Shelton, written by Christopher J. Moore and David Loughery, and produced by Tracey Edmonds, Mark Burg, and Brad Kaplan. The film stars Queen Latifah, Ludacris, Mychala Lee, Shaun Dixon, and Beau Bridges.",
    id: "2fdbee85-c905-4861-bc5d-0fce51c84acf",
    rating: 0.6603452810857218,
  },
  {
    displayImageUrl:
      "https://upload.wikimedia.org/wikipedia/en/0/0a/LifemarkPoster.jpeg",
    displayName: "Lifemark",
    format: "Movie",
    genres: ["Documentary", "Drama", "Short"],
    summary:
      "Lifemark is a 2022 American Christian drama film by director Kevin Peeples, adapting the true story of the adoption of David Scotton, previously depicted in the 2018 short documentary film I Lived on Parker Avenue. It tells the story of how a young man's mother considered aborting him, but instead made an adoption plan for him, and later reconnected with him as a young adult. Kirk Cameron, Alex Kendrick, and Raphael Ruggero star, while the Kendrick Brothers co-wrote the script with Peeples and act as executive producers. The film was released on September 9, 2022, via Fathom Events after traditional distributors declined to release it. It received generally positive reviews, and its initial one-week theatrical run was extended an extra week due to its box-office success.",
    id: "d8ba219d-057a-44c7-bd36-7756b8f34834",
    rating: 0.41864444001822987,
  },
  {
    displayName: "Flight/Risk",
    format: "Movie",
    genres: [],
    id: "93558d55-be1a-41fa-97c8-86cbcbe8126f",
    rating: 0.8713473217518726,
  },
  {
    displayImageUrl:
      "https://upload.wikimedia.org/wikipedia/en/8/80/Clerks_III.jpg",
    displayName: "Clerks III",
    format: "Movie",
    genres: ["Comedy", "Drama"],
    summary:
      "Clerks III is a 2022 American dark comedy-drama film written, produced, directed, and edited by Kevin Smith and stars Brian O'Halloran, Jeff Anderson, Trevor Fehrman, Austin Zajur, Jason Mewes, Rosario Dawson and Smith. It serves as a standalone sequel to the 1994 and 2006 Clerks films, and is the ninth overall feature film set in the View Askewniverse. In the film, Randal Graves, after surviving a massive heart attack, enlists his friends and fellow clerks Dante Hicks, Elias Grover, and Jay and Silent Bob to make a movie about their lives at the Quick Stop Convenience store that started it all.",
    id: "90d8b268-4226-4076-ae62-a6751189f340",
    rating: 0.39378235533223105,
  },
  {
    displayImageUrl:
      "https://upload.wikimedia.org/wikipedia/en/3/34/The_Woman_King_%28film%29.jpg",
    displayName: "The Woman King",
    format: "Movie",
    genres: ["Action", "Drama", "Historical", "War"],
    summary:
      "The Woman King is a 2022 American historical action drama film about the Agojie, the all-female warrior unit that protected the West African kingdom of Dahomey during the 17th to 19th centuries. Set in the 1820s, the film stars Viola Davis as a general who trains the next generation of warriors to fight their enemies. It is directed by Gina Prince-Bythewood and written by Dana Stevens, based on a story she wrote with Maria Bello. The film also stars Thuso Mbedu, Lashana Lynch, Sheila Atim, Hero Fiennes Tiffin, and John Boyega.",
    id: "34748aa0-8b06-4d90-9409-a1398fe8e728",
    rating: 0.4653681279095703,
  },
  {
    displayImageUrl:
      "https://upload.wikimedia.org/wikipedia/en/7/72/See_How_They_Run_%282022_film%29.jpg",
    displayName: "See How They Run",
    format: "Movie",
    genres: ["Comedy", "Mystery"],
    summary:
      "See How They Run is a 2022 comedy mystery film directed by Tom George, written by Mark Chappell and produced by Damian Jones and Gina Carter. The film stars Sam Rockwell, Saoirse Ronan, Adrien Brody, Ruth Wilson, Reece Shearsmith, Harris Dickinson and David Oyelowo.",
    id: "9e2f0f62-158b-4f18-91f9-a8fc803a6e4b",
    rating: 0.4089443065971432,
  },
  {
    displayImageUrl:
      "https://upload.wikimedia.org/wikipedia/en/6/6d/Blonde_2022_film_poster.jpg",
    displayName: "Blonde",
    format: "Movie",
    genres: ["Drama", "Biography"],
    summary:
      "Blonde is a 2022 American biographical psychological drama film written and directed by Andrew Dominik, and the second adaptation, with the same name, based on the 2000 novel of the same name by Joyce Carol Oates. The film is a fictionalized take on the life and career of American actress Marilyn Monroe, played by Ana de Armas. The cast also includes Adrien Brody, Bobby Cannavale, Xavier Samuel, and Julianne Nicholson.",
    id: "e351d2ee-103b-4fa7-8304-12e629a0ce7d",
    rating: 0.5305617564593315,
  },
  {
    displayImageUrl:
      "https://upload.wikimedia.org/wikipedia/en/5/5b/Pearl_theatricalposter.jpg",
    displayName: "Pearl",
    format: "Movie",
    genres: ["Slasher"],
    summary:
      "Pearl is a 2022 American slasher film directed by Ti West, co-written by West and Mia Goth, who reprises her role as the title character, and featuring David Corenswet, Tandi Wright, Matthew Sunderland, and Emma Jenkins-Purro in supporting roles. A prequel to X (2022) and the second installment in the X film series, it serves as an origin story for the title villain, whose fervent aspiration to become a movie star led her to committing violent acts on her family's Texas homestead in 1918.",
    id: "af1dc206-0a11-4151-bac8-293e861c6de7",
    rating: 0.10259639710740287,
  },
  {
    displayImageUrl:
      "https://upload.wikimedia.org/wikipedia/en/9/98/Do_Revenge.jpg",
    displayName: "Do Revenge",
    format: "Movie",
    genres: ["Comedy", "Teen"],
    summary:
      "Do Revenge is a 2022 American teen black comedy film directed by Jennifer Kaytin Robinson, who co-wrote the screenplay alongside Celeste Ballard. It stars Camila Mendes, Maya Hawke, Austin Abrams, Rish Shah, and Sarah Michelle Gellar, and is loosely inspired by Alfred Hitchcock's Strangers on a Train (1951). It was released on Netflix on September 16, 2022, and received generally positive reviews from critics.",
    id: "4b5a48ec-6db6-48f8-a43d-5226b6c294ea",
    rating: 0.05276412519851581,
  },
  {
    displayImageUrl:
      "https://upload.wikimedia.org/wikipedia/en/3/3b/The_Silent_Twins_%282022_film%29.jpg",
    displayName: "The Silent Twins",
    format: "Movie",
    genres: ["Drama", "Biography"],
    summary:
      "The Silent Twins is a 2022 internationally co-produced biographical drama film about the twin sisters, June and Jennifer Gibbons, who were institutionalized at Broadmoor Hospital following years of silence and teenage rebellion. It was directed by Agnieszka Smoczyńska from a screenplay by Andrea Seigel, who adapted the book of the same name by Marjorie Wallace. The film stars Letitia Wright, Tamara Lawrance, Nadine Marshall, Treva Etienne, Michael Smiley, and Jodhi May.",
    id: "7e45f180-7812-4894-8971-bee29b25f9c6",
    rating: 0.9614270785280958,
  },
  {
    displayImageUrl:
      "https://upload.wikimedia.org/wikipedia/en/6/61/Confess%2C_Fletch.jpg",
    displayName: "Confess, Fletch",
    format: "Movie",
    genres: ["Comedy", "Crime"],
    summary:
      "Confess, Fletch is a 2022 American crime comedy film directed by Greg Mottola, who also co-wrote the screenplay with Zev Borow. Based on Gregory Mcdonald's 1976 novel of the same name, the film stars Jon Hamm, Lorenza Izzo, Marcia Gay Harden, Kyle MacLachlan, Roy Wood Jr., and John Slattery. It is the third installment in the Fletch series, following Fletch (1985) and Fletch Lives (1989), and the first not to star Chevy Chase.",
    id: "830b4606-a566-4bc2-87e3-8ac487085e7f",
    rating: 0.10690592275878985,
  },
  {
    displayImageUrl:
      "https://upload.wikimedia.org/wikipedia/en/f/fb/Moonage_Daydream_%28film%29.jpg",
    displayName: "Moonage Daydream",
    format: "Movie",
    genres: ["Documentary"],
    summary:
      "Moonage Daydream is a 2022 documentary film about English singer-songwriter David Bowie. Written, directed, produced and edited by Brett Morgen, the film uses previously unreleased footage from Bowie's personal archives, including live concert footage. It is the first film to be officially authorized by Bowie's estate, and takes its title from the 1972 Bowie song of the same name.",
    id: "b04615a1-2265-45bd-8f91-34588a46fb03",
    rating: 0.15470883757498055,
  },
  {
    displayImageUrl:
      "https://upload.wikimedia.org/wikipedia/en/6/6e/Godscountryposter.jpg",
    displayName: "God's Country",
    format: "Movie",
    genres: ["Thriller"],
    summary:
      "God's Country is a 2022 thriller film starring Thandiwe Newton. The film was directed by Julian Higgins.",
    id: "a3c934b6-4313-466c-916b-685865e0cc30",
    rating: 0.8597465608556261,
  },
  {
    displayImageUrl:
      "https://upload.wikimedia.org/wikipedia/en/5/55/GoodnightMommy2022poster.jpg",
    displayName: "Goodnight Mommy",
    format: "Movie",
    genres: ["Horror", "War"],
    summary:
      "Goodnight Mommy is a 2022 American psychological horror film directed by Matt Sobel and written by Kyle Warren, serving as a remake of the 2014 Austrian film of the same name. The film stars Naomi Watts, Cameron and Nicholas Crovetti, Crystal Lucas-Perry, Jeremy Bobb, and Peter Hermann. The film follows twin brothers who suspect their mother was switched with an impostor, following her recent surgery leaving her with bandages over her face.",
    id: "a3070b7f-dc6e-40cc-96f6-f2b4a7d390f1",
    rating: 0.616758155812984,
  },
  {
    displayImageUrl:
      "https://upload.wikimedia.org/wikipedia/en/9/92/RunningTheBases.jpeg",
    displayName: "Running the Bases",
    format: "Movie",
    genres: ["Sports"],
    summary:
      "Running the Bases is a 2022 American Christian sports film written and directed by Marty Roberts and Jimmy Womble. It stars Brett Varvel, Gigi Orsillo, Todd Terry, and Cameron Arnett, and follows a small-town baseball coach who becomes the head coach of a large high school program, but soon faces opposition to his coaching methods. It was released on September 16, 2022.",
    id: "53623e60-684c-4222-a676-6fb892573b8f",
    rating: 0.8303715686354207,
  },
  {
    displayImageUrl:
      "https://upload.wikimedia.org/wikipedia/en/7/78/Jeepers_Creepers_Reborn.jpg",
    displayName: "Jeepers Creepers: Reborn",
    format: "Movie",
    genres: ["Horror", "Supernatural"],
    summary:
      'Jeepers Creepers: Reborn is a 2022 supernatural horror film directed by Timo Vuorensola and written by Jake Seal and Sean-Michael Argo. The film is a reboot of Victor Salva\'s Jeepers Creepers trilogy intended to set up a new trilogy. Starring Sydney Craven and Imran Adams, with "special appearances" from Dee Wallace and Gary Graham, it was released worldwide by Screen Media Films on September 19, 2022.',
    id: "5cc51973-317b-4bba-800b-4a9136763dad",
    rating: 0.9270500709024256,
  },
  {
    displayImageUrl:
      "https://upload.wikimedia.org/wikipedia/en/4/4c/Don%27t_Worry_Darling_Poster_2.jpg",
    displayName: "Don't Worry Darling",
    format: "Movie",
    genres: ["Thriller"],
    summary:
      "Don't Worry Darling is a 2022 American psychological thriller film directed by Olivia Wilde from a screenplay by Katie Silberman, based on a spec script by Carey Van Dyke, Shane Van Dyke, and Silberman. The film stars Florence Pugh, Harry Styles, Wilde, Gemma Chan, KiKi Layne, Nick Kroll, and Chris Pine. The film follows a housewife living in an idyllic company town who begins to suspect a sinister secret being kept from its residents by the man who runs it.",
    id: "44fedca5-63e8-4ee8-b7c5-d110f55f3ee3",
    rating: 0.27688127715680544,
  },
  {
    displayImageUrl:
      "https://upload.wikimedia.org/wikipedia/en/6/68/Catherine_Called_Birdy_%28film%29.png",
    displayName: "Catherine Called Birdy",
    format: "Movie",
    genres: ["Comedy"],
    summary:
      "Catherine Called Birdy is a 2022 medieval comedy film written and directed by Lena Dunham, based on the 1994 novel of the same name by Karen Cushman. It stars Bella Ramsey as the title character, alongside Billie Piper, Andrew Scott, Lesley Sharp, Joe Alwyn, and Sophie Okonedo.",
    id: "632ac639-5407-4f13-9dc1-579d9cdd4e24",
    rating: 0.4484748661015898,
  },
  {
    displayName: "Section Eight",
    format: "Movie",
    genres: ["Action"],
    summary:
      "Section Eight is a 2022 American action film directed by Christian Sesma and starring Ryan Kwanten, Dolph Lundgren, Dermot Mulroney with Scott Adkins, Mickey Rourke, and Justin Furstenfeld.",
    id: "5f1e2e1a-4ee6-498a-8616-14b9d052f12f",
    rating: 0.2550763438379964,
  },
  {
    displayName: "Lou",
    format: "Movie",
    genres: ["Action", "Thriller"],
    summary:
      "Lou is a 2022 American action thriller film directed by Anna Foerster. The film stars Allison Janney, Jurnee Smollett, Logan Marshall-Green, Ridley Asha Bateman, and Matt Craven.",
    id: "3db1ec54-f6c6-4843-9f83-d32d15ccef49",
    rating: 0.6102023942907082,
  },
  {
    displayImageUrl:
      "https://upload.wikimedia.org/wikipedia/en/9/92/On_the_Come_Up_movie_poster.jpg",
    displayName: "On the Come Up",
    format: "Movie",
    genres: ["Drama", "Musical"],
    summary:
      "On the Come Up is a 2022 American musical drama film directed by Sanaa Lathan in her feature directorial debut. Based on the 2019 novel of the same name by Angie Thomas, it stars Jamila C. Gray, Da'Vine Joy Randolph, Mike Epps, Lil Yachty, Lathan, and Method Man.",
    id: "8d182820-2f4e-496b-9393-d4eb6e13364a",
    rating: 0.09768673986223053,
  },
  {
    displayImageUrl:
      "https://upload.wikimedia.org/wikipedia/en/8/86/A_Jazzman%27s_Blues.jpg",
    displayName: "A Jazzman's Blues",
    format: "Movie",
    genres: ["Drama"],
    summary:
      "A Jazzman's Blues is a 2022 American drama film written, produced and directed by Tyler Perry. The film stars Joshua Boone, Amirah Vann, Solea Pfeiffer, Austin Scott, Brent Antonello, and Ryan Eggold.",
    id: "367ba01e-e1ac-4cd7-8b81-d50fdb91add3",
    rating: 0.6392229975092079,
  },
  {
    displayImageUrl:
      "https://upload.wikimedia.org/wikipedia/en/e/e2/The_Munsters_%282022%29_Movie.png",
    displayName: "The Munsters",
    format: "Movie",
    genres: ["Comedy", "Horror"],
    summary:
      "The Munsters is a 2022 American horror comedy film produced, written, and directed by Rob Zombie and starring Sheri Moon Zombie, Jeff Daniel Phillips, Daniel Roebuck, Richard Brake, Jorge Garcia, Sylvester McCoy, Catherine Schell, and Cassandra Peterson. Based on the 1960s family sitcom of the same title, the story takes place prior to the events of the series, serving as an origin story for the characters.",
    id: "50ff77d4-1cf1-410b-9372-8c70cb6d034d",
    rating: 0.6767699829750922,
  },
  {
    displayImageUrl:
      "https://upload.wikimedia.org/wikipedia/en/7/7f/Smile_%282022_film%29.jpg",
    displayName: "Smile",
    format: "Movie",
    genres: ["Horror", "Short", "Supernatural"],
    summary:
      "Smile is a 2022 American psychological supernatural horror film written and directed by Parker Finn, based on his 2020 short film Laura Hasn't Slept. The film stars Sosie Bacon as a therapist named Rose Cotter, who, after witnessing the bizarre suicide of a patient, goes through increasingly disturbing and daunting experiences, leading her to believe what she is experiencing is supernatural. It also stars Jessie T. Usher, Kyle Gallner, Kal Penn, and Rob Morgan, as well as Caitlin Stasey playing the same character she played in the short film.",
    id: "e1997ec6-52ab-49e9-adfe-378e6d4c3b38",
    rating: 0.37730269806750893,
  },
  {
    displayImageUrl:
      "https://upload.wikimedia.org/wikipedia/en/f/fa/Bros_%28film%29.jpg",
    displayName: "Bros",
    format: "Movie",
    genres: ["Comedy", "Romance"],
    summary:
      "Bros is a 2022 American romantic comedy film starring Billy Eichner and Luke Macfarlane as two gay men in Manhattan who avoid commitment but are drawn to each other. The film is directed by Nicholas Stoller based on a screenplay he co-wrote with Eichner and is produced by Stoller, Judd Apatow, and Josh Church. Produced under Universal Pictures on a budget of $22 million, it is one of the first gay romantic comedies by a major studio and has an openly LGBT principal cast.",
    id: "07fafaf8-647d-4fb4-9761-9710b4738f48",
    rating: 0.9952212809886332,
  },
  {
    displayImageUrl:
      "https://upload.wikimedia.org/wikipedia/en/f/f4/Hocus_Pocus_2_Logo.jpg",
    displayName: "Hocus Pocus 2",
    format: "Movie",
    genres: ["Comedy", "Fantasy"],
    summary:
      "Hocus Pocus 2 is a 2022 American fantasy comedy film directed by Anne Fletcher, written by Jen D'Angelo and produced by Walt Disney Pictures. A sequel to the 1993 film Hocus Pocus, it stars Bette Midler, Sarah Jessica Parker, Kathy Najimy, and Doug Jones reprising their roles, with Sam Richardson, Whitney Peak, Belissa Escobedo, Tony Hale, and Hannah Waddingham joining the cast in new roles.",
    id: "cd5f571a-2be2-4f22-99d2-16e2e1d39854",
    rating: 0.030493330963712095,
  },
  {
    displayImageUrl:
      "https://upload.wikimedia.org/wikipedia/en/f/f8/Greatest_Beer_Run_Ever.jpg",
    displayName: "The Greatest Beer Run Ever",
    format: "Movie",
    genres: ["Comedy", "Drama", "War", "Biography"],
    summary:
      'The Greatest Beer Run Ever is a 2022 American biographical war comedy-drama film directed and co-written by Peter Farrelly, based on the book of the same name by John "Chickie" Donohue and Joanna Molloy. The film stars Zac Efron and Russell Crowe, and follows the true story of Donohue, who as a young veteran sneaks into the Vietnam War to deliver some beer to his friends, who are serving their duty.',
    id: "c81bc211-9592-48a1-b87c-c178077411b1",
    rating: 0.9372016298088253,
  },
  {
    displayImageUrl:
      "https://upload.wikimedia.org/wikipedia/en/1/1e/The_Good_House_%28film%29.jpg",
    displayName: "The Good House",
    format: "Movie",
    genres: ["Comedy", "Drama"],
    summary:
      "The Good House is a 2022 American comedy-drama film directed by Maya Forbes and Wally Wolodarsky, who wrote the screenplay with Thomas Bezucha. It is based on the novel of the same name by Ann Leary.",
    id: "f5dccdea-7420-44e5-83d5-9d9a1915b177",
    rating: 0.3994677729823064,
  },
  {
    displayImageUrl:
      "https://upload.wikimedia.org/wikipedia/en/9/91/Luckiest_Girl_Alive_%28film%29.jpg",
    displayName: "Luckiest Girl Alive",
    format: "Movie",
    genres: ["Mystery", "Thriller"],
    summary:
      "Luckiest Girl Alive is a 2022 mystery thriller film directed by Mike Barker from a screenplay by Jessica Knoll, based on her 2015 novel of the same name. The film stars Mila Kunis, Finn Wittrock, Scoot McNairy, Chiara Aurelia, Justine Lupe, Thomas Barbusca, Jennifer Beals, and Connie Britton.",
    id: "ca09f053-7a31-4c82-9f47-e0289e6af6fd",
    rating: 0.14613934456213418,
  },
  {
    displayImageUrl:
      "https://upload.wikimedia.org/wikipedia/en/2/2b/God%27s_Creatures.jpg",
    displayName: "God's Creatures",
    format: "Movie",
    genres: ["Drama"],
    summary:
      "God's Creatures is a 2022 psychological drama film directed by Saela Davis and Anna Rose Holmer with the screenplay written by Shane Crowley, based on a story he wrote with producer Fodhla Cronin O'Reilly. It stars Emily Watson, Paul Mescal, Aisling Franciosi, Declan Conlon, Toni O'Rourke, Marion O'Dwyer, Brendan McCormack, and Lalor Roddy. The film premiered at Directors' Fortnight of the Cannes Film Festival on 19 May 2022.",
    id: "6dc1f2e3-4822-4a1e-b8b5-3e87e04321ad",
    rating: 0.9528183568056698,
  },
  {
    displayImageUrl:
      "https://upload.wikimedia.org/wikipedia/en/4/44/Dead_for_a_Dollar.jpg",
    displayName: "Dead for a Dollar",
    format: "Movie",
    genres: ["Western"],
    summary:
      "Dead for a Dollar is a 2022 American Western film written and directed by Walter Hill. It stars Christoph Waltz, Willem Dafoe, and Rachel Brosnahan. The plot follows a bounty hunter (Waltz) on a search to find the missing wife (Brosnahan) of a businessman. Brandon Scott, Warren Burke, Benjamin Bratt, and Hamish Linklater also star. The film premiered at the 79th Venice International Film Festival on September 6, 2022. It was released in the United States on September 30, 2022, by Quiver Distribution.",
    id: "6b797db8-7a84-4349-af1e-7f411a11afd8",
    rating: 0.7385436797410248,
  },
  {
    displayImageUrl:
      "https://upload.wikimedia.org/wikipedia/en/0/08/My_Best_Friend%27s_Exorcism_film_poster.png",
    displayName: "My Best Friend's Exorcism",
    format: "Movie",
    genres: ["Comedy", "Horror", "Supernatural"],
    summary:
      "My Best Friend's Exorcism is a 2022 American supernatural comedy horror film directed by Damon Thomas from a screenplay by Jenna Lamia, based on the 2016 novel of the same name by Grady Hendrix. The film stars Elsie Fisher, Amiah Miller, Rachel Ogechi Kanu, and Cathy Ang. The film was released on Prime Video on September 30, 2022.",
    id: "1a6fba82-bac4-42f2-a71e-0edaa0a28e19",
    rating: 0.09356788967649488,
  },
  {
    displayName: "Hot Take: The Depp/Heard Trial",
    format: "Movie",
    genres: [],
    id: "712302a1-d7a1-4041-9ff1-33154bdcfbb5",
    rating: 0.5213097555424133,
  },
  {
    displayImageUrl:
      "https://upload.wikimedia.org/wikipedia/en/8/8f/Mr_harrigans_phone_%28film%29.jpg",
    displayName: "Mr. Harrigan's Phone",
    format: "Movie",
    genres: ["Drama", "Horror", "Teen"],
    summary:
      "Mr. Harrigan's Phone is a 2022 American teen horror drama film written and directed by John Lee Hancock. It is based on the novella of the same name by Stephen King from the collection If It Bleeds. The film stars Donald Sutherland, Jaeden Martell, Joe Tippett, and Kirby Howell-Baptiste.",
    id: "0c804f62-c4eb-4e36-8f3e-3e32194e3445",
    rating: 0.740264795257032,
  },
  {
    displayImageUrl:
      "https://upload.wikimedia.org/wikipedia/en/c/cd/Terrifier_2_Poster.jpg",
    displayName: "Terrifier 2",
    format: "Movie",
    genres: ["Slasher"],
    summary:
      "Terrifier 2 is a 2022 American slasher film written, directed, edited, and produced by Damien Leone. It is a sequel to Terrifier (2016), and is the third feature-length film to feature Art the Clown. It features the return of David Howard Thornton and Samantha Scaffidi, who respectively portrayed Art the Clown and Victoria Heyes in the first film, and stars Lauren LaVera, Elliott Fullam, Sarah Voigt, Kailey Hyman, and Casey Hartnett. The story follows Art's resurrection and pursuit of Sienna Shaw (LaVera) and her younger brother Jonathan (Fullam) on Halloween night — a year after the events of the first film.",
    id: "d9d6b32f-2038-49bb-bf5a-9087268d6303",
    rating: 0.14933527950730086,
  },
  {
    displayImageUrl:
      "https://upload.wikimedia.org/wikipedia/en/3/39/Lyle%2C_Lyle%2C_Crocodile_%28film%29.jpg",
    displayName: "Lyle, Lyle, Crocodile",
    format: "Movie",
    genres: ["Comedy", "Musical"],
    summary:
      "Lyle, Lyle, Crocodile is a 2022 American musical comedy film directed by Will Speck and Josh Gordon from a screenplay by William Davies. Produced by Columbia Pictures in association with Eagle Pictures and TSG Entertainment II, and distributed by Sony Pictures Releasing, it is an adaptation of the children's story of the same name and its predecessor The House on East 88th Street by Bernard Waber. The plot focuses on a family who moves to New York City, where their struggling son befriends a singing crocodile and tries to protect him from the rest of the world. The film stars Shawn Mendes as the voice of the titular character, alongside Javier Bardem, Constance Wu, Winslow Fegley, Scoot McNairy, Brett Gelman, and Ego Nwodim.",
    id: "0c35288c-603b-49d5-96d5-e30062293285",
    rating: 0.03970343692597966,
  },
  {
    displayImageUrl:
      "https://upload.wikimedia.org/wikipedia/en/3/3c/Amsterdam_%282022_film%29.jpg",
    displayName: "Amsterdam",
    format: "Movie",
    genres: ["Comedy", "Mystery", "Thriller", "Historical"],
    summary:
      "Amsterdam is a 2022 period mystery comedy thriller film directed, written, and co-produced by David O. Russell and starring Christian Bale, Margot Robbie, and John David Washington alongside an ensemble supporting cast including Chris Rock, Anya Taylor-Joy, Zoe Saldaña, Mike Myers, Michael Shannon, Timothy Olyphant, Andrea Riseborough, Taylor Swift, Matthias Schoenaerts, Alessandro Nivola, Rami Malek, and Robert De Niro. The story is based on the Business Plot, a 1933 political conspiracy in the United States, and follows three friends—a doctor, a nurse, and a lawyer—who reunite and seek to uncover the act following the mysterious murder of a retired U.S. general.",
    id: "e61576c6-389a-40f8-8378-2fa5f67f1501",
    rating: 0.25015800264847443,
  },
  {
    displayImageUrl:
      "https://upload.wikimedia.org/wikipedia/en/1/19/T%C3%A1r_poster.jpg",
    displayName: "Tár",
    format: "Movie",
    genres: ["Drama"],
    summary:
      "Tár is a 2022 psychological drama film written and directed by Todd Field. It stars Cate Blanchett as Lydia Tár, a renowned conductor who is accused of sexual misconduct. The supporting cast includes Nina Hoss, Noémie Merlant, Sophie Kauer, Julian Glover, Allan Corduner, and Mark Strong. Tár premiered at the 79th Venice International Film Festival in September 2022, where Blanchett won the Volpi Cup for Best Actress. The film had a limited theatrical release in the United States on October 7, 2022, before a wide release on October 28, by Focus Features.",
    id: "3e83393f-8090-48ce-a200-f1293e972453",
    rating: 0.3242828963053255,
  },
  {
    displayImageUrl:
      "https://upload.wikimedia.org/wikipedia/en/6/61/Hellraiser_2022_poster.png",
    displayName: "Hellraiser",
    format: "Movie",
    genres: ["Horror", "Supernatural"],
    summary:
      "Hellraiser is a 2022 supernatural horror film directed by David Bruckner, with a screenplay by Ben Collins and Luke Piotrowski, from a screen story they co-wrote with David S. Goyer. It is a reboot of the Hellraiser franchise, the eleventh installment overall, and a second adaptation of the 1986 novella The Hellbound Heart by Clive Barker, which was adapted into the 1987 film Hellraiser. The film stars Odessa A'zion, Jamie Clayton, Adam Faison, Drew Starkey, Brandon Flynn, Aoife Hinds, Jason Liles, Yinka Olorunnife, Selina Lo, Zachary Hing, Kit Clarke, Goran Višnjić, and Hiam Abbass. It follows a young woman recovering from addiction who ends up with a mechanical puzzle box that can summon the Cenobites, humanoid beings who thrive on pain and pleasure.",
    id: "49762956-e155-46d3-864c-6da5b5e3256f",
    rating: 0.37327853427502955,
  },
  {
    displayImageUrl:
      "https://upload.wikimedia.org/wikipedia/en/e/ed/Significant_Other_2022_poster.jpg",
    displayName: "Significant Other",
    format: "Movie",
    genres: ["Horror", "Science Fiction"],
    summary:
      "Significant Other is a 2022 American sci-fi horror film written and directed by Dan Berk and Robert Olsen. The film stars Maika Monroe and Jake Lacy as a couple dealing with relationship issues while backpacking in the woods in the Pacific Northwest, whose activities are interrupted by a meteor strike bringing an alien lifeform into the picture.",
    id: "304e4126-2e06-42f6-a9c1-a9d96f436e7b",
    rating: 0.162250774451143,
  },
  {
    displayName: "The Redeem Team",
    format: "Movie",
    genres: [],
    id: "a4e202a6-2347-4b95-a1ce-be73451c0f35",
    rating: 0.24909773923456613,
  },
  {
    displayImageUrl:
      "https://upload.wikimedia.org/wikipedia/en/d/d5/Halloween_ends_poster.jpg",
    displayName: "Halloween Ends",
    format: "Movie",
    genres: ["Slasher"],
    summary:
      "Halloween Ends is a 2022 American slasher film directed by David Gordon Green and co-written by Green, Danny McBride, Paul Brad Logan and Chris Bernier. It is the sequel to Halloween Kills (2021), the thirteenth installment in the Halloween franchise, and the final film in the trilogy of sequels that started with the 2018 film, which directly follows the 1978 film. The film stars Jamie Lee Curtis, Andi Matichak, Rohan Campbell, Will Patton, Kyle Richards, and James Jude Courtney. The plot follows Corey Cunningham, a young man who falls in love with Laurie Strode's granddaughter while a series of events, including crossing paths with Michael Myers, render him a murderous outcast.",
    id: "19c772c9-569b-4790-8454-1dc2885a1eb7",
    rating: 0.9270116068022389,
  },
  {
    displayImageUrl:
      "https://upload.wikimedia.org/wikipedia/en/5/5d/Till_%28film%29.jpg",
    displayName: "Till",
    format: "Movie",
    genres: ["Drama", "Biography"],
    summary:
      "Till is a 2022 biographical drama film directed by Chinonye Chukwu and written by Michael Reilly, Keith Beauchamp, and Chukwu, and produced by Beauchamp, Reilly, and Whoopi Goldberg. It is based on the true story of Mamie Till-Bradley, an educator and activist who pursued justice after the murder of her 14-year-old son Emmett in August 1955. The film stars Danielle Deadwyler as Mamie and Jalyn Hall as Emmett. Kevin Carroll, Frankie Faison, Haley Bennett, Jayme Lawson, Tosin Cole, Sean Patrick Thomas, John Douglas Thompson, Roger Guenveur Smith, and Goldberg also appear in supporting roles.",
    id: "de3e5b10-6318-4483-90b4-c7e0a46a0378",
    rating: 0.9850154140693681,
  },
  {
    displayImageUrl:
      "https://upload.wikimedia.org/wikipedia/en/a/ab/Rosaline_film_poster.png",
    displayName: "Rosaline",
    format: "Movie",
    genres: ["Comedy", "Romance"],
    summary:
      "Rosaline is a 2022 American romantic comedy film directed by Karen Maine, written by Scott Neustadter and Michael H. Weber, and starring Kaitlyn Dever, Isabela Merced, Kyle Allen, Sean Teale, Christopher McDonald, Minnie Driver, and Bradley Whitford. It is based on the 2012 young adult novel When You Were Mine by Rebecca Serle, which in turn was inspired by William Shakespeare's Romeo and Juliet.",
    id: "361c9261-454f-42ac-982b-4e9c496120f5",
    rating: 0.23134579241772335,
  },
  {
    displayImageUrl:
      "https://upload.wikimedia.org/wikipedia/en/c/c3/All_quiet_on_the_western_front_%282022_film%29.jpg",
    displayName: "All Quiet on the Western Front",
    format: "Movie",
    genres: ["War"],
    summary:
      "All Quiet on the Western Front is a 2022 German epic anti-war film based on the 1929 novel of the same name by Erich Maria Remarque. It is the third film adaptation of the book, after the 1930 and 1979 versions. Directed by Edward Berger, it stars Felix Kammerer, Albrecht Schuch, Daniel Brühl, Sebastian Hülk, Aaron Hilmer, Edin Hasanovic, and Devid Striesow.",
    id: "94a8acdb-254d-4d47-9a82-9f5e37c0ecd1",
    rating: 0.8423523980682834,
  },
  {
    displayImageUrl:
      "https://upload.wikimedia.org/wikipedia/en/9/90/Raymond_and_Ray_poster.jpg",
    displayName: "Raymond & Ray",
    format: "Movie",
    genres: ["Comedy", "Drama"],
    summary:
      "Raymond & Ray is a 2022 comedy-drama film written and directed by Rodrigo García. The film stars Ewan McGregor, Ethan Hawke, Maribel Verdú, and Sophie Okonedo.",
    id: "caeac514-5d48-4bfa-b030-5f36a6676f84",
    rating: 0.8388409885286341,
  },
  {
    displayImageUrl:
      "https://upload.wikimedia.org/wikipedia/en/8/8f/Stars_at_Noon.jpeg",
    displayName: "Stars at Noon",
    format: "Movie",
    genres: ["Thriller", "Romance"],
    summary:
      "Stars at Noon is a 2022 English-language French romantic thriller film directed by Claire Denis, based on the 1986 novel The Stars at Noon by Denis Johnson, starring Margaret Qualley, Joe Alwyn, Benny Safdie, Danny Ramirez, and John C. Reilly. The film was selected to compete for the Palme d'Or at the 2022 Cannes Film Festival, where it won the Grand Prix.",
    id: "3503b129-ab6b-47f8-b292-e15a360f6617",
    rating: 0.659911592472495,
  },
  {
    displayImageUrl:
      "https://upload.wikimedia.org/wikipedia/en/7/77/The_Curse_of_Bridge_Hollow.jpeg",
    displayName: "The Curse of Bridge Hollow",
    format: "Movie",
    genres: ["Comedy", "Horror"],
    summary:
      "The Curse of Bridge Hollow is a 2022 American comedy horror film directed by Jeff Wadlow from a screenplay by Todd Berger and Robert Rugan. Starring Marlon Wayans, Priah Ferguson, Kelly Rowland, John Michael Higgins, Lauren Lapkus, Rob Riggle, and Nia Vardalos, the film was released by Netflix on October 14, 2022.",
    id: "a9c76d14-e2e4-4573-8cef-3d89d8896d22",
    rating: 0.3173911790673605,
  },
  {
    displayImageUrl:
      "https://upload.wikimedia.org/wikipedia/en/6/6b/Bitch_ass.jpeg",
    displayName: "Bitch Ass",
    format: "Movie",
    genres: ["Crime", "Horror"],
    summary:
      "Bitch Ass is a 2022 American crime horror film directed by Bill Posley and starring Tony Todd. It is Posley’s feature directorial debut.",
    id: "a0a666f6-3176-41f1-9f51-6cbb615261b4",
    rating: 0.9786680951492157,
  },
  {
    displayImageUrl:
      "https://upload.wikimedia.org/wikipedia/en/c/c5/The_School_for_Good_and_Evil_movie_poster.jpeg",
    displayName: "The School for Good and Evil",
    format: "Movie",
    genres: ["Fantasy"],
    summary:
      "The School for Good and Evil is a 2022 American fantasy film directed by Paul Feig, who co-wrote the screenplay with David Magee, based on the 2013 novel of the same name by Soman Chainani. The film stars an ensemble cast led by Sophia Anne Caruso as Sophie and Sofia Wylie as Agatha, two best friends who are sent to the Schools for Good and Evil. After their fortunes are seemingly reversed, their friendship is put to the test.",
    id: "81569a98-d854-4289-9f0a-966d2944345c",
    rating: 0.09706958526051945,
  },
  {
    displayImageUrl:
      "https://upload.wikimedia.org/wikipedia/en/0/03/Good_nurse.jpg",
    displayName: "The Good Nurse",
    format: "Movie",
    genres: ["Crime", "Drama", "Biography"],
    summary:
      "The Good Nurse is a 2022 American biographical crime drama film, starring Jessica Chastain and Eddie Redmayne, about Amy Loughren, a night nurse, who suspects that her co-worker Charles Cullen is a serial killer. The film is based on the 2013 true-crime book of the same name by Charles Graeber. It is directed by Tobias Lindholm and written by Krysty Wilson-Cairns. The film also stars Nnamdi Asomugha, Kim Dickens, and Noah Emmerich.",
    id: "21702699-6a49-4788-8939-2f13e74245e1",
    rating: 0.306517800388868,
  },
  {
    displayImageUrl:
      "https://upload.wikimedia.org/wikipedia/en/f/f4/VHS99-movieposter.jpg",
    displayName: "V/H/S/99",
    format: "Movie",
    genres: ["Found Footage", "Horror"],
    summary:
      "V/H/S/99 is a 2022 American found footage horror anthology film, and the fifth installment in the V/H/S franchise. The film features segments from Johannes Roberts, Vanessa & Joseph Winter, Maggie Levin, Tyler MacIntyre and Flying Lotus. It premiered September 16, 2022 in the Midnight Madness category of the 2022 Toronto International Film Festival. It was released as a Shudder Original Film on October 20, 2022. Upon its release, the film broke streaming records on Shudder and became the platform's most-viewed premiere, a title which was held by the earlier entry, V/H/S/94.",
    id: "3628fcc2-d7b3-4f39-a947-a07107ecb302",
    rating: 0.4855526885430319,
  },
  {
    displayImageUrl:
      "https://upload.wikimedia.org/wikipedia/en/a/a9/Black_Adam_%28film%29_poster.jpg",
    displayName: "Black Adam",
    format: "Movie",
    genres: ["Superhero"],
    summary:
      "Black Adam is a 2022 American superhero film based on the DC character of the same name. Produced by New Line Cinema, DC Films, Seven Bucks Productions, and FlynnPictureCo. and distributed by Warner Bros. Pictures, it is a spin-off to Shazam! (2019) and the 11th film in the DC Extended Universe (DCEU). The film was directed by Jaume Collet-Serra from a screenplay by Adam Sztykiel, Rory Haines, and Sohrab Noshirvani. It stars Dwayne Johnson as Teth-Adam / Black Adam, an ancient superhuman who is released from his magic imprisonment by a group of archeologists to free the nation of Kahndaq from the crime syndicate Intergang, whose local leader plans to obtain an ancient relic called the Crown of Sabbac to take control of the nation. Aldis Hodge, Noah Centineo, Sarah Shahi, Marwan Kenzari, Quintessa Swindell, and Pierce Brosnan appear in supporting roles.",
    id: "d1103a52-c3d9-459b-b0c9-c6b580cf0c6f",
    rating: 0.19952631051805292,
  },
  {
    displayImageUrl:
      "https://upload.wikimedia.org/wikipedia/en/e/e8/Ticket_to_Paradise_poster.jpg",
    displayName: "Ticket to Paradise",
    format: "Movie",
    genres: ["Comedy", "Romance"],
    summary:
      "Ticket to Paradise is a 2022 romantic comedy film starring George Clooney and Julia Roberts as a divorced couple who team up to sabotage the impending wedding of their daughter in Bali. The film is directed by Ol Parker and written by Parker and Daniel Pipski, while Kaitlyn Dever, Billie Lourd, Maxime Bouttier, and Lucas Bravo also star.",
    id: "3f9bfc81-de56-44a9-ad60-96d98fe9a04d",
    rating: 0.3598183483194348,
  },
  {
    displayImageUrl:
      "https://upload.wikimedia.org/wikipedia/en/2/24/Wendell_%26_Wild_poster.jpg",
    displayName: "Wendell & Wild",
    format: "Movie",
    genres: ["Animated", "Comedy", "Horror", "Erotic"],
    summary:
      "Wendell & Wild is a 2022 American stop motion adult animated horror comedy film directed by Henry Selick from a screenplay written by Selick and Jordan Peele, based on Selick's and Clay McLeod Chapman's unpublished book of the same name. It stars Keegan-Michael Key and Jordan Peele as the titular characters with Angela Bassett, Lyric Ross, James Hong, and Ving Rhames in supporting roles. This was Selick's first feature film since Coraline (2009).",
    id: "96fe7ea7-4a24-4c3b-a845-30e133d5abec",
    rating: 0.32810774304345913,
  },
  {
    displayImageUrl:
      "https://upload.wikimedia.org/wikipedia/en/6/6e/The_Banshees_of_Inisherin.jpg",
    displayName: "The Banshees of Inisherin",
    format: "Movie",
    genres: ["Comedy"],
    summary:
      "The Banshees of Inisherin is a 2022 black tragicomedy film directed, written, and produced by Martin McDonagh. Set on a remote, fictional island off the west coast of Ireland, the film stars Colin Farrell and Brendan Gleeson as two lifelong friends who find themselves at an impasse when one abruptly ends their relationship, with alarming consequences for both of them. Kerry Condon and Barry Keoghan also star. It reunites Farrell and Gleeson, who previously worked together on McDonagh's directorial debut, In Bruges (2008).",
    id: "abfad578-2971-474c-8145-5720d48eb0bf",
    rating: 0.4561769343778599,
  },
  {
    displayImageUrl:
      "https://upload.wikimedia.org/wikipedia/en/3/34/My_Policeman_%28film%29.jpg",
    displayName: "My Policeman",
    format: "Movie",
    genres: ["Drama", "Romance"],
    summary:
      "My Policeman is a 2022 American romantic drama film based on the 2012 novel of the same name by Bethan Roberts and directed by Michael Grandage. The film stars Harry Styles, Emma Corrin, Gina McKee, Linus Roache, David Dawson, and Rupert Everett.",
    id: "71a98226-6d55-4df8-a0fd-261cef87a9b2",
    rating: 0.9388975908174801,
  },
  {
    displayImageUrl:
      "https://upload.wikimedia.org/wikipedia/en/1/11/Aftersun.jpg",
    displayName: "Aftersun",
    format: "Movie",
    genres: ["Drama"],
    summary:
      "Aftersun is a 2022 coming-of-age drama film written and directed by Charlotte Wells, starring Paul Mescal, Frankie Corio and Celia Rowlson-Hall. Set in the late 1990s, the film follows Sophie, an 11-year-old girl, on holiday with her father at a Turkish resort on the eve of his 31st birthday.",
    id: "11d43860-25f6-4e82-a972-d6e169485665",
    rating: 0.20023938632439986,
  },
  {
    displayImageUrl:
      "https://upload.wikimedia.org/wikipedia/en/7/75/Detective_Knight_Rogue_poster.png",
    displayName: "Detective Knight: Rogue",
    format: "Movie",
    genres: ["Action", "War"],
    summary:
      "Detective Knight: Rogue is a 2022 American action film directed by Edward John Drake, from a screenplay by Drake and Corey Large, and produced by Large, Randall Emmett, and George Furla. Serving as the first installment of the Detective Knight trilogy, it stars Bruce Willis, Lochlyn Munro, and Jimmy Jean-Louis.",
    id: "740d74a5-0ae9-43cf-a67e-04c65f9b970c",
    rating: 0.015029281730454258,
  },
  {
    displayImageUrl:
      "https://upload.wikimedia.org/wikipedia/en/1/1a/Return_of_tanya_tucker_featuring_brandi_carlile.jpg",
    displayName: "The Return of Tanya Tucker: Featuring Brandi Carlile",
    format: "Movie",
    genres: ["Documentary"],
    summary:
      "The Return of Tanya Tucker: Featuring Brandi Carlile is an 2022 American documentary film, directed and produced by Kathlyn Horan. It follows Tanya Tucker returning to the studio to record her first album in 10 years, While I'm Livin', collaborating with Brandi Carlile.",
    id: "6442b164-1dc2-4586-8b7f-61165d6b271c",
    rating: 0.008963370145258054,
  },
  {
    displayImageUrl:
      "https://upload.wikimedia.org/wikipedia/en/7/7c/Armageddon_Time_Poster.jpeg",
    displayName: "Armageddon Time",
    format: "Movie",
    genres: ["Drama"],
    summary:
      "Armageddon Time is a 2022 American coming-of-age drama film written, directed, and produced by James Gray. The film stars Anne Hathaway, Jeremy Strong, Banks Repeta, Jaylin Webb, and Anthony Hopkins. Inspired by Gray's childhood experiences, the story follows a young Jewish-American boy who befriends an African-American classmate and begins to struggle with expectations from his family and growing up in a world of privilege, inequality and prejudice. It was shot in New Jersey and in Fresh Meadows, Queens, New York where the director James Gray grew up with cinematographer Darius Khondji.",
    id: "c49a549f-ecb9-4afa-a8ca-1b4066206017",
    rating: 0.9920462353132167,
  },
  {
    displayImageUrl:
      "https://upload.wikimedia.org/wikipedia/en/d/df/Call_Jane_poster.jpg",
    displayName: "Call Jane",
    format: "Movie",
    genres: ["Drama"],
    summary:
      "Call Jane is a 2022 American drama film starring Elizabeth Banks as a suburban housewife in the 1960s who deals with a life-threatening pregnancy. The film also stars Sigourney Weaver, Chris Messina, Kate Mara, Wunmi Mosaku, Cory Michael Smith, Grace Edwards, and John Magaro. It is directed by Phyllis Nagy. The screenplay was written by Hayley Schore and Roshan Sethi.",
    id: "09ed10df-6326-4294-86c4-1ca784dcba15",
    rating: 0.5622578190187724,
  },
  {
    displayImageUrl:
      "https://upload.wikimedia.org/wikipedia/en/e/e2/Causeway_%28film%29.jpg",
    displayName: "Causeway",
    format: "Movie",
    genres: ["Drama"],
    summary:
      "Causeway is a 2022 American drama film directed by Lila Neugebauer in her feature directorial debut and written by Ottessa Moshfegh, Luke Goebel, and Elizabeth Sanders. The film stars Jennifer Lawrence, Brian Tyree Henry, Linda Emond, Jayne Houdyshell, Stephen McKinley Henderson, and Russell Harvard. It follows a soldier struggling to adjust to her life after returning home to New Orleans.",
    id: "f8cc64cf-6e65-4e8d-8f86-0f0302a46197",
    rating: 0.3571551038915033,
  },
  {
    displayImageUrl:
      "https://upload.wikimedia.org/wikipedia/en/6/68/The_Devil%27s_Light_Poster.jpeg",
    displayName: "Prey for the Devil",
    format: "Movie",
    genres: ["Horror", "Supernatural"],
    summary:
      "Prey for the Devil is a 2022 American supernatural horror film directed by Daniel Stamm and stars Jacqueline Byers, Colin Salmon, Christian Navarro, Lisa Palfrey, Nicholas Ralph, Virginia Madsen, and Ben Cross.",
    id: "75c59d01-8a35-4dd7-92eb-197acc25c610",
    rating: 0.8808905133569489,
  },
  {
    displayImageUrl:
      "https://upload.wikimedia.org/wikipedia/en/a/a7/Run_Sweetheart_Run.jpg",
    displayName: "Run Sweetheart Run",
    format: "Movie",
    genres: ["Horror", "Supernatural"],
    summary:
      "Run Sweetheart Run is a 2020 American supernatural horror film directed by Shana Feste from a screenplay by Feste, Keith Josef Adkins and Kellee Terrell. The film stars Ella Balinska, Pilou Asbæk, Dayo Okeniyi, Betsy Brandt, Ava Grey, Lamar Johnson, Jess Gabor, Clark Gregg, and Shohreh Aghdashloo.",
    id: "12e9272b-d1df-44a0-b354-e87f46fa98fc",
    rating: 0.9382527153796689,
  },
  {
    displayImageUrl:
      "https://upload.wikimedia.org/wikipedia/en/2/21/The_Wonder_%28film%29.jpg",
    displayName: "The Wonder",
    format: "Movie",
    genres: ["Drama", "Historical"],
    summary:
      "The Wonder is a 2022 period psychological drama film directed by Sebastián Lelio. Emma Donoghue, Lelio, and Alice Birch wrote the screenplay based on the 2016 novel of the same name by Donoghue. Set shortly after the Great Famine, it follows an English nurse sent to a rural Irish village to observe a young 'fasting girl', who is seemingly able to miraculously survive without eating. Florence Pugh leads an ensemble cast that includes Tom Burke, Niamh Algar, Elaine Cassidy, Dermot Crowley, Brían F. O'Byrne, David Wilmot, Ruth Bradley, Caolán Byrne, Josie Walker, Ciarán Hinds, Toby Jones, and Kíla Lord Cassidy.",
    id: "de0ac59c-9bce-48ae-88de-235a93ec86f7",
    rating: 0.05471162072705571,
  },
  {
    displayImageUrl:
      "https://upload.wikimedia.org/wikipedia/en/a/a2/The_Independent_%282022_film%29_poster.png",
    displayName: "The Independent",
    format: "Movie",
    genres: ["Political"],
    summary:
      "The Independent is a 2022 American political film directed by Amy Rice and written by Evan Parter. It stars Jodie Turner-Smith, Brian Cox, Luke Kirby, Stephen Lang, Ann Dowd, and John Cena. The plot centers around a reporter who uncovers a conspiracy that could impact the results of an upcoming presidential election. The film was released on streaming by Peacock on November 2, 2022.",
    id: "eade7355-6ddb-4b59-9652-2ec11b20084c",
    rating: 0.4409141014020921,
  },
  {
    displayImageUrl:
      "https://upload.wikimedia.org/wikipedia/en/4/4b/Enola_Holmes_2_poster.png",
    displayName: "Enola Holmes 2",
    format: "Movie",
    genres: ["Mystery"],
    summary:
      "Enola Holmes 2 is a 2022 mystery film and the sequel to the 2020 film Enola Holmes, both of which star Millie Bobby Brown as the title character, the teenage sister of the already-famous Victorian-era detective Sherlock Holmes. The film is directed by Harry Bradbeer from a screenplay by Jack Thorne that adapts the book series The Enola Holmes Mysteries by Nancy Springer. Unlike its predecessor, the film does not adapt one of Springer's novels and instead takes real-life inspiration from the 1888 matchgirls' strike. In addition to Brown, Henry Cavill, Louis Partridge, Susie Wokoma, Adeel Akhtar, and Helena Bonham Carter reprise their supporting roles, while David Thewlis and Sharon Duncan-Brewster join the cast.",
    id: "cb013812-5e33-4fd9-bbe3-c8c4d184907a",
    rating: 0.48180365820264215,
  },
  {
    displayImageUrl:
      "https://upload.wikimedia.org/wikipedia/en/7/77/My_Father%27s_Dragon_poster.jpg",
    displayName: "My Father's Dragon",
    format: "Movie",
    genres: ["Adventure", "Animated", "Comedy", "Fantasy"],
    summary:
      "My Father's Dragon is a 2022 2D-animated fantasy adventure comedy film directed by Nora Twomey with a screenplay by Meg LeFauve who co-wrote the story with John Morgan. It is based on the 1948 children's novel of the same name by Ruth Stiles Gannett. The film is also dedicated to Morgan who had since died. It stars the voices of Jacob Tremblay, Gaten Matarazzo, Golshifteh Farahani, Dianne Wiest, Rita Moreno, Chris O'Dowd, Judy Greer, Alan Cumming, Yara Shahidi, Jackie Earle Haley, Whoopi Goldberg, and Ian McShane.",
    id: "24f51f3b-835e-47d8-aa4a-c07f9d227b52",
    rating: 0.15737451787837053,
  },
  {
    displayImageUrl:
      "https://upload.wikimedia.org/wikipedia/en/c/cc/Weird_The_Al_Yankovic_Story.jpg",
    displayName: "Weird: The Al Yankovic Story",
    format: "Movie",
    genres: ["Biography", "Satire"],
    summary:
      "Weird: The Al Yankovic Story is a 2022 American biographical parody film directed by Eric Appel, who co-wrote the screenplay with Al Yankovic. The film is a satire of biopics and is loosely based on Yankovic's life and career as an accordionist and parody songwriter. It stars Daniel Radcliffe as Yankovic, along with Evan Rachel Wood, Rainn Wilson, Toby Huss, Arturo Castro, and Julianne Nicholson in supporting roles.",
    id: "619f7c84-0c06-4a45-9af0-ccddee2d2975",
    rating: 0.5486030426979513,
  },
  {
    displayImageUrl:
      "https://upload.wikimedia.org/wikipedia/en/9/99/The_Estate_2022_poster.jpg",
    displayName: "The Estate",
    format: "Movie",
    genres: ["Comedy"],
    summary:
      "The Estate is a 2022 black comedy written and directed by Dean Craig. It stars Toni Collette and Anna Faris as sisters who try to get back in the good graces of their estranged aunt before she passes to inherit some of her fortune. The film was released on November 4, 2022, by Signature Entertainment.",
    id: "ae3b85dd-6eb1-4322-ae63-9af58da51234",
    rating: 0.029169397107541073,
  },
  {
    displayName: "The Minute You Wake Up Dead",
    format: "Movie",
    genres: ["Noir", "Thriller"],
    summary:
      "The Minute You Wake Up Dead is a 2022 American noir thriller film directed by Michael Mailer and starring Cole Hauser, Morgan Freeman and Jaimie Alexander.",
    id: "c7183639-3664-4cb7-9b56-2d3c99e006ae",
    rating: 0.2802061795906132,
  },
  {
    displayImageUrl:
      "https://upload.wikimedia.org/wikipedia/en/a/af/On_the_Line_poster.jpg",
    displayName: "On the Line",
    format: "Movie",
    genres: ["Thriller"],
    summary:
      "On the Line is a 2022 thriller film written, produced, and directed by Romuald Boulanger and starring Mel Gibson.",
    id: "46999f47-8fa8-41d1-8249-fac2f879399c",
    rating: 0.3622470034464027,
  },
  {
    displayImageUrl:
      "https://upload.wikimedia.org/wikipedia/en/d/db/Dear_Zoe_2022_film_poster.png",
    displayName: "Dear Zoe",
    format: "Movie",
    genres: ["Drama"],
    summary:
      "Dear Zoe is a 2022 American drama film directed by Gren Wells from a screenplay by Marc Lhormer and Melissa Martin. It is an adaptation of the 2005 novel of the same name by Philip Beard. The film stars Sadie Sink, Theo Rossi, Kweku Collins, Jessica Capshaw, Justin Bartha, and Vivien Lyra Blair.",
    id: "83c3c26d-22d3-44f6-8c74-a3a7590a621e",
    rating: 0.09016097154273095,
  },
  {
    displayImageUrl:
      "https://upload.wikimedia.org/wikipedia/en/2/23/Something_in_the_Dirt.jpg",
    displayName: "Something in the Dirt",
    format: "Movie",
    genres: ["Comedy", "Horror", "Science Fiction"],
    summary:
      "Something in the Dirt is a 2022 American science fiction comedy horror film written by Justin Benson and directed by and starring Benson and Aaron Moorhead. It is the fifth feature film by the directing duo.",
    id: "7a3be6ba-e709-4947-b66e-85a342f36f48",
    rating: 0.3800001344341668,
  },
  {
    displayImageUrl:
      "https://upload.wikimedia.org/wikipedia/en/d/df/Good_Night_Oppy.jpg",
    displayName: "Good Night Oppy",
    format: "Movie",
    genres: ["Documentary"],
    summary:
      "Good Night Oppy is a 2022 American documentary film directed by Ryan White and narrated by Angela Bassett. It had its world premiere at the 2022 Telluride Film Festival on September 3, 2022. It was released in a limited release on November 4, 2022, by Amazon Studios, prior to streaming on Prime Video on November 23, 2022.",
    id: "12d0010b-4901-428e-a4bc-2ca3a964c393",
    rating: 0.5345749848250314,
  },
  {
    displayImageUrl:
      "https://upload.wikimedia.org/wikipedia/en/4/4a/Pinocchio_%282022_animated_film%29.jpg",
    displayName: "Guillermo del Toro's Pinocchio",
    format: "Movie",
    genres: ["Fantasy", "Musical", "Animated"],
    summary:
      "Guillermo del Toro's Pinocchio is a 2022 musical dark fantasy film made through stop-motion animation directed by Guillermo del Toro and Mark Gustafson, with a screenplay by del Toro and Patrick McHale. Matthew Robbins and del Toro's modified Pinocchio story, drawing from the 1883 Italian novel The Adventures of Pinocchio by Carlo Collodi, was strongly influenced by Gris Grimly's illustrations for a 2002 edition of the book. The film reimagines the adventures of Pinocchio, a wooden puppet who comes to life as the son of his carver Geppetto. It is \"a story of love and disobedience as Pinocchio struggles to live up to his father's expectations, learning the true meaning of life\". Set in Fascist Italy during the interwar period and World War II, the film stars the voice of Gregory Mann as Pinocchio and David Bradley as Geppetto, alongside Ewan McGregor, Burn Gorman, Ron Perlman, John Turturro, Finn Wolfhard, Cate Blanchett, Tim Blake Nelson, Christoph Waltz, and Tilda Swinton.",
    id: "c6c9ee8d-f54c-4b2b-8c58-9c569bfd5354",
    rating: 0.10899447764891068,
  },
  {
    displayImageUrl:
      "https://upload.wikimedia.org/wikipedia/en/3/35/Falling_for_Christmas_poster.png",
    displayName: "Falling for Christmas",
    format: "Movie",
    genres: ["Comedy", "Romance"],
    summary:
      "Falling for Christmas is a 2022 American Christmas romantic comedy film starring Lindsay Lohan as a spoiled heiress who loses her memory in a skiing accident and lands in the care of a lodge owner widower at Christmastime. The film is directed by Janeen Damian, in her directorial debut, from a screenplay by Jeff Bonnett and Ron Oliver. Chord Overstreet, George Young, Jack Wagner and Olivia Perez also appear in supporting roles.",
    id: "e250f8c6-d2df-4f91-9234-1fb604ecd145",
    rating: 0.705404896135944,
  },
  {
    displayImageUrl:
      "https://upload.wikimedia.org/wikipedia/en/3/3b/Black_Panther_Wakanda_Forever_poster.jpg",
    displayName: "Black Panther: Wakanda Forever",
    format: "Movie",
    genres: ["Superhero"],
    summary:
      "Black Panther: Wakanda Forever is a 2022 American superhero film based on Marvel Comics featuring the character Shuri / Black Panther. Produced by Marvel Studios and distributed by Walt Disney Studios Motion Pictures, it is the sequel to Black Panther (2018) and the 30th film in the Marvel Cinematic Universe (MCU). Directed by Ryan Coogler, who co-wrote the screenplay with Joe Robert Cole, the film stars Letitia Wright as Shuri / Black Panther, alongside Lupita Nyong'o, Danai Gurira, Winston Duke, Florence Kasumba, Dominique Thorne, Michaela Coel, Mabel Cadena, Tenoch Huerta Mejía, Martin Freeman, Julia Louis-Dreyfus, and Angela Bassett. In the film, the leaders of Wakanda fight to protect their nation in the wake of King T'Challa's death.",
    id: "6c03cb68-502b-47e0-b07a-8eada4fa5982",
    rating: 0.3143496508910584,
  },
  {
    displayImageUrl:
      "https://upload.wikimedia.org/wikipedia/en/b/ba/Fabelmansposter.jpeg",
    displayName: "The Fabelmans",
    format: "Movie",
    genres: ["Drama"],
    summary:
      "The Fabelmans is a 2022 American coming-of-age drama film directed by Steven Spielberg, who co-wrote and produced it with Tony Kushner. The film is a semi-autobiographical story loosely based on Spielberg's adolescence and first years as a filmmaker. It's told through an original story of the fictional Sammy Fabelman, a young aspiring filmmaker who explores how the power of films can help him see the truth about his dysfunctional family and those around him. It stars Gabriel LaBelle as Sammy, alongside Michelle Williams, Paul Dano, Seth Rogen, and Judd Hirsch in supporting roles. The film is dedicated to the memories of Spielberg's real-life parents, Leah Adler and Arnold Spielberg, who died in 2017 and 2020, respectively.",
    id: "0584ff28-30ec-48be-b49c-4d21b454f498",
    rating: 0.11287617312584164,
  },
  {
    displayImageUrl:
      "https://upload.wikimedia.org/wikipedia/en/9/9a/Spirited_poster.png",
    displayName: "Spirited",
    format: "Movie",
    genres: ["Comedy", "Musical"],
    summary:
      'Spirited is a 2022 American Christmas musical comedy film directed by Sean Anders, and written and produced by Anders and John Morris. It is a modern retelling of Charles Dickens\'s 1843 novella A Christmas Carol and a satire of the various adaptations since. The film stars Will Ferrell, Ryan Reynolds, Octavia Spencer, Sunita Mani, Patrick Page, Marlow Barkley, and Tracy Morgan. In the film, The Ghost of Christmas Present is nearing retirement, which would mean a return to Earth. He sets his sights on an "unredeemable" man named Clint Briggs, who ends up helping the Ghost come to terms with his own past.',
    id: "8af2f85b-8374-4c78-b41e-4c08188fe3ac",
    rating: 0.2535402832807445,
  },
  {
    displayName: "Is That Black Enough for You?!?",
    format: "Movie",
    genres: ["Documentary"],
    summary:
      "Is That Black Enough for You?!? is a 2022 documentary film and film essay written and directed by Elvis Mitchell. It examines the history, craft and legacy of African-American cinema—with a focus on the films released in the 1970s—and makes use of film excerpts, personal history, and recent interviews with artists such as Margaret Avery, Harry Belafonte, Charles Burnett, Laurence Fishburne, Whoopi Goldberg, Samuel L. Jackson, Suzanne de Passe, Glynn Turman, Billy Dee Williams, and Zendaya.",
    id: "06e94e60-8566-4991-ba02-0612d84b31bf",
    rating: 0.06829241545123477,
  },
  {
    displayImageUrl:
      "https://upload.wikimedia.org/wikipedia/en/6/64/Paradise_City_poster.png",
    displayName: "Paradise City",
    format: "Movie",
    genres: ["Action"],
    summary:
      "Paradise City is a 2022 American action film directed by Chuck Russell and written by Russell, Corey Large, and Edward John Drake. It stars Bruce Willis and John Travolta.",
    id: "2410de37-c4ee-4c24-a912-2ef92f1a2ef9",
    rating: 0.8212730305627025,
  },
  {
    displayImageUrl:
      "https://upload.wikimedia.org/wikipedia/en/9/9a/Poker_Face_poster.jpg",
    displayName: "Poker Face",
    format: "Movie",
    genres: ["Thriller"],
    summary:
      "Poker Face is a 2022 Australian-American thriller film written by, directed by and starring Russell Crowe. It co-stars Liam Hemsworth and RZA. The film had a limited theatrical release on November 16, 2022 and was released on demand on November 22, 2022.",
    id: "596b234a-1705-43e3-8121-201cdf0a3c98",
    rating: 0.5906651413258333,
  },
  {
    displayImageUrl:
      "https://upload.wikimedia.org/wikipedia/en/a/a7/A_Christmas_Story_Christmas_poster.png",
    displayName: "A Christmas Story Christmas",
    format: "Movie",
    genres: ["Comedy"],
    summary:
      "A Christmas Story Christmas is a 2022 American Christmas comedy film directed by Clay Kaytis with a script he co-wrote with Nick Schenk, from an original story co-written by Schenk and Peter Billingsley. It is a legacy sequel to A Christmas Story (1983) and is the eighth installment in the Parker Family Saga franchise, while ignoring the events of My Summer Story (1994) and A Christmas Story 2 (2012). The film was produced by Billingsley and Vince Vaughn along with Cale Boyter, Jay Ashenfelter, Marc Toberoff and Irwin Zwilling. Billingsley reprises his role as Ralphie Parker alongside Ian Petrella, Scott Schwartz, R. D. Robb, Zack Ward, and Yano Anaya returning as Randy Parker, Flick, Schwartz, Scut Farkus, and Grover Dill, respectively. Erinn Hayes, River Drosche, and Julianna Layne play Ralphie's wife and kids, with Julie Hagerty as Mrs. Parker. In the film, after the Old Man dies, Ralphie takes his family to his childhood home, reuniting with his mom and old friends, while being tasked to deliver a memorable Christmas.",
    id: "95b1aeb1-2d0c-4238-9f52-bf7ccde480d7",
    rating: 0.5122817485532813,
  },
  {
    displayName: "Christmas with You",
    format: "Movie",
    genres: [],
    id: "113c7392-8d6f-4e4c-b77a-34ebb03d5746",
    rating: 0.2793330343327345,
  },
  {
    displayImageUrl:
      "https://upload.wikimedia.org/wikipedia/en/5/50/She_said_film_poster.jpg",
    displayName: "She Said",
    format: "Movie",
    genres: ["Drama", "Biography"],
    summary:
      "She Said is a 2022 American biographical drama film directed by Maria Schrader and written by Rebecca Lenkiewicz, based on the 2019 book of the same title by reporters Jodi Kantor and Megan Twohey. The film stars Carey Mulligan and Zoe Kazan as Twohey and Kantor, respectively, and follows their New York Times investigation that exposed Harvey Weinstein's history of abuse and sexual misconduct against women. Patricia Clarkson, Andre Braugher, Jennifer Ehle, and Samantha Morton co-star, with Ashley Judd appearing as herself.",
    id: "44ad1dbd-dde3-49f4-a3a2-0e5121746e75",
    rating: 0.19031607551429275,
  },
  {
    displayImageUrl:
      "https://upload.wikimedia.org/wikipedia/en/d/db/The_Menu_%282022_film%29.jpg",
    displayName: "The Menu",
    format: "Movie",
    genres: ["Comedy", "Horror"],
    summary:
      "The Menu is a 2022 American comedy horror film directed by Mark Mylod, written by Seth Reiss and Will Tracy, based on an original story created by Tracy, produced by Adam McKay, Betsy Koch and Will Ferrell, and starring Ralph Fiennes as a celebrity chef with Hong Chau playing his assistant and Anya Taylor-Joy, Nicholas Hoult, Janet McTeer, Reed Birney, Judith Light, and John Leguizamo playing diners who attend his exclusive restaurant.",
    id: "48c6e6e9-c66e-4840-b2cc-806bc743cb45",
    rating: 0.6078834443557568,
  },
  {
    displayImageUrl:
      "https://upload.wikimedia.org/wikipedia/en/9/93/Disenchanted.jpg",
    displayName: "Disenchanted",
    format: "Movie",
    genres: ["Live Action", "Animated", "Comedy", "Fantasy", "Musical"],
    summary:
      "Disenchanted is a 2022 American live-action/animated musical fantasy comedy film directed by Adam Shankman and written by Brigitte Hales, based on a story by Richard LaGravenese and the writing team of J. David Stem and David N. Weiss. Co-produced by Walt Disney Pictures, Josephson Entertainment, and Right Coast Productions, it is the sequel to the 2007 film Enchanted.",
    id: "2a9561fb-c85c-4ff7-9b03-9252ecd0a0a0",
    rating: 0.7950975153023965,
  },
  {
    displayImageUrl:
      "https://upload.wikimedia.org/wikipedia/en/7/77/Slumberland_%28film%29.jpg",
    displayName: "Slumberland",
    format: "Movie",
    genres: ["Adventure", "Fantasy"],
    summary:
      "Slumberland is a 2022 American fantasy adventure film directed by Francis Lawrence and written by David Guion and Michael Handelman. Based on the comic strip Little Nemo in Slumberland by Winsor McCay, the film stars Jason Momoa, Marlow Barkley, Chris O'Dowd, Kyle Chandler, and Weruche Opia. It tells the story of a young girl who goes to live with her uncle after her father is lost at sea and enters Slumberland where she befriends a renegade character who is involved in a plot to get to the Sea of Nightmares and obtain a special pearl that may have the power to reunite her with her father.",
    id: "909d29b8-6fe5-4515-b65c-ad7c2c463b53",
    rating: 0.789644193929306,
  },
  {
    displayImageUrl:
      "https://upload.wikimedia.org/wikipedia/en/5/5f/Bones_and_All.jpg",
    displayName: "Bones and All",
    format: "Movie",
    genres: ["Horror", "Romance"],
    summary:
      "Bones and All is a 2022 romantic horror film directed by Luca Guadagnino from a screenplay by David Kajganich, based on the 2015 novel Bones & All by Camille DeAngelis. The film stars Taylor Russell and Timothée Chalamet as a pair of young cannibals who flee together on a road trip across the country and develop feelings for each other. Michael Stuhlbarg, André Holland, Chloë Sevigny, David Gordon Green, Jessica Harper, Jake Horowitz, and Mark Rylance appear in supporting roles.",
    id: "14241efa-7245-4c28-81c5-8adfd493e999",
    rating: 0.9921792728471879,
  },
  {
    displayImageUrl:
      "https://upload.wikimedia.org/wikipedia/en/3/3a/The_Inspection_%28film%29.jpg",
    displayName: "The Inspection",
    format: "Movie",
    genres: ["Drama"],
    summary:
      "The Inspection is a 2022 American drama film written and directed by Elegance Bratton. Inspired by Bratton's real-life experiences, the film follows a young gay black man who defiantly endures brutal training at a Marine Corps boot camp, seeking approval from his homophobic mother. It stars Jeremy Pope, Raúl Castillo, McCaul Lombardi, Aaron Dominguez, Nicholas Logan, Eman Esfandi, Andrew Kai, Aubrey Joseph, Bokeem Woodbine, and Gabrielle Union.",
    id: "3fa90221-48cd-47d2-a6d3-a85fa481e54c",
    rating: 0.4751392968388153,
  },
  {
    displayImageUrl:
      "https://upload.wikimedia.org/wikipedia/en/3/3e/Scrooge_A_Christmas_Carol_poster.png",
    displayName: "Scrooge: A Christmas Carol",
    format: "Movie",
    genres: ["Animated", "Comedy", "Drama", "Fantasy", "Musical"],
    summary:
      "Scrooge: A Christmas Carol is a 2022 computer-animated musical fantasy comedy drama film directed by Stephen Donnelly from a screenplay by both Donnelly and the late Leslie Bricusse, adapted from the 1970 film Scrooge, in turn based on the novel A Christmas Carol by Charles Dickens. Produced by Timeless Films, the film features the voices of Luke Evans, Olivia Colman, Jessie Buckley, Jonathan Pryce, Johnny Flynn, James Cosmo and Trevor Dion Nicholas. It was released in select theaters on November 18, 2022, and made its streaming release in Netflix on December 2 of the same year. The film is dedicated to Leslie Bricusse, who died a year before the film's release. The film received mixed reviews from critics.",
    id: "a5c1ee84-bbdc-48a9-82a0-5534ba600755",
    rating: 0.6775233937362444,
  },
  {
    displayImageUrl:
      "https://upload.wikimedia.org/wikipedia/en/2/29/Lamborghini_-_The_Man_Behind_the_Legend_poster.png",
    displayName: "Lamborghini: The Man Behind the Legend",
    format: "Movie",
    genres: ["Drama", "Biography"],
    summary:
      "Lamborghini: The Man Behind the Legend is a 2022 American biographical drama film written and directed by Robert Moresco and starring Frank Grillo as Italian entrepreneur Ferruccio Lamborghini. It was released in select theaters in the United States on November 18, 2022, by Lionsgate.",
    id: "e4d95579-b477-441f-82f0-62c893f23661",
    rating: 0.6439772173967839,
  },
  {
    displayImageUrl:
      "https://upload.wikimedia.org/wikipedia/en/f/fe/The_People_We_Hate_at_the_Wedding_film_poster.png",
    displayName: "The People We Hate at the Wedding",
    format: "Movie",
    genres: ["Comedy"],
    summary:
      "The People We Hate at the Wedding is a 2022 American comedy film directed by Claire Scanlon from a screenplay by the Molyneux sisters, based on the 2016 novel of the same name by Grant Ginder. It stars Allison Janney, Ben Platt, Cynthia Addai-Robinson, and Kristen Bell.",
    id: "a1048ca6-68d7-4a9a-a856-1088f1424bbc",
    rating: 0.3888636129650578,
  },
  {
    displayName: "Prancer: A Christmas Tale",
    format: "Movie",
    genres: [],
    summary:
      "Prancer: A Christmas Tale is a 2022 film and a remake of the 1989 film Prancer. It was produced by Raffaella De Laurentiis and written by Greg Taylor, who, respectively, also produced and wrote the original.",
    id: "32294bc5-ffd6-4210-968c-06be69fb42c7",
    rating: 0.5679314537932723,
  },
  {
    displayImageUrl:
      "https://upload.wikimedia.org/wikipedia/en/f/fe/Strange_World_poster.jpg",
    displayName: "Strange World",
    format: "Movie",
    genres: ["Adventure", "Animated", "Science Fiction"],
    summary:
      "Strange World is a 2022 American computer-animated science-fiction adventure film produced by Walt Disney Animation Studios and distributed by Walt Disney Studios Motion Pictures. The 61st film produced by the studio, it was directed by Don Hall, co-directed by Qui Nguyen, and produced by Roy Conli, from a screenplay written by Nguyen, who also conceived the story with Hall. The film stars the voices of Jake Gyllenhaal, Dennis Quaid, Jaboukie Young-White, Gabrielle Union, and Lucy Liu. It is Disney's seventh animated film to tackle the sci-fi genre, after Big Hero 6 (2014). The film follows a legendary family of explorers, the Clades, who must set aside their differences as they embark on a journey to a mysterious subterranean land inhabited by surreal lifeforms, in order to save a miracle plant Pando that is their society's source of energy.",
    id: "48f1b2f4-c1fa-4a28-beb5-7f1479c9de62",
    rating: 0.5438055367445418,
  },
  {
    displayImageUrl:
      "https://upload.wikimedia.org/wikipedia/en/6/62/Glass_Onion_poster.jpg",
    displayName: "Glass Onion: A Knives Out Mystery",
    format: "Movie",
    genres: ["Mystery"],
    summary:
      "Glass Onion: A Knives Out Mystery is a 2022 American mystery film written and directed by Rian Johnson and produced by Johnson and Ram Bergman. It is a standalone sequel to the 2019 film Knives Out, with Daniel Craig reprising his role as master detective Benoit Blanc as he takes on a new case revolving around tech billionaire Miles Bron and his closest friends. The ensemble cast also includes Janelle Monáe, Kathryn Hahn, Leslie Odom Jr., Jessica Henwick, Madelyn Cline, Kate Hudson, and Dave Bautista.",
    id: "41d2f54a-947b-4a7d-a99f-b0cb766f8f41",
    rating: 0.3404901388556978,
  },
  {
    displayImageUrl:
      "https://upload.wikimedia.org/wikipedia/en/0/0f/Devotion_%282022_film%29.jpg",
    displayName: "Devotion",
    format: "Movie",
    genres: ["War", "Biography"],
    summary:
      "Devotion is a 2022 American biographical war film based on the 2015 book Devotion: An Epic Story of Heroism, Friendship, and Sacrifice by Adam Makos, which retells the comradeship between naval officers Jesse Brown and Tom Hudner during the Korean War. It is directed by J. D. Dillard and written by Jake Crane and Jonathan Stewart. The film stars Jonathan Majors as Brown and Glen Powell as Hudner, along with Christina Jackson, Daren Kagasoff, Joe Jonas, Nick Hargrove, Spencer Neville, and Thomas Sadoski in supporting roles.",
    id: "4f6a5420-f05a-4fe8-9741-0df9b165b3ba",
    rating: 0.47238607935047994,
  },
  {
    displayImageUrl:
      "https://upload.wikimedia.org/wikipedia/en/8/84/Nanny_2022_film_poster.jpg",
    displayName: "Nanny",
    format: "Movie",
    genres: ["Horror"],
    summary:
      "Nanny is a 2022 American psychological horror film written and directed by Nikyatu Jusu, in her feature directorial debut. The film stars Anna Diop, Michelle Monaghan, Sinqua Walls, Morgan Spector, Rose Decker, and Leslie Uggams. Jason Blum serves as an executive producer through his Blumhouse Television banner.",
    id: "b1c63f36-fabc-403c-8311-1163f33996ce",
    rating: 0.07804289285307897,
  },
  {
    displayName: "A Christmas Mystery",
    format: "Movie",
    genres: [],
    id: "9e5a8ae3-ebc0-449b-8538-0e75dc85feba",
    rating: 0.5309742600530667,
  },
  {
    displayName: "Holiday Harmony",
    format: "Movie",
    genres: [],
    id: "5e2af18d-02dc-4e87-8eb2-ceb246ed79cf",
    rating: 0.4128984201898649,
  },
  {
    displayImageUrl:
      "https://upload.wikimedia.org/wikipedia/en/a/a8/The_Noel_Diary_poster.jpg",
    displayName: "The Noel Diary",
    format: "Movie",
    genres: ["Comedy", "Drama", "Romance"],
    summary:
      "The Noel Diary is a 2022 American Christmas romantic comedy-drama film directed by Charles Shyer and written by Rebecca Connor, David Golden, Charles Shyer, and Richard Paul Evans. The film stars Justin Hartley, Barrett Doss, Bonnie Bedelia, Essence Atkins, and James Remar.",
    id: "3e8c5fad-e093-42a7-bc80-a5c76537eced",
    rating: 0.28571494271945386,
  },
  {
    displayImageUrl:
      "https://upload.wikimedia.org/wikipedia/en/5/54/White_Noise_%282022_film%29.jpg",
    displayName: "White Noise",
    format: "Movie",
    genres: ["Comedy", "Drama"],
    summary:
      "White Noise is a 2022 absurdist comedy-drama film, written and directed by Noah Baumbach, adapted from the 1985 novel with the same title by Don DeLillo. It is Baumbach's first directed feature not to be based on an original story of his own. The film stars Adam Driver, Greta Gerwig, Don Cheadle, Raffey Cassidy, Sam Nivola, and May Nivola. Set in the 1980s, the story follows the life of an academic and his family whose lives change after an air contamination accident near their home.",
    id: "dc8581ab-2dc1-4f5d-8d89-e02fca64c682",
    rating: 0.1079587019996111,
  },
  {
    displayName: "A Hollywood Christmas",
    format: "Movie",
    genres: [],
    id: "3b7e2ce1-4ab6-40e1-a44f-820e94019c7c",
    rating: 0.3659784864710103,
  },
  {
    displayImageUrl:
      "https://upload.wikimedia.org/wikipedia/en/d/d2/Violent_Night_poster.jpg",
    displayName: "Violent Night",
    format: "Movie",
    genres: ["Action", "Comedy"],
    summary:
      "Violent Night is a 2022 American Christmas action comedy film directed by Tommy Wirkola and written by Pat Casey and Josh Miller. It follows Santa Claus as he fights mercenaries who have taken a wealthy family hostage in their home. The film also stars John Leguizamo, Alex Hassell, Alexis Louder, Edi Patterson, Cam Gigandet, Leah Brady, and Beverly D'Angelo.",
    id: "36af3360-074f-48a0-a71c-d4b85cd71c7e",
    rating: 0.06876782678783289,
  },
  {
    displayImageUrl:
      "https://upload.wikimedia.org/wikipedia/en/b/b3/Emancipation_Release_Poster.jpg",
    displayName: "Emancipation",
    format: "Movie",
    genres: ["Action", "Historical", "Thriller"],
    summary:
      "Emancipation is a 2022 American historical action thriller film set in Louisiana in the 1860s after President Abraham Lincoln issued the Emancipation Proclamation to end most slavery in the US. The film was directed by Antoine Fuqua and co-produced by Will Smith, who stars as a runaway slave headed for Baton Rouge. He must survive the swamps while being chased by slave catchers and their dogs. Written by William N. Collage, the biographical film is loosely based on a possibly conglomerated story of the lives of either or both of two formerly enslaved Black men named Gordon and \"Whipped Peter\". That story was made famous by the photograph of a man's bare back heavily scourged from an overseer's whippings, published worldwide as magazine illustrations in 1863, and gave the abolitionist movement proof of the cruelty of slavery. Ben Foster stars as a ruthless slave hunter and Charmaine Bingwa as an enslaved wife and mother. The film employs an artistic desaturated color palette reminiscent of black-and-white film.",
    id: "51ee00b9-2a8d-41e7-90be-332867f187df",
    rating: 0.5422709914717185,
  },
  {
    displayImageUrl:
      "https://upload.wikimedia.org/wikipedia/en/c/c1/Spoiler_Alert_film_poster.png",
    displayName: "Spoiler Alert",
    format: "Movie",
    genres: ["Drama", "Biography", "Romance"],
    summary:
      "Spoiler Alert is a 2022 American biographical romantic drama film starring Jim Parsons and Ben Aldridge as two lovers, one who watches the other's final months before his death from terminal cancer. The film, based on the 2017 memoir Spoiler Alert: The Hero Dies by Michael Ausiello, is directed by Michael Showalter and written by David Marshall Grant and Dan Savage. Parsons plays Ausiello, and Aldridge plays his lover Kit Cowan who dies of cancer.",
    id: "2a43fde9-d3ee-4129-a4ce-c6add3220527",
    rating: 0.4286920982232181,
  },
  {
    displayImageUrl:
      "https://upload.wikimedia.org/wikipedia/en/7/72/Diary_of_a_Wimpy_Kid_Rodrick_Rules_2022_poster.jpeg",
    displayName: "Diary of a Wimpy Kid: Rodrick Rules",
    format: "Movie",
    genres: ["Animated", "Comedy"],
    summary:
      "Diary of a Wimpy Kid: Rodrick Rules is a 2022 computer-animated comedy film directed by Luke Cormican from a screenplay by Jeff Kinney, based on his 2008 book of the same name. It is a sequel to Diary of a Wimpy Kid (2021) and is the second adaptation of Rodrick Rules following the 2011 live-action film, while also being the second fully-animated film in the Diary of a Wimpy Kid film series and the sixth installment overall. Brady Noon, Ethan William Childress, Chris Diamantopoulos, Erica Cerra, and Hunter Dillon reprise their roles as characters from the first film, while Ed Asner posthumously portrays Grandpa Heffley. The film is one of Asner's final voice roles recorded before his death on August 29, 2021 and is dedicated to his memory.",
    id: "2359aba7-3e87-4b4e-a09b-569a30b4e31a",
    rating: 0.6722098940390946,
  },
  {
    displayImageUrl:
      "https://upload.wikimedia.org/wikipedia/en/8/86/Darby_and_the_Dead_poster.jpeg",
    displayName: "Darby and the Dead",
    format: "Movie",
    genres: ["Comedy", "Supernatural", "Teen", "War"],
    summary:
      "Darby and the Dead is a 2022 American supernatural teen comedy film directed by Silas Howard, written by Wenonah Wilms and Becca Greene, and starring Riele Downs as Darby Harper, along with Auliʻi Cravalho, Chosen Jacobs, Asher Angel, Wayne Knight, Derek Luke, and Tony Danza.",
    id: "e4715187-2e4c-4042-baf9-0be3a13a6f00",
    rating: 0.5839161075725141,
  },
  {
    displayImageUrl:
      "https://upload.wikimedia.org/wikipedia/en/1/1c/Lady_Chatterley%27s_Lover_%282022_film%29.png",
    displayName: "Lady Chatterley's Lover",
    format: "Movie",
    genres: ["Drama", "Romance"],
    summary:
      "Lady Chatterley's Lover is a 2022 romantic drama film directed by Laure de Clermont-Tonnerre from a screenplay by David Magee based on the novel of the same name by D. H. Lawrence. The film stars Emma Corrin and Jack O'Connell.",
    id: "eb2e721b-568c-45ca-b45a-9c1362b52e36",
    rating: 0.6005689654567441,
  },
  {
    displayImageUrl:
      "https://upload.wikimedia.org/wikipedia/en/8/8d/The_Eternal_Daughter.jpeg",
    displayName: "The Eternal Daughter",
    format: "Movie",
    genres: ["Drama", "Mystery"],
    summary:
      "The Eternal Daughter is a 2022 Gothic mystery drama film produced, written and directed by Joanna Hogg. It stars Tilda Swinton in a double role, playing both a middle-aged filmmaker and her elderly mother who are guests at a mysterious hotel. Joseph Mydell and Carly-Sophia Davies feature in supporting roles.",
    id: "3448fa5f-4d19-4dac-8390-fbda1635d278",
    rating: 0.08276034608328753,
  },
  {
    displayImageUrl:
      "https://upload.wikimedia.org/wikipedia/en/3/32/Matilda_the_Musical_UK_Film_Poster.jpg",
    displayName: "Matilda the Musical",
    format: "Movie",
    genres: ["Comedy", "Drama", "Fantasy", "Musical", "War"],
    summary:
      "Roald Dahl's Matilda the Musical, or simply Matilda the Musical, is a 2022 musical fantasy comedy drama film directed by Matthew Warchus from a screenplay by Dennis Kelly, based on the stage musical of the same name by Kelly and Tim Minchin, which in turn is based on the 1988 novel Matilda by Roald Dahl. The film, co-produced by TriStar Pictures, Working Title Films, and The Roald Dahl Story Company, is the second film adaptation of the novel, following the 1996 film. The film stars Alisha Weir as the title character, alongside Lashana Lynch, Stephen Graham, Andrea Riseborough, Sindhu Vee, and Emma Thompson. In the film, Matilda Wormwood (Weir), who is neglected and mistreated by her parents, develops psychokinetic abilities to deal with Miss Trunchbull (Thompson), the ruthless and cruel headmistress of Crunchem Hall School.",
    id: "168f9c5e-9ccb-43e4-b47c-91dcea7f9c2d",
    rating: 0.34577916007690535,
  },
  {
    displayImageUrl:
      "https://upload.wikimedia.org/wikipedia/en/1/14/Empire_of_Light_%28film%29.jpg",
    displayName: "Empire of Light",
    format: "Movie",
    genres: ["Drama", "Romance"],
    summary:
      "Empire of Light is a 2022 British romantic drama film directed, written, and co-produced by Sam Mendes. Set in an English coastal town in the early 1980s, the film is about the power of human connection during turbulent times. It stars Olivia Colman, Micheal Ward, Monica Dolan, Tom Brooke, Tanya Moodie, Hannah Onslow, Crystal Clarke, Toby Jones, and Colin Firth.",
    id: "47618351-afe2-4b26-b754-597dd01d83ad",
    rating: 0.8356114142838209,
  },
  {
    displayImageUrl:
      "https://upload.wikimedia.org/wikipedia/en/1/17/Night_at_the_Museum_Kahmunrah_Rises_Again.jpg",
    displayName: "Night at the Museum: Kahmunrah Rises Again",
    format: "Movie",
    genres: ["Animated"],
    summary:
      "Night at the Museum: Kahmunrah Rises Again is a 2022 animated film directed by Matt Danner and written by Ray DeLaurentis and William Schifrin. The sequel to Secret of the Tomb (2014), it is the first animated film in the Night at the Museum film series and the fourth installment overall, as well as the first animated feature film produced by Atomic Cartoons. The film follows Nick Daley, the son of Larry Daley, as he becomes night guard at the Museum of Natural History. In addition to Nick Daley, it also features Kahmunrah, the antagonist of the second film (2009).",
    id: "9d40b774-c176-4e07-a563-0ffdc84a6da5",
    rating: 0.715548304026359,
  },
  {
    displayImageUrl:
      "https://upload.wikimedia.org/wikipedia/en/f/f3/TheWhalePoster.jpg",
    displayName: "The Whale",
    format: "Movie",
    genres: ["Drama"],
    summary:
      "The Whale is a 2022 American psychological drama film directed by Darren Aronofsky and written by Samuel D. Hunter, based on his 2012 play of the same name. The film stars Brendan Fraser, Sadie Sink, Hong Chau, Ty Simpkins, and Samantha Morton. The plot follows a reclusive, morbidly obese English teacher who tries to restore his relationship with his teenage daughter.",
    id: "63897078-0b9c-46f7-bbe5-ed0afbbc2b3f",
    rating: 0.819614374585423,
  },
  {
    displayImageUrl:
      "https://upload.wikimedia.org/wikipedia/en/e/e8/Something_from_Tiffany%27s_film_poster.png",
    displayName: "Something from Tiffany's",
    format: "Movie",
    genres: ["Comedy", "Romance"],
    summary:
      "Something from Tiffany's is a 2022 American Christmas romantic comedy film directed by Daryl Wein, from a screenplay by Tamara Chestna. It is based on the novel of the same name by Melissa Hill. The film stars Zoey Deutch, Kendrick Sampson, Ray Nicholson, and Shay Mitchell.",
    id: "cf9e321e-f24b-4b33-9812-11d89b8b7b33",
    rating: 0.14137283098013742,
  },
  {
    displayImageUrl:
      "https://upload.wikimedia.org/wikipedia/en/3/37/Detective_Knight_Redemption_poster.png",
    displayName: "Detective Knight: Redemption",
    format: "Movie",
    genres: ["Action", "War"],
    summary:
      "Detective Knight: Redemption is a 2022 American Christmas action film directed by Edward John Drake, from a screenplay by Drake and Corey Large, and produced by Large, Randall Emmett, and George Furla. Serving as the second installment of the Detective Knight trilogy, and as a sequel to Detective Knight: Rogue (2022), it stars Paul Johansson and Bruce Willis.",
    id: "34ac4ef7-be00-45b5-9558-5eab3fcb4457",
    rating: 0.9192390584794845,
  },
  {
    displayImageUrl:
      "https://upload.wikimedia.org/wikipedia/en/5/57/The_Mean_One_poster.png",
    displayName: "The Mean One",
    format: "Movie",
    genres: ["Comedy", "Slasher"],
    summary:
      "The Mean One is a 2022 American Christmas black comedy slasher film directed by Steven LaMorte and written by Flip and Finn Kobler. The film serves as an unauthorized horror retelling of Dr. Seuss' 1957 children's book How the Grinch Stole Christmas! and stars David Howard Thornton as the eponymous character, with Krystle Martin, Chase Mullins, John Bigham, Erik Baker, Flip Kobler, and Amy Schumacher in supporting roles. It follows a young woman as she attempts to defend her childhood town from a green-skinned creature who goes on a murderous rampage during the holiday season.",
    id: "e3381655-d728-4e60-a989-a8b29b412c76",
    rating: 0.809568643740485,
  },
  {
    displayName: "5000 Blankets",
    format: "Movie",
    genres: [],
    id: "df206d42-3bdd-4eaf-84b2-527dc3f219af",
    rating: 0.4817201342642967,
  },
  {
    displayImageUrl:
      "https://upload.wikimedia.org/wikipedia/en/5/54/Avatar_The_Way_of_Water_poster.jpg",
    displayName: "Avatar: The Way of Water",
    format: "Movie",
    genres: ["Science Fiction"],
    summary:
      "Avatar: The Way of Water is a 2022 American epic science fiction film directed and produced by James Cameron. He co-wrote the screenplay with Rick Jaffa and Amanda Silver from a story the trio wrote with Josh Friedman and Shane Salerno. Distributed by 20th Century Studios, it is the sequel to Avatar (2009) and the second installment in the Avatar film series. Cast members Sam Worthington, Zoe Saldaña, Stephen Lang, Joel David Moore, CCH Pounder, Giovanni Ribisi, Dileep Rao, and Matt Gerald reprise their roles from the original film, with Sigourney Weaver returning in an additional role while Kate Winslet joined the cast. It follows a blue-skinned humanoid Na'vi named Jake Sully (Worthington) as he and his family, under renewed human threat, seek refuge with the aquatic Metkayina clan of Pandora, a habitable exomoon on which they live.",
    id: "ba566ad9-4ea9-4d06-9e70-7b227a45eed4",
    rating: 0.8425701129582444,
  },
  {
    displayImageUrl:
      "https://upload.wikimedia.org/wikipedia/en/7/78/Puss_in_Boots_The_Last_Wish_poster.jpg",
    displayName: "Puss in Boots: The Last Wish",
    format: "Movie",
    genres: ["Adventure", "Animated"],
    summary:
      "Puss in Boots: The Last Wish is a 2022 American computer-animated adventure film produced by DreamWorks Animation and distributed by Universal Pictures. The sequel to the spin-off film Puss in Boots (2011) and the sixth installment in the Shrek franchise, the film was directed by Joel Crawford and co-directed by Januel Mercado. Based on the character from Shrek 2 (2004) and inspired by the eponymous fairy tale, the film's screenplay was written by Paul Fisher and Tommy Swerdlow, with a story by Swerdlow and Tom Wheeler. The voice cast of Puss in Boots: The Last Wish includes Antonio Banderas and Salma Hayek Pinault reprising their respective roles as the titular character and Kitty Softpaws, and are joined by Harvey Guillén, Florence Pugh, Olivia Colman, Ray Winstone, Samson Kayo, John Mulaney, Wagner Moura, Da'Vine Joy Randolph, and Anthony Mendez, who voice new characters introduced in the film. Set after Shrek Forever After (2010), the film follows Puss in Boots as he journeys to find the mystical Last Wish for the Wishing Star by teaming up with Kitty and Perrito (Guillén) to restore the first eight of his nine lives, by wishing on the mystical Last Wishing Star. They must race against Goldilocks and her Three Bears Crime Family, and \"Big\" Jack Horner (Mulaney), who all desire the star; Puss must also avoid a mysterious hooded wolf (Moura), who plots to kill him.",
    id: "1d26ceab-1dfa-4de0-b62c-39a7b3457235",
    rating: 0.6227611543395024,
  },
  {
    displayName: "Wildcat",
    format: "Movie",
    genres: [],
    id: "e6d0dd98-5d9c-4134-b991-979bffc48be5",
    rating: 0.3000594396425873,
  },
  {
    displayImageUrl:
      "https://upload.wikimedia.org/wikipedia/en/d/d2/BabylonOfficialTheatricalPoster2022.jpeg",
    displayName: "Babylon",
    format: "Movie",
    genres: ["Comedy", "Drama", "Historical"],
    summary:
      "Babylon is a 2022 American epic period black comedy-drama film written and directed by Damien Chazelle. It features an ensemble cast including Brad Pitt, Margot Robbie, Diego Calva, Jean Smart, Jovan Adepo, and Li Jun Li. It chronicles the rise and fall of multiple characters during Hollywood's transition from silent to sound films in the late 1920s.",
    id: "e352a5aa-0795-485d-ae70-8f0111cf8a9a",
    rating: 0.1261502448305425,
  },
  {
    displayImageUrl:
      "https://upload.wikimedia.org/wikipedia/en/6/61/IWDWS.jpeg",
    displayName: "Whitney Houston: I Wanna Dance with Somebody",
    format: "Movie",
    genres: ["Drama", "Musical", "Biography"],
    summary:
      "Whitney Houston: I Wanna Dance with Somebody is a 2022 American biographical musical drama film directed by Kasi Lemmons, from a screenplay by Anthony McCarten, based on the life and career of American singer and actress Whitney Houston. The film stars Naomi Ackie as Houston with Stanley Tucci, Ashton Sanders, Tamara Tunie, Nafessa Williams, and Clarke Peters in supporting roles.",
    id: "66ed48ef-2046-4c22-b89e-69a0dd0db88a",
    rating: 0.7159368823563887,
  },
  {
    displayImageUrl:
      "https://upload.wikimedia.org/wikipedia/en/0/07/The_Pale_Blue_Eye_poster.jpg",
    displayName: "The Pale Blue Eye",
    format: "Movie",
    genres: ["Mystery", "Thriller"],
    summary:
      "The Pale Blue Eye is a 2022 American mystery thriller film written and directed by Scott Cooper, adapted from the 2003 novel of the same name by Louis Bayard. The film features an ensemble cast that includes Christian Bale, Harry Melling, Gillian Anderson, Lucy Boynton, Charlotte Gainsbourg, Toby Jones, Harry Lawtey, Simon McBurney, Timothy Spall, and Robert Duvall. Its plot follows veteran detective Augustus Landor in 1830 West Point, New York, as he investigates a series of murders at the United States Military Academy with the aid of Edgar Allan Poe, a young military cadet.",
    id: "c735d553-6c86-4c5c-9e9d-7d5bca8d5e38",
    rating: 0.022578784634226023,
  },
  {
    displayImageUrl:
      "https://upload.wikimedia.org/wikipedia/en/f/f4/Women_Talking_poster.jpeg",
    displayName: "Women Talking",
    format: "Movie",
    genres: ["Drama"],
    summary:
      "Women Talking is a 2022 drama film written and directed by Sarah Polley. It is based on the Canadian 2018 novel of the same name by Miriam Toews, and inspired by the gas-facilitated rapes that occurred at the Manitoba Colony, a remote and isolated Mennonite community in Bolivia. It features an ensemble cast that includes Rooney Mara, Claire Foy, Jessie Buckley, Judith Ivey, Ben Whishaw, and Frances McDormand, who also served as a producer on the film.",
    id: "be85c8d4-537f-47e0-a92a-a5a69988d4bf",
    rating: 0.7784113240299264,
  },
  {
    displayImageUrl:
      "https://upload.wikimedia.org/wikipedia/en/8/80/A_Man_Called_Otto_poster.jpg",
    displayName: "A Man Called Otto",
    format: "Movie",
    genres: ["Comedy", "Drama"],
    summary:
      "A Man Called Otto is a 2022 American comedy-drama film directed by Marc Forster from a screenplay by David Magee. It is the second film adaptation of the 2012 novel A Man Called Ove by Fredrik Backman after the 2015 Swedish film of the same name. The film stars Tom Hanks in the title role, with Mariana Treviño, Rachel Keller, and Manuel Garcia-Rulfo.",
    id: "dc63172d-380c-4679-ae10-1df95660257b",
    rating: 0.8569942833306963,
  },
  {
    displayImageUrl:
      "https://upload.wikimedia.org/wikipedia/en/a/ab/Alice_darling.jpg",
    displayName: "Alice, Darling",
    format: "Movie",
    genres: ["Thriller"],
    summary:
      "Alice, Darling is a 2022 psychological thriller film directed by Mary Nighy, in her directorial debut, from a screenplay by Alanna Francis. The film stars Anna Kendrick, Kaniehtiio Horn, Charlie Carrick, and Wunmi Mosaku.",
    id: "05fc0e02-07b3-4f89-b7c7-2983abb9cebe",
    rating: 0.5170844290319558,
  },
  {
    displayImageUrl:
      "https://upload.wikimedia.org/wikipedia/en/0/03/M3GAN_Poster.jpeg",
    displayName: "M3GAN",
    format: "Movie",
    genres: ["Horror", "Science Fiction"],
    summary:
      "M3GAN is a 2022 American science fiction horror film directed by Gerard Johnstone, written by Akela Cooper from a story by Cooper and James Wan, and starring Allison Williams and Violet McGraw, with Amie Donald physically portraying M3GAN and Jenna Davis voicing the character. Its plot follows the eponymous artificially intelligent doll who develops self-awareness and becomes hostile toward anyone who comes between her and her human companion.",
    id: "12772545-c6ff-4e98-b723-6f082ab309ec",
    rating: 0.797598042034076,
  },
  {
    displayImageUrl:
      "https://upload.wikimedia.org/wikipedia/en/b/bd/The_Old_Way_poster.jpg",
    displayName: "The Old Way",
    format: "Movie",
    genres: ["Western"],
    summary:
      "The Old Way is a 2023 American Western film directed by Brett Donowho, from a screenplay by Carl W. Lucas, and starring Nicolas Cage as a retired gunman on a mission to find the outlaws who killed his wife.",
    id: "39067de0-700b-4d58-a3ed-f9648ca09006",
    rating: 0.7294160066155826,
  },
  {
    displayImageUrl:
      "https://upload.wikimedia.org/wikipedia/en/e/ef/DevilConspiracy.png",
    displayName: "The Devil Conspiracy",
    format: "Movie",
    genres: ["Horror", "Science Fiction"],
    summary:
      "The Devil Conspiracy is a 2022 science fiction horror film written and produced by Ed Alan and directed by Nathan Frankowski. It stars Alice Orr-Ewing, Joe Doyle, Eveline Hall, Peter Mensah, Joe Anderson, Spencer Wilding, Brian Caspe and James Faulkner.",
    id: "cf7f51fb-3498-4c3a-901e-a0492bdd83b7",
    rating: 0.7936435629242264,
  },
  {
    displayImageUrl:
      "https://upload.wikimedia.org/wikipedia/en/d/d2/Plane_%282023_film%29_poster.png",
    displayName: "Plane",
    format: "Movie",
    genres: ["Action", "Thriller"],
    summary:
      "Plane is a 2023 American action thriller film directed by Jean-François Richet from a screenplay by Charles Cumming and J. P. Davis. The film stars Gerard Butler, Mike Colter, Yoson An, and Tony Goldwyn. The plot centers on a pilot (Butler) allying with a prisoner (Colter) to save his passengers from a hostile territory they landed in for an emergency landing.",
    id: "c7070e06-f9e6-4da6-9ac1-b20a9b7aad4a",
    rating: 0.725801322771289,
  },
  {
    displayImageUrl:
      "https://upload.wikimedia.org/wikipedia/en/4/4d/House_Party_%282023_film%29.png",
    displayName: "House Party",
    format: "Movie",
    genres: ["Comedy"],
    summary:
      "House Party is a 2023 American comedy film directed by Calmatic from a screenplay by Jamal Olori and Stephen Glover, serving as a reboot and remake of the 1990 film of the same name. The film stars Tosin Cole, Jacob Latimore, Karen Obilom, D.C. Young Fly, and Kid Cudi, and follows two young aspiring club promoters working as house cleaners who throw a party at their latest job site: LeBron James' mansion. It is produced by New Line Cinema and James and Maverick Carter's SpringHill Company.",
    id: "b97643e7-1857-4271-9b37-bdfd8fd5056d",
    rating: 0.6877183629773227,
  },
  {
    displayImageUrl:
      "https://upload.wikimedia.org/wikipedia/en/7/73/SickFilmPoster.jpg",
    displayName: "Sick",
    format: "Movie",
    genres: ["Slasher"],
    summary:
      "Sick is a 2022 American slasher film directed by John Hyams and written by Kevin Williamson and Katelyn Crabb. The film stars Gideon Adlon, Beth Million, and Dylan Sprayberry.",
    id: "5b5e5a96-abff-4fe9-a1df-9185a440911a",
    rating: 0.3371032921353416,
  },
  {
    displayImageUrl:
      "https://upload.wikimedia.org/wikipedia/en/e/e8/The_Drop_%282022_film%29.png",
    displayName: "The Drop",
    format: "Movie",
    genres: ["Comedy"],
    summary:
      "The Drop is a 2022 American black comedy film directed by Sarah Adina Smith, written by Smith and Joshua Leonard, and starring Anna Konkle and Jermaine Fowler. It premiered at the 2022 Tribeca Film Festival and was released on Hulu on January 13, 2023.",
    id: "7bd0194f-964b-4bed-9c1a-d94cf4a3949d",
    rating: 0.432761613532741,
  },
  {
    displayImageUrl:
      "https://upload.wikimedia.org/wikipedia/en/0/00/DogGonePoster.png",
    displayName: "Dog Gone",
    format: "Movie",
    genres: ["Drama", "Biography"],
    summary:
      "Dog Gone is a 2023 American biographical drama film directed by Stephen Herek. It was released by Netflix on January 13, 2023.",
    id: "a471b1ba-ee56-46d0-a8d0-d7618c1fa257",
    rating: 0.9131433746202782,
  },
  {
    displayImageUrl:
      "https://upload.wikimedia.org/wikipedia/en/5/5f/There%27s_Something_Wrong_with_the_Children_poster.png",
    displayName: "There's Something Wrong with the Children",
    format: "Movie",
    genres: ["Horror"],
    summary:
      "There's Something Wrong with the Children is a 2023 American horror film directed by Roxanne Benjamin and written by T. J. Cimfel and David White. The film stars Alisha Wainwright, Zach Gilford, Amanda Crew, and Carlos Santos. Jason Blum serves as an executive producer through his Blumhouse Television banner.",
    id: "5e4218a8-de8a-44ff-bb58-bc31aeaed3c6",
    rating: 0.04717535297339803,
  },
  {
    displayImageUrl:
      "https://upload.wikimedia.org/wikipedia/en/5/5d/Missing_poster.jpg",
    displayName: "Missing",
    format: "Movie",
    genres: ["Thriller"],
    summary:
      "Missing is a 2023 American screenlife thriller film written and directed by Will Merrick and Nick Johnson from a story by Sev Ohanian and Aneesh Chaganty, who also produced the film with Natalie Qasabian. The film is a standalone sequel to Searching (2018). It stars Storm Reid, Joaquim de Almeida, Ken Leung, Amy Landecker, Daniel Henney, and Nia Long. Its plot follows June Allen, a teenager who tries to find her missing mother after she disappears on vacation in Colombia with her new boyfriend.",
    id: "84b8d43d-bb61-427f-a347-6c7018e07412",
    rating: 0.9159990622119114,
  },
  {
    displayImageUrl:
      "https://upload.wikimedia.org/wikipedia/en/d/d6/The_Son_%282022_film%29.png",
    displayName: "The Son",
    format: "Movie",
    genres: ["Drama"],
    summary:
      "The Son is a 2022 drama film directed by Florian Zeller from a screenplay written by himself and Christopher Hampton. It is based on Zeller's 2018 stage play of the same name. Anthony Hopkins has a minor appearance in this film playing the main character's father. The film stars Hugh Jackman, Laura Dern, Vanessa Kirby, Zen McGrath, Hugh Quarshie, and Anthony Hopkins.",
    id: "3e7f5b5f-a8e5-4e12-9059-855ce0ef6db9",
    rating: 0.771309272898522,
  },
  {
    displayImageUrl:
      "https://upload.wikimedia.org/wikipedia/en/f/f6/WhenYouFinishSavingTheWorldFilm.jpg",
    displayName: "When You Finish Saving the World",
    format: "Movie",
    genres: ["Comedy", "Drama"],
    summary:
      "When You Finish Saving the World is a 2022 American coming-of-age comedy-drama film written and directed by Jesse Eisenberg in his feature directorial debut. The film is based on Eisenberg's 2020 audio drama of the same name. Julianne Moore and Finn Wolfhard star as a mother and son who navigate their contentious relationship.",
    id: "b5f63753-b8d9-414b-8e23-23669decb6df",
    rating: 0.11714675415566611,
  },
  {
    displayImageUrl:
      "https://upload.wikimedia.org/wikipedia/en/9/9c/Detective_Knight_Independence_poster.png",
    displayName: "Detective Knight: Independence",
    format: "Movie",
    genres: ["Action"],
    summary:
      "Detective Knight: Independence is a 2023 American action film directed by Edward Drake, who wrote the screenplay and co-wrote the story with Corey Large. Serving as the third and final installment of the Detective Knight trilogy, and as a sequel to Detective Knight: Redemption (2022), it stars Bruce Willis, Jack Kilmer, Lochlyn Munro, Jimmy Jean-Louis, Willow Shields, Dina Meyer, and Timothy V. Murphy.",
    id: "2821e9d5-ae12-42a0-8ac8-4f1c78de1f84",
    rating: 0.26804847833305234,
  },
  {
    displayImageUrl:
      "https://upload.wikimedia.org/wikipedia/en/8/89/Kids_vs_Aliens_poster.png",
    displayName: "Kids vs. Aliens",
    format: "Movie",
    genres: ["Horror", "Science Fiction"],
    summary:
      'Kids vs. Aliens is a 2022 American science fiction horror film directed by Jason Eisener and written by John Davies and Eisener. It is the second spin-off film in the V/H/S franchise and a feature-length adaptation of "Slumber Party Alien Abduction", Eisener\'s segment from the 2013 anthology horror film V/H/S/2. It stars Dominic Mariche, Phoebe Rex, Calem MacDonald and Asher Grayson.',
    id: "8ebbc9a1-a9d4-4b4e-9578-9328b8c9f472",
    rating: 0.35339427139052737,
  },
  {
    displayImageUrl:
      "https://upload.wikimedia.org/wikipedia/en/2/23/Teen_Wolf-_The_Movie_poster.jpg",
    displayName: "Teen Wolf: The Movie",
    format: "Movie",
    genres: ["Drama", "Supernatural", "Teen", "Thriller"],
    summary:
      "Teen Wolf: The Movie is a 2023 American supernatural thriller teen drama film directed by Russell Mulcahy and written by Jeff Davis. The film is a continuation of the MTV series Teen Wolf and features most of the cast reprising their roles, including Tyler Posey, Crystal Reed, Tyler Hoechlin, Holland Roden, Colton Haynes, Shelley Hennig, Dylan Sprayberry, Linden Ashby, Melissa Ponzio, and JR Bourne. It follows werewolf Scott McCall (Posey) as he protects his California town from a new threat.",
    id: "14605ad3-a55f-4148-91e3-358c4c9d5b12",
    rating: 0.8717964597906149,
  },
  {
    displayImageUrl:
      "https://upload.wikimedia.org/wikipedia/en/7/75/You_People_Film_Poster.jpg",
    displayName: "You People",
    format: "Movie",
    genres: ["Comedy", "Romance"],
    summary:
      "You People is a 2023 American romantic comedy film directed by Kenya Barris, which he co-wrote with Jonah Hill. The film features an ensemble cast that includes Hill, Lauren London, David Duchovny, Nia Long, Julia Louis-Dreyfus, and Eddie Murphy. Its plot focuses on an interracial and interreligious couple, namely a white Jewish man and a Black NOI woman, and how their families reckon with modern love amid culture clashes, societal expectations and generational differences. Set in the Los Angeles area, two Millennials meet by chance and go into uncharted waters in their dating lives.",
    id: "d58d826c-9ab3-40bb-820d-5ef3cf6228a3",
    rating: 0.9137534409492059,
  },
  {
    displayImageUrl:
      "https://upload.wikimedia.org/wikipedia/en/8/82/Shotgun_Wedding_2022_poster.jpg",
    displayName: "Shotgun Wedding",
    format: "Movie",
    genres: ["Action", "Comedy", "Romance"],
    summary:
      "Shotgun Wedding is a 2022 American romantic action comedy film directed by Jason Moore and written by Mark Hammer. It stars Jennifer Lopez, Josh Duhamel, Sônia Braga, Jennifer Coolidge, Lenny Kravitz, and Cheech Marin. After being filmed from February to April of 2021 in Boston and the Dominican Republic, Shotgun Wedding was released in Singapore on December 28, 2022, and was released on January 27, 2023, by Amazon Studios via Prime Video.",
    id: "99bb1c5b-d455-4b22-8558-316475867260",
    rating: 0.6201362200164859,
  },
  {
    displayImageUrl:
      "https://upload.wikimedia.org/wikipedia/en/9/99/Maybe_I_Do.jpeg",
    displayName: "Maybe I Do",
    format: "Movie",
    genres: ["Comedy", "Romance"],
    summary:
      "Maybe I Do is a 2023 American romantic comedy film written and directed by Michael Jacobs, based on his own play Cheaters, and starring Diane Keaton, Richard Gere, Susan Sarandon, Emma Roberts, Luke Bracey, and William H. Macy. It is Jacobs' feature directorial debut.",
    id: "08e36848-f500-41ee-8815-6204e49b2b1e",
    rating: 0.6451488519137711,
  },
  {
    displayImageUrl:
      "https://upload.wikimedia.org/wikipedia/en/7/74/LifeUpsideDownPoster.png",
    displayName: "Life Upside Down",
    format: "Movie",
    genres: ["Comedy", "Romance"],
    summary:
      "Life Upside Down is a 2022 American romantic comedy film directed and written by Cecilia Miniucchi. It stars Bob Odenkirk, Danny Huston, Radha Mitchell and Rosie Fellner.",
    id: "5d7d5dee-043e-449f-97c9-d1543e4ff644",
    rating: 0.43290774022592515,
  },
  {
    displayImageUrl:
      "https://upload.wikimedia.org/wikipedia/en/0/0a/Fear_%282023_film%29_poster.png",
    displayName: "Fear",
    format: "Movie",
    genres: ["Horror"],
    summary:
      'Fear is a 2023 American horror film directed by Deon Taylor and starring Joseph Sikora, Andrew Bachelor, Annie Ilonzeh, Ruby Modine, Iddo Goldberg, Terrence Jenkins, Jessica Allain, and Tip "T.I." Harris.',
    id: "a84c36b8-9ba7-489b-8698-560f34eb39bb",
    rating: 0.0729312716585564,
  },
  {
    displayImageUrl:
      "https://upload.wikimedia.org/wikipedia/en/e/e5/Knock_at_the_cabin.jpg",
    displayName: "Knock at the Cabin",
    format: "Movie",
    genres: ["Horror"],
    summary:
      "Knock at the Cabin is a 2023 American apocalyptic psychological horror film written and directed by M. Night Shyamalan, who wrote the screenplay from an initial draft by Steve Desmond and Michael Sherman. It is based on the 2018 novel The Cabin at the End of the World by Paul G. Tremblay, the first adaptation of one of his works. The film stars Dave Bautista, Jonathan Groff, Ben Aldridge, Nikki Amuka-Bird, Kristen Cui, Abby Quinn, and Rupert Grint. In the film, a family vacationing at a remote cabin are suddenly held hostage by four strangers, who ask something unimaginable.",
    id: "245e0c18-a1df-4d7e-b0ca-ccab619a352e",
    rating: 0.494736195948712,
  },
  {
    displayImageUrl:
      "https://upload.wikimedia.org/wikipedia/en/1/1d/80_for_Brady.jpg",
    displayName: "80 for Brady",
    format: "Movie",
    genres: ["Comedy", "Sports"],
    summary:
      "80 for Brady is a 2023 American sports comedy film directed by Kyle Marvin, written by Sarah Haskins and Emily Halpern, and produced by former NFL quarterback Tom Brady. The film follows four lifelong friends who travel to watch Brady and his New England Patriots play in Super Bowl LI in 2017. Billy Porter, Rob Corddry, Alex Moffat, and Guy Fieri also star.",
    id: "4da180d8-cc0f-4deb-b302-18c3bd8b7bd0",
    rating: 0.8454857713029522,
  },
  {
    displayImageUrl:
      "https://upload.wikimedia.org/wikipedia/en/3/3f/LocksmithFilmPoster.png",
    displayName: "The Locksmith",
    format: "Movie",
    genres: ["Thriller"],
    summary:
      "The Locksmith is a 2023 American thriller film directed by Nicolas Harvard in his feature directorial debut. John Glosser, Joe Russo, Chris LaMont, and Ben Kabialis wrote the screenplay based on an original story by Blair Kroeber.",
    id: "00e7f183-fe5e-4dcc-9f6e-b7d6c9a8f98b",
    rating: 0.3556317081024061,
  },
  {
    displayImageUrl:
      "https://upload.wikimedia.org/wikipedia/en/8/83/Baby_Ruby_poster.png",
    displayName: "Baby Ruby",
    format: "Movie",
    genres: ["Horror", "Thriller"],
    summary:
      "Baby Ruby is a 2022 American psychological horror-thriller film written and directed by Bess Wohl, in her directorial debut. It stars Noémie Merlant, Kit Harington, and Meredith Hagner.",
    id: "bb744456-ec0a-481e-a8d4-2ec490839f6e",
    rating: 0.2685605025531905,
  },
  {
    displayImageUrl:
      "https://upload.wikimedia.org/wikipedia/en/8/8b/FreedomsPathPoster.png",
    displayName: "Freedom's Path",
    format: "Movie",
    genres: ["Drama", "Historical", "War"],
    summary:
      "Freedom's Path is a 2022 historical war drama film written, directed and produced by Brett Smith in his feature length debut. It stars Gerran Howell, RJ Cyler, and Ewen Bremner. Based on the American Civil War, it won multiple film festival awards in 2022 and had a limited theatrical run from February 3, 2023.",
    id: "527410dc-13d0-45d0-9d23-34b39760d98d",
    rating: 0.4177487442418013,
  },
  {
    displayImageUrl:
      "https://upload.wikimedia.org/wikipedia/en/5/5d/Magic_Mike_Last_Dance_Poster.png",
    displayName: "Magic Mike's Last Dance",
    format: "Movie",
    genres: ["Comedy", "Drama"],
    summary:
      "Magic Mike's Last Dance is a 2023 American comedy-drama film directed by Steven Soderbergh, written by Reid Carolin, and produced by Channing Tatum. It is the third installment in the Magic Mike trilogy, following Magic Mike (2012) and Magic Mike XXL (2015). The film stars Channing Tatum as the titular retired male stripper, who leaves Florida for London to help a socialite produce a stage play.",
    id: "92919806-9f0e-4304-b6d1-d6dd7ca624db",
    rating: 0.32948034741491883,
  },
  {
    displayImageUrl:
      "https://upload.wikimedia.org/wikipedia/en/8/87/SharperFilmPoster.jpg",
    displayName: "Sharper",
    format: "Movie",
    genres: ["Crime", "Thriller"],
    summary:
      "Sharper is a 2023 American crime thriller film directed by Benjamin Caron and written by Brian Gatewood and Alessandro Tanaka. The film stars Julianne Moore, Sebastian Stan, Justice Smith, Briana Middleton, and John Lithgow.",
    id: "747c7a66-aaf8-46a3-b6ba-d210e49af506",
    rating: 0.6293136625098041,
  },
  {
    displayImageUrl:
      "https://upload.wikimedia.org/wikipedia/en/5/58/YourPlaceOrMinePoster.jpg",
    displayName: "Your Place or Mine",
    format: "Movie",
    genres: ["Comedy", "Romance"],
    summary:
      "Your Place or Mine is a 2023 American romantic comedy film written and directed by Aline Brosh McKenna in her directorial debut. The film stars Reese Witherspoon and Ashton Kutcher as best friends who decide to swap houses for a week. Jesse Williams, Zoë Chao, Wesley Kimmel, Tig Notaro, and Steve Zahn also star. The film was released on Netflix on February 10, 2023. It received mixed to negative reviews from critics, who criticised the lack of chemistry between Witherspoon and Kutcher.",
    id: "732a19b9-3ea1-4d23-a5c8-649b45664f33",
    rating: 0.25755735704544347,
  },
  {
    displayImageUrl:
      "https://upload.wikimedia.org/wikipedia/en/9/94/SomebodyIUsedToKnowFilm.jpg",
    displayName: "Somebody I Used to Know",
    format: "Movie",
    genres: ["Comedy", "Romance"],
    summary:
      "Somebody I Used to Know is a 2023 American romantic comedy film directed by Dave Franco and co-written with his wife Alison Brie. The film stars Brie, Jay Ellis and Kiersey Clemons. It was released on Amazon Prime Video on February 10, 2023.",
    id: "0108cafe-9dae-4409-94ed-448d26a77644",
    rating: 0.23963676284860114,
  },
  {
    displayImageUrl:
      "https://upload.wikimedia.org/wikipedia/en/4/49/ConsecrationPoster.png",
    displayName: "Consecration",
    format: "Movie",
    genres: ["Horror", "Supernatural", "Thriller"],
    summary:
      "Consecration is a 2023 supernatural horror-thriller film directed by Cristopher Smith from a script he co-wrote with Laurie Cook, and starring Jena Malone, Danny Huston and Janet Suzman. Shot in Scotland on the Isle of Skye, the film was released in the United Kingdom and United States on February 10, 2023.",
    id: "70460abf-929a-4eb2-81bb-1919b65a36cc",
    rating: 0.38456119539698874,
  },
  {
    displayImageUrl:
      "https://upload.wikimedia.org/wikipedia/en/a/a1/The_Outwaters_%282022%29_poster.jpg",
    displayName: "The Outwaters",
    format: "Movie",
    genres: ["Horror"],
    summary:
      "The Outwaters is a 2022 American horror film written, directed by, and starring Robbie Banfitch. It is presented as found footage from memory cards belonging to a group of friends who venture into the Mojave Desert to shoot a music video, where they encounter mysterious and threatening phenomena.",
    id: "cc32a9d0-f67f-4c4d-9926-e6838c8e3b83",
    rating: 0.033864419676707946,
  },
  {
    displayImageUrl:
      "https://upload.wikimedia.org/wikipedia/en/3/30/Ant-Man_and_the_Wasp_Quantumania_poster.jpg",
    displayName: "Ant-Man and the Wasp: Quantumania",
    format: "Movie",
    genres: ["Superhero"],
    summary:
      "Ant-Man and the Wasp: Quantumania is a 2023 American superhero film based on Marvel Comics featuring the characters Scott Lang / Ant-Man and Hope Pym / Wasp. Produced by Marvel Studios and distributed by Walt Disney Studios Motion Pictures, it is the sequel to Ant-Man (2015) and Ant-Man and the Wasp (2018) and the 31st film in the Marvel Cinematic Universe (MCU). The film was directed by Peyton Reed, written by Jeff Loveness, and stars Paul Rudd as Scott Lang and Evangeline Lilly as Hope van Dyne, alongside Jonathan Majors, Kathryn Newton, David Dastmalchian, Katy O'Brian, William Jackson Harper, Bill Murray, Michelle Pfeiffer, Corey Stoll, and Michael Douglas. In the film, Lang and Van Dyne are transported to the Quantum Realm along with their family and face Kang the Conqueror (Majors).",
    id: "bdd61b05-43dc-4ce7-b8eb-ca0d024e45da",
    rating: 0.4784190732176927,
  },
  {
    displayImageUrl:
      "https://upload.wikimedia.org/wikipedia/en/a/ab/Cocaine_Bear_poster.jpg",
    displayName: "Cocaine Bear",
    format: "Movie",
    genres: ["Comedy", "Horror", "Thriller"],
    summary:
      'Cocaine Bear is a 2023 American comedy horror thriller film directed by Elizabeth Banks and written by Jimmy Warden. It is loosely inspired by the true story of the "Cocaine Bear", an American black bear that ingested nearly 75 lb (34 kg) of lost cocaine. It stars Keri Russell, O\'Shea Jackson Jr., Christian Convery, Alden Ehrenreich, Brooklynn Prince, Isiah Whitlock Jr., Margo Martindale, and Ray Liotta. The film is dedicated to Liotta, who died in May 2022.',
    id: "a277d3d0-dc63-4c92-a35c-7530f07c1418",
    rating: 0.7773768556379008,
  },
  {
    displayImageUrl:
      "https://upload.wikimedia.org/wikipedia/en/a/a3/We_have_a_ghost_poster.png",
    displayName: "We Have a Ghost",
    format: "Movie",
    genres: ["Comedy", "Horror", "Supernatural"],
    summary:
      'We Have a Ghost is 2023 American supernatural horror comedy film written and directed by Christopher Landon, based on the 2017 short story "Ernest" by Geoff Manaugh. It stars David Harbour, Jahi Winston, Tig Notaro, Jennifer Coolidge, and Anthony Mackie. It was released on February 24, 2023, by Netflix and received mixed reviews from film critics.',
    id: "17aa23e7-e811-4cc9-b50d-50554819800e",
    rating: 0.5879526343192762,
  },
  {
    displayImageUrl:
      "https://upload.wikimedia.org/wikipedia/en/b/b5/Luther_-_The_Fallen_Sun_%282023%29_Poster.jpg",
    displayName: "Luther: The Fallen Sun",
    format: "Movie",
    genres: ["Crime", "Thriller"],
    summary:
      "Luther: The Fallen Sun is a 2023 crime thriller film directed by Jamie Payne and written by Neil Cross. It serves as a film continuation of Luther. The film stars Idris Elba, reprising his role as John Luther, with Cynthia Erivo and Andy Serkis.",
    id: "c42b976b-6c9d-4829-a4b9-e9ab9e5329b1",
    rating: 0.40137901495988393,
  },
  {
    displayImageUrl:
      "https://upload.wikimedia.org/wikipedia/en/e/e3/JesusRevolutionPoster.png",
    displayName: "Jesus Revolution",
    format: "Movie",
    genres: ["Drama"],
    summary:
      "Jesus Revolution is a 2023 American Christian drama film directed by Jon Erwin and Brent McCorkle. Based on the book of the same name, the film follows youth minister Greg Laurie, Christian hippie Lonnie Frisbee, and pastor Chuck Smith as they take part in the Jesus movement in California during the late 1960s. Anna Grace Barlow and Kimberly Williams-Paisley also star. The film was theatrically released in the United States on February 24, 2023, by Lionsgate. The film received mixed reviews from critics but was well-received by audiences, and has grossed $51.7 million.",
    id: "05cdc7d6-8ef1-416d-8471-4b1333fdf8ae",
    rating: 0.8433100169777694,
  },
  {
    displayImageUrl:
      "https://upload.wikimedia.org/wikipedia/en/2/2b/BruiserPoster.png",
    displayName: "Bruiser",
    format: "Movie",
    genres: ["Drama", "War"],
    summary:
      "Bruiser is a 2022 American drama film written by Ben Medina and Miles Warren, directed by Warren and starring Trevante Rhodes, Shamier Anderson, Jalyn Hall and Shinelle Azoroh.",
    id: "74027dd0-7073-4ce1-bfb4-43536a6547ca",
    rating: 0.0935459913763863,
  },
  {
    displayImageUrl:
      "https://upload.wikimedia.org/wikipedia/en/e/e7/Linoleum_%28film%29.png",
    displayName: "Linoleum",
    format: "Movie",
    genres: ["Comedy", "Drama", "Science Fiction"],
    summary:
      "Linoleum is a 2022 American science fiction comedy-drama film written and directed by Colin West and starring Jim Gaffigan. It premiered at the 2022 South by Southwest festival on March 12, 2022. It was released in select theaters in the United States on February 24, 2023, by Shout! Studios.",
    id: "07729acd-412f-4f96-90e4-061d61221baa",
    rating: 0.4275577875769607,
  },
  {
    displayName: "God's Time",
    format: "Movie",
    genres: [],
    id: "3d0d1cc4-e19a-4686-ab26-dcc7c03c29b7",
    rating: 0.1861875453888464,
  },
  {
    displayImageUrl:
      "https://upload.wikimedia.org/wikipedia/en/c/c2/Creed_III_poster.png",
    displayName: "Creed III",
    format: "Movie",
    genres: ["Drama", "Sports"],
    summary:
      "Creed III is a 2023 American sports drama film directed, produced by and starring Michael B. Jordan from a screenplay by Keenan Coogler and Zach Baylin. It is the sequel to Creed II (2018), the third in the Creed film series, and the ninth overall in the Rocky film series. It also stars Tessa Thompson, Jonathan Majors, Wood Harris, Mila Davis-Kent, Florian Munteanu and Phylicia Rashad. In the film, the accomplished and recently retired boxer Adonis Creed (Jordan) comes face-to-face with his childhood friend and former boxing prodigy Damian Anderson (Majors).",
    id: "5e3673d4-2531-4e40-8391-6da1b54653c2",
    rating: 0.6809292941121703,
  },
  {
    displayImageUrl:
      "https://upload.wikimedia.org/wikipedia/en/2/21/Operation_Fortune.jpg",
    displayName: "Operation Fortune: Ruse de Guerre",
    format: "Movie",
    genres: ["Action", "Comedy", "Spy"],
    summary:
      "Operation Fortune: Ruse de Guerre is a 2023 spy action comedy film directed by Guy Ritchie, and written by Ritchie, Ivan Atkinson, and Marn Davies. The film stars Jason Statham, Aubrey Plaza, Josh Hartnett, Cary Elwes, Bugzy Malone and Hugh Grant. The film is about a spy, Orson Fortune (Statham), who must retrieve a stolen high-tech device before an arms dealer (Grant) can sell it to the highest bidder.",
    id: "f651e101-48c3-477f-897a-40ab631e9736",
    rating: 0.5518724977725478,
  },
  {
    displayImageUrl:
      "https://upload.wikimedia.org/wikipedia/en/6/6c/A_Little_White_Lie_Poster.png",
    displayName: "A Little White Lie",
    format: "Movie",
    genres: ["Comedy", "Independent"],
    summary:
      "A Little White Lie is a 2022 American independent comedy film written and directed by Michael Maren and based on the 2013 novel Shriver by Chris Belden. It stars Michael Shannon, Kate Hudson, Don Johnson, and Zach Braff. The film is about a handyman with the same name as a famous writer who is mistakenly invited to a literary festival and is welcomed by fans and writers, but is exposed as an imposter when the real Shriver arrives.",
    id: "c7c94910-3c9e-4fc0-9893-63f8c755f440",
    rating: 0.15431726192697948,
  },
  {
    displayImageUrl:
      "https://upload.wikimedia.org/wikipedia/en/8/87/Children_of_the_Corn_%282020_film%29.jpg",
    displayName: "Children of the Corn",
    format: "Movie",
    genres: ["Slasher", "Supernatural"],
    summary:
      'Children of the Corn is a 2020 American supernatural slasher film written and directed by Kurt Wimmer. It stars Elena Kampouris, Kate Moyer, Callan Mulvey and Bruce Spence. The film is the third adaptation of Stephen King\'s short story "Children of the Corn" (1977).',
    id: "56077e09-817b-4d1c-a349-c82285fc75cc",
    rating: 0.7782979523618652,
  },
  {
    displayImageUrl:
      "https://upload.wikimedia.org/wikipedia/en/0/03/Palm_Trees_and_Power_Lines.jpg",
    displayName: "Palm Trees and Power Lines",
    format: "Movie",
    genres: ["Drama", "Short"],
    summary:
      "Palm Trees and Power Lines is a 2022 American coming-of-age drama film directed by Jamie Dack in her feature directorial debut, based on her 2018 short film of the same name. The screenplay by Dack and Audrey Findlay is from a story by Dack. The film stars Lily McInerny as a disconnected teenage girl falling into a relationship with a man twice her age. It also stars Jonathan Tucker and Gretchen Mol.",
    id: "dab80235-ed44-4002-b475-e3eaf4d71ce9",
    rating: 0.2955244384226312,
  },
  {
    displayName: "Hunt Her, Kill Her",
    format: "Movie",
    genres: [],
    id: "853cbc3a-cccf-4105-9ece-d1aacf55ae1d",
    rating: 0.9210465435463042,
  },
  {
    displayImageUrl:
      "https://upload.wikimedia.org/wikipedia/en/6/60/UnseenPoster.jpg",
    displayName: "Unseen",
    format: "Movie",
    genres: ["Horror", "Thriller"],
    summary:
      "Unseen is a 2023 American horror thriller film directed by Yoko Okumura in her directorial debut and written by Salvatore Cardoni and Brian Rawlins. The film stars Midori Francis, Jolene Purdy and Missi Pyle. Jason Blum serves as an executive producer through his Blumhouse Television banner.",
    id: "e360f72f-3646-4332-831b-11187ce932c8",
    rating: 0.9692553693012593,
  },
  {
    displayImageUrl:
      "https://upload.wikimedia.org/wikipedia/en/c/c9/Scream_VI_poster.jpg",
    displayName: "Scream VI",
    format: "Movie",
    genres: ["Slasher"],
    summary:
      'Scream VI is a 2023 American slasher film directed by Matt Bettinelli-Olpin and Tyler Gillett, and written by James Vanderbilt and Guy Busick. It is the sequel to Scream (2022) and the sixth installment in the Scream film series. The film stars Melissa Barrera, Jenna Ortega, Jasmin Savoy Brown, Mason Gooding, Hayden Panettiere, and Courteney Cox, all reprising their roles from previous installments, alongside Josh Segarra, Jack Champion, Devyn Nekoda, Liana Liberato, Tony Revolori, Samara Weaving, Henry Czerny, and Dermot Mulroney joining the ensemble cast. Scream VI follows a new Ghostface killer who targets the survivors of the "Woodsboro legacy attacks" in New York City. Like its predecessors, the film combines the violence of the slasher genre with elements of black comedy and a "whodunit" mystery, and satirizes the trends of film franchises and subversion of audience expectations.',
    id: "97a210b8-ca5e-4d62-bbae-1f5ad51f4393",
    rating: 0.6970432557169413,
  },
  {
    displayImageUrl:
      "https://upload.wikimedia.org/wikipedia/en/c/c4/65_film_teaser_poster.jpg",
    displayName: "65",
    format: "Movie",
    genres: ["Action", "Science Fiction", "Thriller"],
    summary:
      "65 is a 2023 American science fiction action thriller film written and directed by Scott Beck and Bryan Woods and starring Adam Driver and Ariana Greenblatt. It is a co-production between Columbia Pictures, Bron Creative, Raimi Productions, TSG Entertainment, and Beck/Woods. In the film, a pilot crashes on an unknown planet, which turns out to be Earth during the Cretaceous period, and fights to survive the dangerous prehistoric environment.",
    id: "9e791c3d-885b-47d6-86f1-0b99983b4a9f",
    rating: 0.9371690329755447,
  },
  {
    displayImageUrl:
      "https://upload.wikimedia.org/wikipedia/en/7/74/Champions_xlg.png",
    displayName: "Champions",
    format: "Movie",
    genres: ["Comedy", "Sports"],
    summary:
      "Champions is a 2023 American sports comedy film directed by Bobby Farrelly in his solo directorial debut, from a screenplay written by Mark Rizzo. It is an English-language remake of the 2018 Spanish film of the same name. The film stars Woody Harrelson as a temperamental minor-league basketball coach who after an arrest must coach a team of players with intellectual disabilities as community service; Kaitlin Olson, Ernie Hudson, and Cheech Marin also star.",
    id: "8e31c45b-0050-47c6-9417-789cac006c70",
    rating: 0.7061298980259008,
  },
  {
    displayImageUrl:
      "https://upload.wikimedia.org/wikipedia/en/7/78/Chang_can_dunk.png",
    displayName: "Chang Can Dunk",
    format: "Movie",
    genres: ["Drama", "Sports"],
    summary:
      "Chang Can Dunk is a 2023 American sports-drama film written and directed by Jingyi Shao in his feature length debut, starring Bloom Li, Dexter Darden, Ben Wang, Zoe Renee, Chase Liefeld and Mardy Ma. The film is an underdog coming-of-age story, involving high school basketball and the titular character's determination to overcome expectations.",
    id: "739078c0-c8c0-45d3-ac18-25b8440e826d",
    rating: 0.15632837413373402,
  },
  {
    displayName: "Southern Gospel",
    format: "Movie",
    genres: [],
    id: "dfc71601-e1f8-4537-a6ac-594a11881f45",
    rating: 0.6725005139187432,
  },
  {
    displayImageUrl:
      "https://upload.wikimedia.org/wikipedia/en/f/fb/Shazam%21_Fury_of_the_Gods_%282023%29_Main_Poster.png",
    displayName: "Shazam! Fury of the Gods",
    format: "Movie",
    genres: ["Superhero"],
    summary:
      "Shazam! Fury of the Gods is a 2023 American superhero film based on the DC character Shazam. Produced by New Line Cinema, DC Films, and the Safran Company, and distributed by Warner Bros. Pictures, it is the sequel to Shazam! (2019) and the 12th installment in the DC Extended Universe (DCEU). Directed by David F. Sandberg, produced by Peter Safran, and written by Henry Gayden and Chris Morgan, it stars Zachary Levi, Asher Angel, Jack Dylan Grazer, Rachel Zegler, Adam Brody, Ross Butler, D. J. Cotrona, Grace Fulton, Meagan Good, Lucy Liu, Djimon Hounsou and Helen Mirren. In the film, Billy Batson / Shazam and his foster siblings fight the Daughters of Atlas.",
    id: "b8ae0436-8030-4775-88bd-abf2912ec2cb",
    rating: 0.0390775865769486,
  },
  {
    displayImageUrl:
      "https://upload.wikimedia.org/wikipedia/en/f/fb/Boston_Strangler_Poster.png",
    displayName: "Boston Strangler",
    format: "Movie",
    genres: ["Crime", "Drama", "Historical"],
    summary:
      "Boston Strangler is a 2023 American historical crime drama film written and directed by Matt Ruskin. It is based on the true story of the Boston Strangler, who, in 1960s Boston, killed 13 women. The film stars Keira Knightley as Loretta McLaughlin, the reporter who broke the news for the Boston Record American, with Carrie Coon, Alessandro Nivola, Chris Cooper, David Dastmalchian, and Morgan Spector.",
    id: "5dad9e62-3f78-4034-b2d7-d5efeaa6bc44",
    rating: 0.4161878585056935,
  },
  {
    displayImageUrl:
      "https://upload.wikimedia.org/wikipedia/en/3/3e/The_Magician%27s_Elephant_poster.jpg",
    displayName: "The Magician's Elephant",
    format: "Movie",
    genres: ["Adventure", "Animated", "Fantasy"],
    summary:
      "The Magician's Elephant is a 2023 computer-animated fantasy adventure film directed by Wendy Rogers, written by Martin Hynes and produced by Julia Pistor. Based on the 2009 novel of the same name by Kate DiCamillo, the film features the voices of Noah Jupe, Mandy Patinkin, Natasia Demetriou, Benedict Wong, Miranda Richardson and Aasif Mandvi. Animated by Animal Logic, the film was distributed by Netflix and released on March 17, 2023. The film received mixed reviews from critics.",
    id: "dfcfb5d2-9ae4-4491-a0d5-20ca1e192235",
    rating: 0.9437046726764462,
  },
  {
    displayImageUrl:
      "https://upload.wikimedia.org/wikipedia/en/9/9c/MovingOnPoster.jpg",
    displayName: "Moving On",
    format: "Movie",
    genres: ["Comedy"],
    summary:
      "Moving On is a 2022 American comedy film written and directed by Paul Weitz. The film stars Jane Fonda, Lily Tomlin, Malcolm McDowell, Sarah Burns, and Richard Roundtree.",
    id: "387a96ef-413d-4878-a7a3-93b479f3f132",
    rating: 0.19386382900968857,
  },
  {
    displayImageUrl:
      "https://upload.wikimedia.org/wikipedia/en/0/04/Wildflower_Film_Poster.png",
    displayName: "Wildflower",
    format: "Movie",
    genres: ["Teen"],
    summary:
      "Wildflower is a 2022 American coming of age film directed by Matt Smukler and written by Jana Savage from a story from Smukler and Savage. It stars Kiernan Shipka, Dash Mihok, Charlie Plummer, Alexandra Daddario, Reid Scott, Erika Alexander, Samantha Hyde and Jacki Weaver.",
    id: "c3cbf6b9-a0ad-4048-a373-1211265ffd46",
    rating: 0.8083796569957717,
  },
  {
    displayImageUrl:
      "https://upload.wikimedia.org/wikipedia/en/d/d4/Supercell_poster.jpg",
    displayName: "Supercell",
    format: "Movie",
    genres: ["Action", "Disaster"],
    summary:
      "Supercell is a 2023 American disaster action film directed by Herbert James Winterstern from a screenplay that he wrote with Anna Elizabeth James. It stars Skeet Ulrich, Anne Heche, Daniel Diemer, Jordan Kristine Seamón and Alec Baldwin.",
    id: "355fc1d2-c7a5-499b-8d42-302163c5ad63",
    rating: 0.39969058009336234,
  },
  {
    displayName: "Pinball: The Man Who Saved the Game",
    format: "Movie",
    genres: [],
    id: "e9211209-b81f-4cc8-8a4d-3e1090a3d389",
    rating: 0.870285566155385,
  },
  {
    displayImageUrl:
      "https://upload.wikimedia.org/wikipedia/en/d/d0/John_Wick_-_Chapter_4_promotional_poster.jpg",
    displayName: "John Wick: Chapter 4",
    format: "Movie",
    genres: ["Action", "Noir", "Thriller"],
    summary:
      "John Wick: Chapter 4 is a 2023 American neo-noir action thriller film directed by Chad Stahelski and written by Shay Hatten and Michael Finch. The sequel to John Wick: Chapter 3 – Parabellum (2019) and the fourth installment in the John Wick franchise, it stars Keanu Reeves as the title character, alongside Donnie Yen, Bill Skarsgård, Laurence Fishburne, Hiroyuki Sanada, Shamier Anderson, Lance Reddick, Rina Sawayama, Scott Adkins, Clancy Brown, and Ian McShane. In the film, John Wick sets out to get revenge on the High Table and those who left him for dead.",
    id: "e7a57f6b-a824-472d-a091-6285a6ee9ca1",
    rating: 0.41336724967393934,
  },
  {
    displayImageUrl:
      "https://upload.wikimedia.org/wikipedia/en/b/b8/A_Good_Person_poster.jpg",
    displayName: "A Good Person",
    format: "Movie",
    genres: ["Drama"],
    summary:
      "A Good Person is a 2023 American drama film written, directed, and produced by Zach Braff. The film stars Florence Pugh, Molly Shannon, Chinaza Uche, Celeste O'Connor, and Morgan Freeman.",
    id: "231ddb40-6b71-4989-858d-24314a49b898",
    rating: 0.9492125836671073,
  },
  {
    displayName: "The Tutor",
    format: "Movie",
    genres: [],
    id: "50f5dccc-0205-447a-bbd5-5b66b88cd912",
    rating: 0.12163788269040432,
  },
  {
    displayImageUrl:
      "https://upload.wikimedia.org/wikipedia/en/0/03/Theatrical_poster_for_Dungeons_and_Dragons%2C_Honor_Among_Thieves.jpg",
    displayName: "Dungeons & Dragons: Honor Among Thieves",
    format: "Movie",
    genres: ["Fantasy", "Action"],
    summary:
      "Dungeons & Dragons: Honor Among Thieves is a 2023 American fantasy heist film directed by Jonathan Goldstein and John Francis Daley, who co-wrote the screenplay with Michael Gilio from a story by Chris McKay and Gilio. Based on the tabletop role-playing game Dungeons & Dragons, it is set in the Forgotten Realms campaign setting and has no connections to the film trilogy released between 2000 and 2012. The film stars Chris Pine, Michelle Rodriguez, Regé-Jean Page, Justice Smith, Sophia Lillis, and Hugh Grant.",
    id: "e5a07e75-fe83-45bc-945e-ead334cadc0a",
    rating: 0.3872699211212338,
  },
  {
    displayImageUrl:
      "https://upload.wikimedia.org/wikipedia/en/7/71/Murder_Mystery_2_poster.png",
    displayName: "Murder Mystery 2",
    format: "Movie",
    genres: ["Action", "Comedy", "Mystery"],
    summary:
      "Murder Mystery 2 is a 2023 American action comedy mystery film directed by Jeremy Garelick and written by James Vanderbilt. It is a sequel to the 2019 film Murder Mystery, and stars Adam Sandler and Jennifer Aniston.",
    id: "bdf60693-a8b2-4874-8f88-9a54dcb13706",
    rating: 0.6598665513639306,
  },
  {
    displayImageUrl:
      "https://upload.wikimedia.org/wikipedia/en/b/b1/Tetris_poster.jpg",
    displayName: "Tetris",
    format: "Movie",
    genres: ["Thriller", "Biography"],
    summary:
      "Tetris is a 2023 biographical thriller film directed by Jon S. Baird, written by Noah Pink, and starring Taron Egerton, Nikita Efremov, Sofia Lebedeva, Anthony Boyle, Toby Jones and Roger Allam. It is based on true events around the race to license and patent the video game Tetris in the late 1980s during the Cold War.",
    id: "8b38fbf9-483f-4864-8e3e-3bda108de85a",
    rating: 0.1195705657709425,
  },
  {
    displayImageUrl:
      "https://upload.wikimedia.org/wikipedia/en/8/87/Spinning_gold_poster.png",
    displayName: "Spinning Gold",
    format: "Movie",
    genres: ["Drama", "Biography"],
    summary:
      "Spinning Gold is a 2023 American biographical drama film written and directed by Timothy Scott Bogart. It is based on the life of his father, Casablanca Records founder Neil Bogart.",
    id: "a77dc585-79ef-4b7a-91eb-206544915919",
    rating: 0.8334352542194627,
  },
  {
    displayName: "Space Oddity",
    format: "Movie",
    genres: ["Comedy", "Science Fiction", "Romance"],
    summary:
      "Space Oddity is an American romantic comedy science fiction film directed by Kyra Sedgwick.",
    id: "0bc6f240-ee2d-44ef-afdb-cca87582f167",
    rating: 0.5561224546368146,
  },
  {
    displayImageUrl:
      "https://upload.wikimedia.org/wikipedia/en/b/b1/Thousand_and_One_poster.png",
    displayName: "A Thousand and One",
    format: "Movie",
    genres: ["Drama"],
    summary:
      "A Thousand and One is a 2023 American drama film, written and directed by A.V. Rockwell. It stars Teyana Taylor, Will Catlett, Josiah Cross, Aven Courtney and Aaron Kingsley Adetola. It had its world premiere at the 2023 Sundance Film Festival on January 22, 2023 and won the Grand Jury Prize. It was released on March 31, 2023, by Focus Features.",
    id: "5b663ae3-1c49-48ae-91f2-c5f3edc968a1",
    rating: 0.8707143691809123,
  },
  {
    displayImageUrl:
      "https://upload.wikimedia.org/wikipedia/en/e/ee/Assassin_2023_poster.png",
    displayName: "Assassin",
    format: "Movie",
    genres: ["Action", "Science Fiction"],
    summary:
      "Assassin is a 2023 American science fiction action film starring Nomzamo Mbatha, Dominic Purcell and Bruce Willis. It was directed by Jesse Atlas, in his feature film directorial debut, written by Aaron Wolfe, and is based on Atlas and Wolfe's short film Let Them Die Like Lovers.",
    id: "6b100a7c-3f06-4c51-906a-0e09e6f5ed3b",
    rating: 0.7843719238691793,
  },
  {
    displayImageUrl:
      "https://upload.wikimedia.org/wikipedia/en/6/65/Acidman_film_poster.png",
    displayName: "Acidman",
    format: "Movie",
    genres: ["Drama", "Science Fiction"],
    summary:
      "Acidman is a 2022 American science fiction drama film directed by Alex Lehmann and written by Lehmann and Chris Dowling. It stars Thomas Haden Church and Dianna Agron.",
    id: "938fbc8c-d772-498d-9c93-8bdabde42940",
    rating: 0.29155318277579756,
  },
  {
    displayImageUrl:
      "https://upload.wikimedia.org/wikipedia/en/a/a4/Malum_%282023%29_poster.jpg",
    displayName: "Malum",
    format: "Movie",
    genres: ["Horror"],
    summary:
      "Malum is a 2023 American horror film directed by Anthony DiBlasi, who co-wrote the film with Scott Poiley. It is a reboot/reimagining of the 2014 film Last Shift, also directed by DiBlasi. Malum stars Jessica Sula, Eric Olson, Chaney Morrow and Candice Coke.",
    id: "a6fc7f75-6f35-4773-a675-2ab6307b2897",
    rating: 0.3306807087658328,
  },
  {
    displayImageUrl:
      "https://upload.wikimedia.org/wikipedia/en/4/44/The_Super_Mario_Bros._Movie_poster.jpg",
    displayName: "The Super Mario Bros. Movie",
    format: "Movie",
    genres: ["Adventure", "Animated"],
    summary:
      "The Super Mario Bros. Movie is a 2023 American computer-animated adventure film based on Nintendo's Mario video game franchise. Produced by Illumination, Universal Pictures, and Nintendo, and distributed by Universal, it was directed by Aaron Horvath and Michael Jelenic from a screenplay by Matthew Fogel. The ensemble voice cast includes Chris Pratt, Anya Taylor-Joy, Charlie Day, Jack Black, Keegan-Michael Key, Seth Rogen, and Fred Armisen. The film features an origin story for the brothers Mario and Luigi, Italian-American plumbers who are transported to an alternate world and become entangled in a battle between the Mushroom Kingdom, led by Princess Peach, and the Koopas, led by Bowser.",
    id: "c4773958-52cc-4f70-a864-a09a8948e49e",
    rating: 0.9016411271108775,
  },
  {
    displayImageUrl:
      "https://upload.wikimedia.org/wikipedia/en/d/de/AirFilmPoster.png",
    displayName: "Air",
    format: "Movie",
    genres: ["Drama", "Sports", "Biography"],
    summary:
      "Air is a 2023 American biographical sports drama film directed by Ben Affleck from a screenplay written by Alex Convery. It is based on true events about the origin of Air Jordan, a basketball shoeline, of which a Nike employee seeks to strike a business deal with rookie player Michael Jordan. The film stars Matt Damon, Affleck, Jason Bateman, Marlon Wayans, Chris Messina, Chris Tucker, and Viola Davis.",
    id: "3c2cec14-8f83-4136-a2a9-b4c4ec417866",
    rating: 0.5279518614134786,
  },
  {
    displayName: "Praise This",
    format: "Movie",
    genres: ["Comedy", "Musical"],
    summary:
      "Praise This is a 2023 American musical comedy film directed by Tina Gordon and starring Chloe Bailey and Anjelika Washington.",
    id: "d7551ec0-fa56-494f-bf12-453be33eecde",
    rating: 0.23849134006717043,
  },
  {
    displayImageUrl:
      "https://upload.wikimedia.org/wikipedia/en/3/3a/Showing_Up_film_poster.png",
    displayName: "Showing Up",
    format: "Movie",
    genres: ["Comedy", "Drama"],
    summary:
      "Showing Up is a 2022 American comedy-drama film co-written and directed by Kelly Reichardt, in her fourth collaboration with actress Michelle Williams.",
    id: "d3450266-8644-41ad-9150-f5b07eebbf20",
    rating: 0.3357864543147149,
  },
  {
    displayImageUrl:
      "https://upload.wikimedia.org/wikipedia/en/5/59/Paint_Poster.png",
    displayName: "Paint",
    format: "Movie",
    genres: ["Comedy"],
    summary:
      "Paint is a 2023 American comedy film written and directed by Brit McAdams. The film stars Owen Wilson, Michaela Watkins, Ciara Renée, Stephen Root, Wendi McLendon-Covey, Lucy Freyer, Lusia Strus, and Michael Pemberton.",
    id: "d18a437f-4d8f-4767-bc4a-02c574cf9228",
    rating: 0.36707582558170326,
  },
  {
    displayImageUrl:
      "https://upload.wikimedia.org/wikipedia/en/a/a2/On_a_Wing_and_a_Prayer_poster.jpg",
    displayName: "On a Wing and a Prayer",
    format: "Movie",
    genres: ["Biography"],
    summary:
      "On a Wing and a Prayer is a 2023 American biographical survival film directed by Sean McNamara and starring Dennis Quaid, Heather Graham, and Jesse Metcalfe. It was released on April 7, 2023.",
    id: "0409b991-00f9-4e13-9089-84a8ed583463",
    rating: 0.21285739468909415,
  },
  {
    displayImageUrl:
      "https://upload.wikimedia.org/wikipedia/en/a/a8/Chupa_movie_poster.jpg",
    displayName: "Chupa",
    format: "Movie",
    genres: ["Adventure", "Fantasy"],
    summary:
      "Chupa is a 2023 American fantasy adventure film directed by Jonás Cuarón, and starring Demián Bichir and Christian Slater. Produced by 26th Street Pictures, it was released on April 7, 2023, on Netflix.",
    id: "48f2dd1a-43bd-41f9-8e86-c2f5d365c4e5",
    rating: 0.7695867635901159,
  },
  {
    displayImageUrl:
      "https://upload.wikimedia.org/wikipedia/en/a/aa/HowtoblowuppipelinePoster.png",
    displayName: "How to Blow Up a Pipeline",
    format: "Movie",
    genres: ["Action"],
    summary:
      "How to Blow Up a Pipeline is a 2022 environmentalist action film directed by Daniel Goldhaber, who co-wrote the screenplay with Ariela Barer and Jordan Sjol. It relies on ideas advanced in Andreas Malm's 2021 book of the same name, published by Verso Books. It stars Barer, Kristine Froseth, Lukas Gage, Forrest Goodluck, Sasha Lane, Jayme Lawson, Marcus Scribner, Jake Weary and Irene Bedard.",
    id: "c95eec8c-e212-4971-96a8-bce55129e51c",
    rating: 0.7904145983749575,
  },
  {
    displayImageUrl:
      "https://upload.wikimedia.org/wikipedia/en/4/4e/One_True_Loves_poster.jpg",
    displayName: "One True Loves",
    format: "Movie",
    genres: ["Romance"],
    summary:
      "One True Loves is a 2023 American romance film directed and produced by Andy Fickman as an adaptation of the 2016 novel of the same name by Taylor Jenkins Reid. It stars Phillipa Soo, Simu Liu and Luke Bracey.",
    id: "effb3533-1e65-484b-aa88-05b795edacfd",
    rating: 0.7092395698628149,
  },
  {
    displayName: "Beautiful Disaster",
    format: "Movie",
    genres: [],
    id: "5191fe21-aa48-442f-a083-bda679dcc608",
    rating: 0.8348872263217231,
  },
  {
    displayImageUrl:
      "https://upload.wikimedia.org/wikipedia/en/b/b1/Poster_Renfield.jpg",
    displayName: "Renfield",
    format: "Movie",
    genres: ["Comedy", "Horror", "Supernatural"],
    summary:
      "Renfield is a 2023 American supernatural comedy horror film directed and co-produced by Chris McKay and written by Ryan Ridley from an original idea by Robert Kirkman. Featuring characters from Bram Stoker's 1897 novel Dracula, the film stars Nicholas Hoult as the title character and Nicolas Cage as Dracula, with Awkwafina, Ben Schwartz, Adrian Martinez, and Shohreh Aghdashloo in supporting roles.",
    id: "43efdb14-1899-45c5-8fe0-da7f29d564c4",
    rating: 0.7639727162751715,
  },
  {
    displayImageUrl:
      "https://upload.wikimedia.org/wikipedia/en/b/bd/ThePopesExorcistPoster.png",
    displayName: "The Pope's Exorcist",
    format: "Movie",
    genres: ["Horror", "Supernatural"],
    summary:
      "The Pope's Exorcist is a 2023 American supernatural horror film directed by Julius Avery, and starring Russell Crowe as Father Gabriele Amorth. The film also stars Daniel Zovatto, Alex Essoe and Franco Nero. It is based on Amorth's memoirs An Exorcist Tells His Story and An Exorcist: More Stories.",
    id: "4f49465a-a905-4ec0-9fdc-c4d41e71e716",
    rating: 0.4397130490863217,
  },
  {
    displayImageUrl:
      "https://upload.wikimedia.org/wikipedia/en/4/48/Mafia_mamma_film.png",
    displayName: "Mafia Mamma",
    format: "Movie",
    genres: ["Action", "Comedy"],
    summary:
      "Mafia Mamma is an upcoming American action comedy film directed by Catherine Hardwicke, from a screenplay by Michael J. Feldman and Debbie Jhoon, and based on an original story by Amanda Sthers. It stars Toni Collette as an American woman who travels to Italy following the death of her grandfather, who she finds out was a mafia Don. Monica Bellucci and Sophia Nomvete also star.",
    id: "a6d75528-9c0d-4abd-a58a-ecc239dfeacc",
    rating: 0.5021672488891116,
  },
  {
    displayImageUrl:
      "https://upload.wikimedia.org/wikipedia/en/8/83/Sweetwater_2023_Poster.png",
    displayName: "Sweetwater",
    format: "Movie",
    genres: ["Independent", "Sports", "Biography"],
    summary:
      "Sweetwater is an upcoming American sports biographical independent film directed and written by Martin Guigui. It stars Everett Osborne, Cary Elwes, Jeremy Piven, Richard Dreyfuss and Kevin Pollak. Osborne portrays Nat Clifton as the film depicts the true story of his career in the 1950s, starting with the Harlem Globetrotters before becoming the second African-American to sign a contract with the National Basketball Association (NBA).",
    id: "30a1a03d-a8fb-4548-9699-26080d6b4646",
    rating: 0.30938586554215397,
  },
  {
    displayName: "Rare Objects",
    format: "Movie",
    genres: [],
    id: "e9bd9ec8-abb0-4d8b-b794-7c1ed6e2cfb7",
    rating: 0.49369343457368364,
  },
  {
    displayName: "Quasi",
    format: "Movie",
    genres: [],
    id: "b28d62b9-079a-4fd2-8b18-689866895ff3",
    rating: 0.06197133592669113,
  },
  {
    displayImageUrl:
      "https://upload.wikimedia.org/wikipedia/en/9/98/EvilDeadRiseTeaser.jpg",
    displayName: "Evil Dead Rise",
    format: "Movie",
    genres: ["Horror", "Supernatural"],
    summary:
      "Evil Dead Rise is a 2023 American supernatural horror film written and directed by Lee Cronin. It is the fifth installment of the Evil Dead film series. The film stars Lily Sullivan and Alyssa Sutherland as two estranged sisters trying to survive and save their family from demonic creatures. Morgan Davies, Gabrielle Echols, and Nell Fisher appear in supporting roles.",
    id: "e2917476-d4ae-44d5-a7c2-d93b6be587fb",
    rating: 0.8133071221149528,
  },
  {
    displayImageUrl:
      "https://upload.wikimedia.org/wikipedia/en/1/1d/TheCovenantPoster.png",
    displayName: "The Covenant",
    format: "Movie",
    genres: ["Action", "Thriller"],
    summary:
      "Guy Ritchie's The Covenant is an upcoming action thriller film co-written, co-produced and directed by Guy Ritchie. The film stars Jake Gyllenhaal and Dar Salim, and is scheduled to be released theatrically in the United States on April 21, 2023, by Metro-Goldwyn-Mayer.",
    id: "ddf7ce73-eafa-48b5-b061-069118267ab7",
    rating: 0.011632903048957033,
  },
  {
    displayImageUrl:
      "https://upload.wikimedia.org/wikipedia/en/8/89/Ghosted_Promo.png",
    displayName: "Ghosted",
    format: "Movie",
    genres: ["Action", "Adventure", "Comedy", "Romance"],
    summary:
      "Ghosted is an upcoming American romantic comedy action-adventure film directed by Dexter Fletcher and written by Rhett Reese, Paul Wernick, Chris McKenna, and Erik Sommers, from a story by Reese and Wernick. The film stars Chris Evans and Ana de Armas. Produced by Apple Studios and Skydance Media, it is set to be released by Apple TV+ on April 21, 2023.",
    id: "79728cfd-4d7e-4d4b-8981-cfc4bc0842b3",
    rating: 0.8453906824094413,
  },
  {
    displayImageUrl:
      "https://upload.wikimedia.org/wikipedia/en/9/92/Beau_Is_Afraid_poster.png",
    displayName: "Beau Is Afraid",
    format: "Movie",
    genres: ["Comedy", "Horror"],
    summary:
      "Beau Is Afraid is a 2023 American surrealist black comedy horror film written, directed, and co-produced by Ari Aster. The film stars Joaquin Phoenix as the titular Beau Wassermann, a mild-mannered but paranoia-ridden man who embarks on a surreal odyssey to his hometown for his mother's funeral, confronting his greatest fears along the way. The film also includes a supporting ensemble cast that includes Patti LuPone, Nathan Lane, Amy Ryan, Kylie Rogers, Parker Posey, Stephen McKinley Henderson, Hayley Squires, Michael Gandolfini, Zoe Lister-Jones, and Richard Kind.",
    id: "01c9f393-4572-4c72-971e-d617adcdf386",
    rating: 0.5039736458963828,
  },
  {
    displayImageUrl:
      "https://upload.wikimedia.org/wikipedia/en/7/7b/Chevalier_poster.jpeg",
    displayName: "Chevalier",
    format: "Movie",
    genres: ["Drama", "Biography"],
    summary:
      "Chevalier is a 2022 American biographical drama film directed by Stephen Williams and written by Stefani Robinson. It is based on the life of the titular French-Caribbean musician Joseph Bologne, Chevalier de Saint-Georges, played by Kelvin Harrison Jr. The film also stars Samara Weaving, Lucy Boynton, Marton Csokas, Alex Fitzalan, and Minnie Driver.",
    id: "57ff73cd-6f83-4282-9cd9-59849bbba570",
    rating: 0.6500632758348657,
  },
  {
    displayImageUrl:
      "https://upload.wikimedia.org/wikipedia/en/9/9c/Somewhere_in_queens_poster.png",
    displayName: "Somewhere in Queens",
    format: "Movie",
    genres: ["Comedy"],
    summary:
      "Somewhere in Queens is a 2022 American comedy film directed by Ray Romano from a screenplay by Romano and Mark Stegemann. The film stars Romano and Laurie Metcalf. It premiered at the Tribeca Film Festival on June 10, 2022. It is scheduled to be released in the United States on April 21, 2023, by Roadside Attractions and Lionsgate.",
    id: "40418bb4-264f-4e66-aeee-3d03ce174a10",
    rating: 0.8655588603500144,
  },
  {
    displayImageUrl:
      "https://upload.wikimedia.org/wikipedia/en/6/63/A-Tourists-Guide-To-Love.png",
    displayName: "A Tourist's Guide to Love",
    format: "Movie",
    genres: ["Comedy", "Romance"],
    summary:
      "A Tourist's Guide to Love is an upcoming romantic comedy film directed by Steven K. Tsuchida and written by Eirene Donohue. It stars Rachael Leigh Cook, Scott Ly, Missi Pyle, Ben Feldman, Nondumiso Tembe and Andrew Barth Feldman.",
    id: "220e74e7-5d5c-4fa9-b9ba-b1d16012435a",
    rating: 0.7408232420446146,
  },
  {
    displayImageUrl:
      "https://upload.wikimedia.org/wikipedia/en/1/1f/Peter_Pan_%26_Wendy_poster.png",
    displayName: "Peter Pan & Wendy",
    format: "Movie",
    genres: ["Adventure", "Fantasy"],
    summary:
      "Peter Pan & Wendy is an upcoming American fantasy adventure film directed by David Lowery from a screenplay he co-wrote with Toby Halbrooks. Jim Whitaker served as producer on the Walt Disney Pictures production, which is a live-action adaptation of Walt Disney's 1953 animated film Peter Pan, in turn based on the 1904 play Peter Pan; or, the Boy Who Wouldn't Grow Up by J. M. Barrie. The film stars Alexander Molony and Ever Anderson in the title roles. Jude Law, Yara Shahidi, Alyssa Wapanatâhk, Joshua Pickering, Jacobi Jupe, Molly Parker, Alan Tudyk, and Jim Gaffigan also appear in supporting roles.",
    id: "91cbb4be-4bc1-4eae-946e-b514450d3e66",
    rating: 0.445830711196453,
  },
  {
    displayImageUrl:
      "https://upload.wikimedia.org/wikipedia/en/c/cd/AreYouThereGodFilmPoster.png",
    displayName: "Are You There God? It's Me, Margaret",
    format: "Movie",
    genres: ["Comedy", "Drama"],
    summary:
      "Are You There God? It's Me, Margaret. is an upcoming American coming-of-age comedy drama film written for the screen and directed by Kelly Fremon Craig, based on the 1970 novel of the same name by Judy Blume. It stars Abby Ryder Fortson as the title character of Margaret Simon, Rachel McAdams as her mother Barbara, and Kathy Bates as her grandmother Sylvia.",
    id: "81728cef-d4ec-40d2-ab33-3108749bdbdc",
    rating: 0.4674390219971869,
  },
  {
    displayImageUrl:
      "https://upload.wikimedia.org/wikipedia/en/c/cb/BigGeorgePoster.png",
    displayName: "Big George Foreman",
    format: "Movie",
    genres: ["Drama", "Sports", "Biography"],
    summary:
      "Big George Foreman is an upcoming American biographical sports drama film directed by George Tillman Jr. The film focuses on the life of world heavyweight boxing champion George Foreman, played by Khris Davis. It also stars Jasmine Mathews, John Magaro, Sullivan Jones, Lawrence Gilliard Jr., Sonja Sohn, and Forest Whitaker.",
    id: "951436fe-7d33-4350-a588-ce624c6bb1ff",
    rating: 0.6803360784567818,
  },
  {
    displayImageUrl:
      "https://upload.wikimedia.org/wikipedia/en/c/c6/Sisu_ver2.png",
    displayName: "Sisu",
    format: "Movie",
    genres: ["Action", "Historical"],
    summary:
      "Sisu is a 2022 historical action film written and directed by Jalmari Helander. Set in Finnish Lapland during World War II, the film follows a gold prospector who attempts to secure his gold from a Nazi death squad led by a brutal Schutzstaffel officer. Shot in 2021 in Lapland with a budget of about six million euros, the film stars Jorma Tommila, Aksel Hennie, Jack Doolan and Mimosa Willamo.",
    id: "b51c170a-4217-46f6-ae54-7684c0d99b6c",
    rating: 0.8485016826153979,
  },
  {
    displayImageUrl:
      "https://upload.wikimedia.org/wikipedia/en/3/30/Guardians_of_the_Galaxy_Vol_3_poster.jpg",
    displayName: "Guardians of the Galaxy Vol. 3",
    format: "Movie",
    genres: ["Superhero"],
    summary:
      "Guardians of the Galaxy Vol. 3 is an upcoming American superhero film based on the Marvel Comics superhero team Guardians of the Galaxy, produced by Marvel Studios, and distributed by Walt Disney Studios Motion Pictures. It is intended to be the sequel to Guardians of the Galaxy (2014) and Guardians of the Galaxy Vol. 2 (2017), and the 32nd film in the Marvel Cinematic Universe (MCU). The film is written and directed by James Gunn and stars an ensemble cast featuring Chris Pratt, Zoe Saldaña, Dave Bautista, Karen Gillan, Pom Klementieff, Vin Diesel, Bradley Cooper, Sean Gunn, Chukwudi Iwuji, Will Poulter, Elizabeth Debicki, Maria Bakalova, and Sylvester Stallone. In the film, the Guardians embark on a mission to protect Rocket (Cooper).",
    id: "3441bb85-506b-424d-8dca-6d2b23f5e86a",
    rating: 0.3523857803814301,
  },
  {
    displayImageUrl:
      "https://upload.wikimedia.org/wikipedia/en/f/fe/Book-Club-The-Next-Chapter.png",
    displayName: "Book Club: The Next Chapter",
    format: "Movie",
    genres: ["Comedy", "Romance"],
    summary:
      "Book Club: The Next Chapter is an upcoming American romantic comedy film, written and directed by Bill Holderman, and starring Diane Keaton, Jane Fonda, Candice Bergen and Mary Steenburgen. The film is a sequel to 2018 film Book Club.",
    id: "4356e4af-6724-4df1-b348-249e6a76ce90",
    rating: 0.5311797880453621,
  },
  {
    displayImageUrl:
      "https://upload.wikimedia.org/wikipedia/en/2/21/Love_Again_film_poster.jpg",
    displayName: "Love Again",
    format: "Movie",
    genres: ["Comedy", "Drama", "Romance"],
    summary:
      "Love Again is an upcoming American romantic comedy-drama film written and directed by James C. Strouse. It is an English-language remake of the 2016 German film SMS für Dich, itself based on a novel by Sofie Cramer. The film stars Priyanka Chopra Jonas, Sam Heughan, and Celine Dion portraying a fictionalized version of herself in her first film role.",
    id: "a78e1b1f-9c2e-478a-b2f7-850c164e3703",
    rating: 0.9191651598095303,
  },
  {
    displayName: "The Mother",
    format: "Movie",
    genres: ["Action", "Drama"],
    summary:
      "The Mother is an upcoming American action drama film directed by Niki Caro with a screenplay by Misha Green, Andrea Berloff and Peter Craig, from a story by Green. The film stars Jennifer Lopez, Joseph Fiennes, Omari Hardwick, and Gael García Bernal.",
    id: "0fb7f8f9-0343-4032-93dd-5e9af1ff1a5f",
    rating: 0.8789917890401504,
  },
  {
    displayName: "Hypnotic",
    format: "Movie",
    genres: ["Action", "Science Fiction", "Thriller"],
    summary:
      "Hypnotic is a 2023 American science fiction action thriller film co-written and directed by Robert Rodriguez. The film features an ensemble cast that includes Ben Affleck, Alice Braga, J. D. Pardo, Hala Finley, Dayo Okeniyi, Jeff Fahey, Jackie Earle Haley, and William Fichtner.",
    id: "845d7475-a07d-43cc-9c8a-5f1d3be56080",
    rating: 0.02600718144752845,
  },
  {
    displayName: "Crater",
    format: "Movie",
    genres: ["Adventure", "Science Fiction"],
    summary:
      "Crater is an upcoming American coming-of-age science fiction adventure film directed by Kyle Patrick Alvarez from a screenplay by John Griffin and story by Griffin and Rpin Suwannath. It stars Isaiah Russell-Bailey, Mckenna Grace, Billy Barratt, Orson Hong, Thomas Boyce, and Scott Mescudi. The film is scheduled to be released on Disney+ on May 12, 2023.",
    id: "7fd6e8ed-67e4-4b66-9c15-2a78f1690a33",
    rating: 0.014500008946506382,
  },
  {
    displayImageUrl:
      "https://upload.wikimedia.org/wikipedia/en/d/d8/Knights_of_the_Zodiac_poster.jpg",
    displayName: "Knights of the Zodiac",
    format: "Movie",
    genres: ["Action", "Fantasy"],
    summary:
      "Knights of the Zodiac  is a 2023 action fantasy film directed by Tomasz Bagiński from a screenplay by Josh Campbell, Matt Stuecken, and Kiel Murray, based on the manga Saint Seiya by Masami Kurumada. The film stars Mackenyu, Famke Janssen, Madison Iseman, Diego Tinoco, Mark Dacascos, Nick Stahl, and Sean Bean.",
    id: "2ba88bd5-4146-42d9-a6ef-3a61b1676c7b",
    rating: 0.5008913898568914,
  },
  {
    displayImageUrl:
      "https://upload.wikimedia.org/wikipedia/en/3/3a/Monica_%282022_film%29.jpg",
    displayName: "Monica",
    format: "Movie",
    genres: ["Drama"],
    summary:
      "Monica is a 2022 drama film directed by Andrea Pallaoro, from a screenplay by Pallaoro and Orlando Tirado. It stars Trace Lysette, Patricia Clarkson, Emily Browning, and Adriana Barraza.",
    id: "2d1ebc12-1f59-4478-aebf-175f948f866d",
    rating: 0.5511232682511407,
  },
  {
    displayImageUrl:
      "https://upload.wikimedia.org/wikipedia/en/f/f2/Fast_X_poster.jpg",
    displayName: "Fast X",
    format: "Movie",
    genres: ["Action"],
    summary:
      'Fast X is an upcoming American action film directed by Louis Leterrier from a screenplay by Justin Lin, Zach Dean, and Dan Mazeau. It is the sequel to F9 (2021), serving as the tenth and penultimate main installment, and the eleventh full-length film in the Fast & Furious franchise. The film stars an ensemble cast including Vin Diesel, Michelle Rodriguez, Tyrese Gibson, Chris "Ludacris" Bridges, Jason Momoa, Nathalie Emmanuel, Jordana Brewster, John Cena, Jason Statham, Sung Kang, Alan Ritchson, Daniela Melchior, Scott Eastwood, Helen Mirren, Charlize Theron, Brie Larson, and Rita Moreno.',
    id: "72609e87-717a-4383-95ac-e7d6208e6f05",
    rating: 0.547411144272961,
  },
  {
    displayImageUrl:
      "https://upload.wikimedia.org/wikipedia/en/thumb/f/fc/White_Men_Can%27t_Jump_2023_logo.png/320px-White_Men_Can%27t_Jump_2023_logo.png",
    displayName: "White Men Can't Jump",
    format: "Movie",
    genres: ["Comedy", "Sports"],
    summary:
      'White Men Can\'t Jump is an upcoming American sports comedy film directed by Charles "Calmatic" Kidd II and written by Kenya Barris and Doug Hall. It is a remake of the 1992 film of the same name. It stars Sinqua Walls and Jack Harlow in the lead roles, while Lance Reddick, Teyana Taylor, and Laura Harrier also in the supporting roles.',
    id: "37a73458-2c48-4db9-af24-05290a551284",
    rating: 0.9930404420059371,
  },
  {
    displayImageUrl:
      "https://upload.wikimedia.org/wikipedia/en/4/48/Master_Gardener_%28film%29.jpg",
    displayName: "Master Gardener",
    format: "Movie",
    genres: ["Crime", "Independent", "Thriller"],
    summary:
      "Master Gardener is a 2022 American independent crime thriller film written and directed by Paul Schrader and starring Joel Edgerton, Sigourney Weaver, and Quintessa Swindell. The film had its world premiere at the 79th Venice International Film Festival on September 3, 2022.",
    id: "8a418ff9-ce98-4624-9705-e22f6cd41f27",
    rating: 0.5329967711123105,
  },
  {
    displayImageUrl:
      "https://upload.wikimedia.org/wikipedia/en/f/f4/The_Little_Mermaid_%282023_film%29.png",
    displayName: "The Little Mermaid",
    format: "Movie",
    genres: ["Fantasy", "Musical"],
    summary:
      "The Little Mermaid is an upcoming American musical fantasy film directed by Rob Marshall from a screenplay written by David Magee. It is a live-action adaptation of Disney's 1989 animated film of the same name, which itself is loosely based on the 1837 fairy tale of the same title by Hans Christian Andersen. The film stars Halle Bailey in the titular role, Jonah Hauer-King, Daveed Diggs, Awkwafina, Jacob Tremblay, Noma Dumezweni, Javier Bardem, and Melissa McCarthy.",
    id: "5a374310-50e1-470e-b47b-98dfa3ca4ba6",
    rating: 0.11792759991141,
  },
  {
    displayImageUrl:
      "https://upload.wikimedia.org/wikipedia/en/9/94/About_My_Father_poster.jpg",
    displayName: "About My Father",
    format: "Movie",
    genres: ["Comedy"],
    summary:
      "About My Father is an upcoming American comedy film directed by Laura Terruso from a screenplay by Sebastian Maniscalco and Austen Earl. The film stars Maniscalco and is loosely based on his life and his relationship with his father, played by Robert De Niro. Leslie Bibb, Anders Holm, David Rasche, and Kim Cattrall co-star in supporting roles.",
    id: "71a83382-5d68-446a-a111-e994ac9101d7",
    rating: 0.2172510185618055,
  },
  {
    displayImageUrl:
      "https://upload.wikimedia.org/wikipedia/en/6/6b/TheMachine2023poster.png",
    displayName: "The Machine",
    format: "Movie",
    genres: ["Action", "Comedy"],
    summary:
      "The Machine is an upcoming American action comedy film directed by Peter Atencio inspired by the 2016 stand-up routine of the same name created by Bert Kreischer, who also stars as a fictionalized version of himself. The film also stars Mark Hamill, Jess Gabor, Jimmy Tatro, Stephanie Kurtzuba and Mercedes De La Cruz.",
    id: "3a830b9b-958d-4c1b-a486-cac7d5085b06",
    rating: 0.965903028336903,
  },
  {
    displayName: "Kandahar",
    format: "Movie",
    genres: ["Action", "Thriller"],
    summary:
      "Kandahar is an upcoming American action thriller film directed by Ric Roman Waugh, written by Mitchell LaFortune, and produced by Gerard Butler, who also stars in the film alongside Ali Fazal. The film is scheduled to be released in theaters on May 26, 2023, by Open Road Films.",
    id: "4e4df33c-099c-4c99-9d91-4893354c2f4e",
    rating: 0.05408499250241894,
  },
  {
    displayImageUrl:
      "https://upload.wikimedia.org/wikipedia/en/d/df/You_hurt_my_feelings_2023.png",
    displayName: "You Hurt My Feelings",
    format: "Movie",
    genres: ["Comedy", "Drama"],
    summary:
      "You Hurt My Feelings is a 2023 American comedy-drama film written, directed and produced by Nicole Holofcener. It stars Julia Louis-Dreyfus, Tobias Menzies, Michaela Watkins, Arian Moayed and Jeannie Berlin.",
    id: "2bc01555-8ca4-4628-83f4-f3c8e012cdf3",
    rating: 0.8576264535385942,
  },
  {
    displayImageUrl:
      "https://upload.wikimedia.org/wikipedia/en/b/b4/Spider-Man-_Across_the_Spider-Verse_poster.jpg",
    displayName: "Spider-Man: Across the Spider-Verse",
    format: "Movie",
    genres: ["Animated", "Superhero"],
    summary:
      'Spider-Man: Across the Spider-Verse is an upcoming American computer-animated superhero film featuring the Marvel Comics character Miles Morales / Spider-Man. It is produced by Columbia Pictures and Sony Pictures Animation in association with Marvel Entertainment, and distributed by Sony Pictures Releasing. It is the sequel to Spider-Man: Into the Spider-Verse (2018) and is set in a shared multiverse of alternate universes called the "Spider-Verse". The film is directed by Joaquim Dos Santos, Kemp Powers, and Justin K. Thompson, from a screenplay written by Phil Lord, Christopher Miller, and David Callaham. Shameik Moore voices Miles, starring alongside Hailee Steinfeld, Jake Johnson, Issa Rae, Daniel Kaluuya, Karan Soni, Jason Schwartzman, Brian Tyree Henry, Luna Lauren Vélez, Greta Lee, Rachel Dratch, Jorma Taccone, Shea Whigham and Oscar Isaac. In the film, Miles goes on an adventure with Gwen Stacy / Spider-Woman across the multiverse where he meets a new team of Spider-People, known as the Spider-Society, but comes into conflict with them over handling a new threat.',
    id: "ebfa29e4-6c80-48b8-8a5f-c9491d1dcb35",
    rating: 0.745962787715897,
  },
  {
    displayImageUrl:
      "https://upload.wikimedia.org/wikipedia/en/8/89/The_Boogeyman_2023_poster.png",
    displayName: "The Boogeyman",
    format: "Movie",
    genres: ["Horror", "Supernatural"],
    summary:
      "The Boogeyman is an upcoming American supernatural horror film directed by Rob Savage from a screenplay by Scott Beck, Bryan Woods and Mark Heyman, based on the 1973 short story of the same name by Stephen King. The film stars Madison Hu, Vivien Lyra Blair, Sophie Thatcher, David Dastmalchian, Chris Messina, and Jaynie Verdin.",
    id: "1b74f9ae-b505-47bd-8de7-85fc451f9171",
    rating: 0.43049681713314714,
  },
  {
    displayImageUrl:
      "https://upload.wikimedia.org/wikipedia/en/d/da/Past_Lives_film_poster.png",
    displayName: "Past Lives",
    format: "Movie",
    genres: ["Drama", "Romance"],
    summary:
      "Past Lives is a 2023 American romantic drama film written and directed by Celine Song in her feature directorial debut. The film stars Greta Lee, Teo Yoo and John Magaro, and follows a reunion between two childhood friends as they contemplate their relationship and their own lives.",
    id: "5da37624-8f95-44f3-8a65-d1b652812dd6",
    rating: 0.5169843829264527,
  },
  {
    displayImageUrl:
      "https://upload.wikimedia.org/wikipedia/en/1/1c/Transformers-_Rise_of_the_Beasts.jpg",
    displayName: "Transformers: Rise of the Beasts",
    format: "Movie",
    genres: ["Action", "Science Fiction"],
    summary:
      "Transformers: Rise of the Beasts is an upcoming American science fiction action film based on Hasbro's Transformers toy line and primarily influenced by the Beast Wars storyline. The film is the seventh installment in the Transformers film series and a standalone sequel to Bumblebee (2018). The film is directed by Steven Caple Jr. from a screenplay by Joby Harold, Darnell Metayer, Josh Peters, Erich Hoeber, and Jon Hoeber. It will star Anthony Ramos, Dominique Fishback, Luna Lauren Vélez and Tobe Nwigwe in his film debut, as well the voice talents of Ron Perlman, Peter Dinklage, Michelle Yeoh, Pete Davidson, Liza Koshy, Cristo Fernández, Michaela Jaé Rodriguez, Tongayi Chirisa, and previous voice actors, Peter Cullen, John DiMaggio and David Sobolov.",
    id: "ba58c943-e65a-4135-95de-f90fd15153a4",
    rating: 0.2675288534095226,
  },
  {
    displayImageUrl:
      "https://upload.wikimedia.org/wikipedia/en/6/62/Strays2023Poster.png",
    displayName: "Strays",
    format: "Movie",
    genres: ["Comedy"],
    summary:
      "Strays is an upcoming American comedy film directed and produced by Josh Greenbaum. The film stars Will Ferrell, Jamie Foxx, Will Forte, Isla Fisher, Randall Park, Josh Gad, Harvey Guillén, Rob Riggle, Brett Gelman, Jamie Demetriou, and Sofia Vergara.",
    id: "9bb70ff4-e163-4038-9889-8ce22a1b47a9",
    rating: 0.7689993404648587,
  },
  {
    displayName: "Flamin' Hot",
    format: "Movie",
    genres: ["Drama", "Biography"],
    summary:
      "Flamin' Hot is a 2023 American biographical drama film directed by Eva Longoria, and written by Lewis Colick and Linda Yvette. It stars Jesse Garcia, Annie Gonzalez, Emilio Rivera, Dennis Haysbert, Matt Walsh, and Tony Shalhoub. It is based on the memoir A Boy, a Burrito and a Cookie: From Janitor to Executive by Richard Montañez, and on the life stories of Montañez and Judy Montañez.",
    id: "de7a3e4d-cf2c-4757-8689-ed5e60da18c8",
    rating: 0.3479683220899865,
  },
  {
    displayImageUrl:
      "https://upload.wikimedia.org/wikipedia/en/e/ed/The_Flash_%28film%29_poster.jpg",
    displayName: "The Flash",
    format: "Movie",
    genres: ["Superhero"],
    summary:
      "The Flash is an upcoming American superhero film based on the DC Comics character of the same name. Produced by DC Studios, Double Dream, and the Disco Factory, and set for distribution by Warner Bros. Pictures, it is intended to be the 13th installment in the DC Extended Universe (DCEU). The film is directed by Andy Muschietti from a screenplay by Christina Hodson and stars Ezra Miller as Barry Allen / The Flash alongside Sasha Calle, Michael Shannon, Ron Livingston, Maribel Verdú, Kiersey Clemons, Antje Traue, and Michael Keaton. In the film, Barry travels back in time to prevent his mother's murder, which brings unintended consequences.",
    id: "5b29cd86-5f9a-4638-afe5-e4d6833d401f",
    rating: 0.7052917672683143,
  },
  {
    displayImageUrl:
      "https://upload.wikimedia.org/wikipedia/en/a/ac/Elemental_poster.jpg",
    displayName: "Elemental",
    format: "Movie",
    genres: ["Animated", "Comedy", "Drama", "Romance"],
    summary:
      "Elemental is an upcoming American computer-animated romantic comedy-drama film produced by Walt Disney Pictures and Pixar Animation Studios and distributed by Walt Disney Studios Motion Pictures. Directed by Peter Sohn and produced by Denise Ream, it is written by John Hoberg, Kat Likkel, Brenda Hsueh, and Sohn. The overall twenty-seventh feature film produced by the studio, the film stars the voices of Leah Lewis, Mamoudou Athie, Ronnie del Carmen, Shila Ommi, Wendi McLendon-Covey, Catherine O'Hara, Mason Wertheimer, Joe Pera, and Matt Yang King. Set in a world inhabited by anthropomorphic elements of nature, the story depicts the bond between a fire element Ember Lumen (Lewis) and a water element Wade Ripple (Athie), who cannot touch each other but discover how much they have in common.",
    id: "1386029d-1af3-4920-af6a-f89a46215024",
    rating: 0.6172303499639318,
  },
  {
    displayImageUrl:
      "https://upload.wikimedia.org/wikipedia/en/7/78/Asteroidcity.jpg",
    displayName: "Asteroid City",
    format: "Movie",
    genres: ["Comedy", "Drama", "Science Fiction", "Romance"],
    summary:
      "Asteroid City is an upcoming American science fiction romantic comedy drama film written, directed and co-produced by Wes Anderson, based on a story by Anderson and Roman Coppola. The film follows the transformative events that occur at an annual Junior Stargazer convention in 1955. It features a large ensemble cast that includes Jason Schwartzman, Scarlett Johansson, Tom Hanks, Jeffrey Wright, Tilda Swinton, Bryan Cranston, Edward Norton, Adrien Brody, Liev Schreiber, Hope Davis, Steve Park, Rupert Friend, Maya Hawke, Steve Carell, Matt Dillon, Hong Chau, Willem Dafoe, Margot Robbie, Tony Revolori, Jake Ryan, and Jeff Goldblum.",
    id: "318e7607-f51b-4eda-bf1d-64ee48fc2144",
    rating: 0.8539603874414623,
  },
  {
    displayName: "Extraction 2",
    format: "Movie",
    genres: ["Action", "Thriller"],
    summary:
      "Extraction 2 is an upcoming American action thriller film directed by Sam Hargrave and written by Joe Russo, based on the graphic novel Ciudad by Ande Parks, Joe Russo, Anthony Russo, Fernando León González, and Eric Skillman. A sequel to the 2020 film, Chris Hemsworth, Golshifteh Farahani and Adam Bessa reprise their roles, with Olga Kurylenko, Daniel Bernhardt and Tinatin Dalakishvili joining the cast.",
    id: "5eb7965d-4af8-45e8-9f86-45a802b21411",
    rating: 0.5264363001830288,
  },
  {
    displayImageUrl:
      "https://upload.wikimedia.org/wikipedia/en/c/cf/The-blackening-poster.png",
    displayName: "The Blackening",
    format: "Movie",
    genres: ["Comedy", "Horror"],
    summary:
      "The Blackening is a 2022 American comedy horror film directed by Tim Story and co-written by Tracy Oliver and Dewayne Perkins, who also stars. Expanded from a 2018 short film by the improv comedy troupe 3Peat, the film follows an all-Black group of friends who encounter a killer while staying at a cabin in the woods.",
    id: "9ad88460-681f-4b35-986f-aa94b1cdbf9d",
    rating: 0.2964853158918732,
  },
  {
    displayName: "No Hard Feelings",
    format: "Movie",
    genres: ["Comedy", "Teen", "Erotic"],
    summary:
      "No Hard Feelings is an upcoming American coming of age sex comedy film directed by Gene Stupnitsky from a screenplay he co-wrote with John Phillips. Jennifer Lawrence produces and stars alongside Andrew Barth Feldman. Appearing in supporting roles are Matthew Broderick, Laura Benanti, Natalie Morales, Scott MacArthur and Ebon Moss-Bachrach.",
    id: "a626ce78-ee02-4e23-b9f1-b7d500035e4b",
    rating: 0.4168953483953173,
  },
  {
    displayName: "The Perfect Find",
    format: "Movie",
    genres: ["Comedy", "Romance"],
    summary:
      "The Perfect Find is an upcoming American romantic comedy film written by Leigh Davenport and directed by Numa Perrier. It is based on the book of the same name by Tia Williams. The film stars Gina Torres, Keith Powers, and Gabrielle Union, who is also a co-producer.",
    id: "35bc5818-5775-4dc2-a4a3-422d044d0698",
    rating: 0.05916657227916411,
  },
  {
    displayImageUrl:
      "https://upload.wikimedia.org/wikipedia/en/c/c3/Indiana_Jones_and_the_Dial_of_Destiny_theatrical_poster.jpg",
    displayName: "Indiana Jones and the Dial of Destiny",
    format: "Movie",
    genres: ["Action", "Adventure"],
    summary:
      "Indiana Jones and the Dial of Destiny is an upcoming American action adventure film directed by James Mangold, who co-wrote it with Jez Butterworth, John-Henry Butterworth, and David Koepp. Produced by Lucasfilm and Walt Disney Pictures, and distributed by Walt Disney Studios Motion Pictures, the film is a sequel to Indiana Jones and the Kingdom of the Crystal Skull (2008) and will serve as the fifth and final installment in the Indiana Jones film series. The film stars Harrison Ford in his final portrayal of archaeologist Indiana Jones. John Rhys-Davies reprises his role as Sallah from earlier films, along with new cast members including Phoebe Waller-Bridge, Antonio Banderas, Shaunette Renée Wilson, Thomas Kretschmann, Toby Jones, Boyd Holbrook, Ethann Isidore, and Mads Mikkelsen.",
    id: "1d9ce38e-9f05-4ba1-8a80-97fde515b5b0",
    rating: 0.09572428330555116,
  },
  {
    displayImageUrl:
      "https://upload.wikimedia.org/wikipedia/en/6/61/Ruby_Gillman_Teenage_Kraken_2023_poster.jpeg",
    displayName: "Ruby Gillman, Teenage Kraken",
    format: "Movie",
    genres: ["Action", "Animated", "Comedy", "Fantasy"],
    summary:
      "Ruby Gillman, Teenage Kraken is an upcoming American computer-animated coming-of-age fantasy action-comedy film produced by DreamWorks Animation and distributed by Universal Pictures. It is directed by Kirk DeMicco and co-directed by Faryn Pearl, from a screenplay written by DeMicco and Pam Brady, and a story by Brady, Brian C. Brown, and Elliott DiGuiseppi. The film features an ensemble voice cast including Lana Condor, Toni Collette, Annie Murphy, Sam Richardson, Liza Koshy, Will Forte, Colman Domingo, Jaboukie Young-White, Blue Chapman, Eduardo Franco, Ramona Young, Echo Kellum, Nicole Byer, and Jane Fonda. In the film, sixteen-year-old Ruby Gillman (Condor) is desperate to fit in at Oceanside High, but when she breaks her mother's (Collette) rule about going on the beach with any would-be friends, Ruby discovers that she is a direct descendant of the warrior Kraken queens and is destined to inherit the throne from her commanding grandmother, the Warrior Queen of the Seven Seas (Fonda).",
    id: "cb737c2e-c13f-4b66-a050-9859625a80d7",
    rating: 0.5299655772113134,
  },
  {
    displayName: "Harold and the Purple Crayon",
    format: "Movie",
    genres: [],
    summary:
      "Harold and the Purple Crayon is an upcoming American film directed by Carlos Saldanha, in his live-action directorial debut. It is based on the 1955 children’s book of the same name written by Crockett Johnson, and will star Zachary Levi, Lil Rel Howery, Zooey Deschanel, Ravi Patel, Camille Guaty, Tanya Reynolds, and Pete Gardner.",
    id: "5f386bf1-48f5-4f29-8db6-b22e13e07016",
    rating: 0.981411999115348,
  },
  {
    displayName: "Insidious: The Red Door",
    format: "Movie",
    genres: ["Horror", "Supernatural"],
    summary:
      "Insidious: The Red Door is an upcoming American supernatural horror film directed by Patrick Wilson in his directorial debut, with a screenplay by Scott Teems from a story by series creator Leigh Whannell. The film is a direct sequel to Insidious (2010) and Insidious: Chapter 2 (2013), and serves as both the fifth installment in the Insidious franchise and the fifth installment in terms of chronology. Wilson, Rose Byrne, Ty Simpkins and Andrew Astor reprise their roles from the films.",
    id: "ed707327-d086-4ae1-a97c-3e659a62c9c7",
    rating: 0.584680069812139,
  },
  {
    displayImageUrl:
      "https://upload.wikimedia.org/wikipedia/en/8/8c/Joy_Ride_2023_film.jpg",
    displayName: "Joy Ride",
    format: "Movie",
    genres: ["Comedy"],
    summary:
      "Joy Ride is a 2023 American comedy film directed by Adele Lim, in her feature directorial debut, and written by Cherry Chevapravatdumrong and Teresa Hsiao, from a story by Lim, Chevapravatdumrong and Hsiao. The film stars Ashley Park, Sherry Cola, Stephanie Hsu, and Sabrina Wu.",
    id: "7586b7bb-058c-410b-b6f0-7ce643f7a487",
    rating: 0.7391831668417836,
  },
  {
    displayName: "Biosphere",
    format: "Movie",
    genres: [],
    id: "336f6fe7-4d57-4fa2-b009-19af7d8f77e9",
    rating: 0.6050071355260189,
  },
  {
    displayImageUrl:
      "https://upload.wikimedia.org/wikipedia/en/e/ed/Mission-_Impossible_%E2%80%93_Dead_Reckoning_Part_One_poster.jpg",
    displayName: "Mission: Impossible – Dead Reckoning Part One",
    format: "Movie",
    genres: ["Action", "Spy"],
    summary:
      "Mission: Impossible – Dead Reckoning Part One is an upcoming American action spy film written, produced, and directed by Christopher McQuarrie. It is the sequel to Mission: Impossible – Fallout (2018) and is the seventh installment in the Mission: Impossible film series. The film stars Tom Cruise, Ving Rhames, Simon Pegg, Rebecca Ferguson, Vanessa Kirby, Hayley Atwell, Shea Whigham, Pom Klementieff, Esai Morales, Rob Delaney, Henry Czerny, and Cary Elwes.",
    id: "5408866b-4a68-4550-9b8b-04ca77002c6b",
    rating: 0.8907060343189566,
  },
  {
    displayName: "Theater Camp",
    format: "Movie",
    genres: ["Comedy"],
    summary:
      "Theater Camp is a 2023 American comedy film directed by Molly Gordon and Nick Lieberman in their directorial debuts, from a screenplay by Gordon, Lieberman, Ben Platt, and Noah Galvin. A feature-length adaptation of the 2020 short film of the same name, the film features an ensemble cast, led by Gordon, Platt, Galvin, Jimmy Tatro, Patti Harrison, Ayo Edebiri, Alan Kim, and Amy Sedaris. Will Ferrell serves as a producer under his Gloria Sanchez Productions banner.",
    id: "be8ffc42-078d-4294-8265-cbbdc5c962c2",
    rating: 0.6619770338649857,
  },
  {
    displayImageUrl:
      "https://upload.wikimedia.org/wikipedia/en/4/4a/Oppenheimer_%28film%29.jpg",
    displayName: "Oppenheimer",
    format: "Movie",
    genres: ["Biography"],
    summary:
      'Oppenheimer is an upcoming biographical film written and directed by Christopher Nolan. It is based on American Prometheus, a biography written by Kai Bird and Martin J. Sherwin. The film stars Cillian Murphy as J. Robert Oppenheimer, an American theoretical physicist credited with being the "father of the atomic bomb" for his role in the Manhattan Project—the World War II undertaking that developed the first nuclear weapons, with a supporting ensemble cast that includes Emily Blunt, Robert Downey Jr., Matt Damon, Rami Malek, Florence Pugh, Benny Safdie, Michael Angarano, Josh Hartnett and Kenneth Branagh. It is a co-production between Universal Pictures, Syncopy Inc. and Atlas Entertainment, with Nolan producing the film alongside Emma Thomas and Charles Roven.',
    id: "3b1d136f-0d15-4f3c-8853-533a6e32c324",
    rating: 0.0824906045675109,
  },
  {
    displayImageUrl:
      "https://upload.wikimedia.org/wikipedia/en/0/0b/Barbie_2023_poster.jpg",
    displayName: "Barbie",
    format: "Movie",
    genres: ["Comedy"],
    summary:
      "Barbie is an upcoming comedy film directed by Greta Gerwig, who co-wrote it with Noah Baumbach. Based on the Barbie fashion dolls by Mattel, the film is the first live-action Barbie film after several computer-animated direct-to-video and streaming television films. The film stars Margot Robbie and Ryan Gosling as Barbie and Ken, respectively, alongside a large ensemble supporting cast.",
    id: "4530c130-6723-40ac-9599-ca410a9530df",
    rating: 0.2503683550479878,
  },
  {
    displayName: "They Cloned Tyrone",
    format: "Movie",
    genres: ["Comedy", "Mystery", "Science Fiction"],
    summary:
      "They Cloned Tyrone is an upcoming American science fiction comedy mystery film directed by Juel Taylor in his feature film directorial debut, from a screenplay by Taylor and Tony Rettenmaier. The film stars John Boyega, Teyonah Parris, Kiefer Sutherland, and Jamie Foxx. Foxx also serves as a producer of the film.",
    id: "4058c7c7-0a21-4db8-9769-8017218b3e8b",
    rating: 0.5596307340418207,
  },
  {
    displayName: "Cobweb",
    format: "Movie",
    genres: ["Horror"],
    summary:
      "Cobweb is an upcoming American horror film directed by Samuel Bodin in his feature directorial debut. It stars Woody Norman, Antony Starr, Lizzy Caplan, and Cleopatra Coleman. The film's screenplay by Chris Thomas Devlin was included in the 2018 Black List.",
    id: "764ee42b-a8d1-4546-8a7e-ce5702052876",
    rating: 0.39702494953391865,
  },
  {
    displayImageUrl:
      "https://upload.wikimedia.org/wikipedia/en/3/31/Haunted_Mansion_%282023%29_poster.jpg",
    displayName: "Haunted Mansion",
    format: "Movie",
    genres: ["Comedy", "Horror", "Supernatural"],
    summary:
      "Haunted Mansion is an upcoming American supernatural horror comedy film directed by Justin Simien from a screenplay by Katie Dippold. The film stars LaKeith Stanfield, Tiffany Haddish, Owen Wilson, Danny DeVito, Rosario Dawson, Chase W. Dillon, Dan Levy, Jamie Lee Curtis, and Jared Leto. Produced by Walt Disney Pictures and Rideback, it is the second theatrical film adaptation of Walt Disney's theme park attraction The Haunted Mansion, following the 2003 film of the same name. In the film, Gabbie (Dawson) and Travis (Dillon) enlists the aid of a team to help exorcise the mansion and destroy the ghosts around them.",
    id: "a78baaba-8be2-4e72-867c-81c44fd64fee",
    rating: 0.5433288076737119,
  },
  {
    displayName: "Sympathy for the Devil",
    format: "Movie",
    genres: ["Horror"],
    summary:
      "Sympathy for the Devil is an upcoming American psychological horror film written by Luke Paradise, directed by Yuval Adler and starring Joel Kinnaman and Nicolas Cage.",
    id: "1b949729-c0fc-44e7-aac1-3f3703aa78fd",
    rating: 0.15897581261766458,
  },
  {
    displayImageUrl:
      "https://upload.wikimedia.org/wikipedia/en/a/a2/Mutant_Mayhem_poster.jpeg",
    displayName: "Teenage Mutant Ninja Turtles: Mutant Mayhem",
    format: "Movie",
    genres: ["Animated", "Superhero"],
    summary:
      "Teenage Mutant Ninja Turtles: Mutant Mayhem is an upcoming American computer-animated superhero film directed by Jeff Rowe and co-directed by Kyler Spears, from a screenplay written by Brendan O'Brien. Based on the characters created by Kevin Eastman and Peter Laird, it serves as a reboot of the Teenage Mutant Ninja Turtles film series. It is also the first theatrical animated feature based on the property since TMNT (2007). In the film, after years of being sheltered from the human world, four mutated turtle brothers—Leonardo, Michelangelo, Donatello, and Raphael —set out to be accepted as normal teenagers while taking on a mysterious crime syndicate and an army of mutants. The ensemble voice cast includes Jackie Chan, Ayo Edebiri, Ice Cube, Seth Rogen, John Cena, Paul Rudd, Natasia Demetriou, Rose Byrne, Post Malone, Hannibal Buress, Maya Rudolph, and Giancarlo Esposito.",
    id: "4cd1d976-4241-4c61-b54a-0246b64c8ad7",
    rating: 0.16894239587899662,
  },
  {
    displayName: "Meg 2: The Trench",
    format: "Movie",
    genres: ["Science Fiction"],
    summary:
      "Meg 2: The Trench is an upcoming science fiction film directed by Ben Wheatley, and written by Dean Georgaris, and Jon and Erich Hoeber, based on the 1999 book The Trench by Steve Alten. Serving as a sequel to the 2018 film The Meg, the film stars Jason Statham, Wu Jing, Sienna Guillory, Cliff Curtis, Skyler Samuels, Page Kennedy, Shuya Sophia Cai and Sergio Peris-Mencheta",
    id: "02c8cb58-3a8d-427c-9be0-408dfea9bda2",
    rating: 0.0013506430366967415,
  },
  {
    displayName: "Dreamin' Wild",
    format: "Movie",
    genres: ["Drama", "Biography"],
    summary:
      "Dreamin' Wild is a 2022 American biographical drama film, written, directed, and produced by Bill Pohlad. It follows the life of singer-musician brothers Donnie and Joe Emerson. It stars Casey Affleck, Walton Goggins, Zooey Deschanel, Noah Jupe, Jack Dylan Grazer, Chris Messina, and Beau Bridges.",
    id: "79d89f44-bfb6-42f5-80be-5e1e3b26b57b",
    rating: 0.9575450263345509,
  },
  {
    displayImageUrl:
      "https://upload.wikimedia.org/wikipedia/en/thumb/e/e0/Gran_turismo_movie.jpg/320px-Gran_turismo_movie.jpg",
    displayName: "Gran Turismo",
    format: "Movie",
    genres: ["Drama", "Sports", "Biography", "Teen"],
    summary:
      "Gran Turismo is an upcoming American biographical coming of age sports drama film directed by Neill Blomkamp from a screenplay by Jason Hall and Zach Baylin. Produced by Columbia Pictures, PlayStation Productions, Trigger Street Productions, and 2.0 Entertainment, the film is based on the video game series of the same name developed by Polyphony Digital. Also based on a true story, the film stars Archie Madekwe as Jann Mardenborough, a teenage Gran Turismo player aspiring to be a race car driver. It also stars David Harbour, Orlando Bloom, Darren Barnet, Geri Halliwell Horner, and Djimon Hounsou.",
    id: "98c43bff-4012-408b-950a-2d6f2e7800ec",
    rating: 0.675460022677097,
  },
  {
    displayName: "The Last Voyage of the Demeter",
    format: "Movie",
    genres: ["Horror", "Supernatural"],
    summary:
      'The Last Voyage of the Demeter is an upcoming American supernatural horror film directed by André Øvredal. It is an adaptation of "The Captain\'s Log", a chapter from the 1897 Bram Stoker novel Dracula. The film stars Corey Hawkins, Aisling Franciosi, Liam Cunningham, and David Dastmalchian.',
    id: "521aa20a-c0ab-4d56-b0fd-b1b542c7d0de",
    rating: 0.9964528860818727,
  },
  {
    displayName: "Heart of Stone",
    format: "Movie",
    genres: ["Action", "Spy", "Thriller"],
    summary:
      "Heart of Stone is an upcoming American spy action thriller film directed by Tom Harper from a screenplay by Greg Rucka and Allison Schroeder and a story by Rucka. The film stars Gal Gadot, Jamie Dornan, and Alia Bhatt.",
    id: "023f66c6-7676-4168-89da-a9139138cff7",
    rating: 0.6413416824428126,
  },
  {
    displayImageUrl:
      "https://upload.wikimedia.org/wikipedia/en/c/c1/Blue_Beetle_poster.jpg",
    displayName: "Blue Beetle",
    format: "Movie",
    genres: ["Superhero"],
    summary:
      "Blue Beetle is an upcoming American superhero film based on the DC Comics character Jaime Reyes / Blue Beetle, produced by DC Studios and the Safran Company, and directed by Angel Manuel Soto from a screenplay by Gareth Dunnet-Alcocer. It is intended to be the 14th film in the DC Extended Universe (DCEU). The film stars Xolo Maridueña as Jaime Reyes / Blue Beetle alongside Adriana Barraza, Damián Alcázar, Elpidia Carrillo, Bruna Marquezine, Raoul Max Trujillo, Susan Sarandon, and George Lopez.",
    id: "b49e930a-5e17-4eea-a3e6-be8d75f95ac4",
    rating: 0.9684878200487381,
  },
  {
    displayImageUrl:
      "https://upload.wikimedia.org/wikipedia/en/d/da/White_Bird_-_A_Wonder_Story_film_poster.png",
    displayName: "White Bird: A Wonder Story",
    format: "Movie",
    genres: ["Drama", "War"],
    summary:
      'White Bird: A Wonder Story is an upcoming American war drama film directed by Marc Forster and written by Mark Bomback, based on the 2019 graphic novel of the same name by R. J. Palacio. A spin-off, prequel and "companion piece" to the 2017 coming-of-age film Wonder, based on Palacio\'s 2012 novel, the film stars Ariella Glaser, Orlando Schwerdt, Bryce Gheisar, Gillian Anderson, and Helen Mirren, with Gheisar reprising his role as Julian from Wonder.',
    id: "edbffc89-3bf9-439f-8c14-3714321abd63",
    rating: 0.25797129505809324,
  },
  {
    displayName: "Please Don't Destroy",
    format: "Movie",
    genres: ["Comedy"],
    summary:
      "Please Don't Destroy is a comedy group in New York City consisting of Ben Marshall, John Higgins, and Martin Herlihy, who began collaborating as students at New York University. The group was originally founded in 2017 and based on an act titled Please Don't Destroy My Farm. The troupe performed monthly comedy shows, appeared at the New York Comedy Festival and produced sketch videos posted to YouTube. During the COVID-19 pandemic, they began creating shorter videos for TikTok and Twitter.",
    id: "c3d9a58b-ea63-44d6-b8a1-5d148a11c33f",
    rating: 0.38116345762510795,
  },
  {
    displayImageUrl:
      "https://upload.wikimedia.org/wikipedia/en/0/07/The_Hill_2023_Poster.png",
    displayName: "The Hill",
    format: "Movie",
    genres: ["Drama", "Sports", "Biography"],
    summary:
      "The Hill is an upcoming American biographical sports drama film directed by Jeff Celentano and written by Angelo Pizzo and Scott Marshall Smith. It stars Dennis Quaid, Colin Ford, Joelle Carter, Randy Houser, Bonnie Bedelia and Scott Glenn.",
    id: "72348e2b-1832-47b3-bf7f-d22ce6a98e90",
    rating: 0.5639433505839635,
  },
  {
    displayName: "Lift",
    format: "Movie",
    genres: ["Action", "Comedy", "Thriller"],
    summary:
      "Lift is an upcoming American heist action comedy thriller film directed by F. Gary Gray, written by Dan Kunka and Jeremy Doner, and co-produced by and starring Kevin Hart with Gugu Mbatha-Raw, Vincent D’Onofrio, Úrsula Corberó, Billy Magnussen, Jacob Batalon, Jean Reno, and Sam Worthington.",
    id: "4577077e-988e-4670-940f-5280046ad3c7",
    rating: 0.7330302346578932,
  },
  {
    displayName: "They Listen",
    format: "Movie",
    genres: ["Horror"],
    summary:
      "They Listen is an upcoming American horror film written and directed by Chris Weitz. It stars Katherine Waterston, John Cho and Lukita Maxwell. Jason Blum and Weitz produce through their Blumhouse Productions and Depth of Field banners respectively, alongside Andrew Miano.",
    id: "d0a4bf91-e1f6-4531-97a6-b42f9be342b7",
    rating: 0.12911510977741747,
  },
  {
    displayName: "The Equalizer 3",
    format: "Movie",
    genres: ["Action"],
    summary:
      "The Equalizer 3 is an upcoming American vigilante action film directed by Antoine Fuqua. It is the sequel to the 2018 film The Equalizer 2, which was based on the TV series of the same name. The film stars Denzel Washington, Dakota Fanning, Sonia Ammar and Remo Girone. Washington and Fanning reuniting on-screen for the first time since 2004's Man on Fire. It follows retired U.S. Marine and former CIA officer Robert McCall. The film is the fifth collaboration between Washington and Fuqua, following Training Day (2001), The Equalizer (2014), The Magnificent Seven (2016), and The Equalizer 2 (2018).",
    id: "63a3ac87-ccbe-4f14-bbec-50d921842bdb",
    rating: 0.6834231858937421,
  },
  {
    displayName: "The Nun 2",
    format: "Movie",
    genres: ["Horror", "Supernatural"],
    summary:
      "The Nun 2 is an upcoming American gothic supernatural horror film directed by Michael Chaves and written by Akela Cooper, Ian Goldberg, and Richard Naing from a story by Cooper. It serves as the sequel to The Nun (2018) and the ninth installment in The Conjuring Universe franchise. The film stars Storm Reid, Taissa Farmiga, and Anna Popplewell. Wan and Peter Safran return as co-producers, with Judson Scott also serving as a producer.",
    id: "0778a2b6-0ccf-4751-834a-03fd2c26ccbf",
    rating: 0.9498143777567329,
  },
  {
    displayName: "My Big Fat Greek Wedding 3",
    format: "Movie",
    genres: ["Comedy", "Romance"],
    summary:
      "My Big Fat Greek Wedding 3 is an upcoming American romantic comedy film written and directed by Nia Vardalos. The film stars Vardalos, John Corbett, Elena Kampouris, Andrea Martin, and Lainie Kazan. It is the third installment in the My Big Fat Greek Wedding series. Filming began on June 22, 2022 in Athens, Greece, and wrapped on August 10.",
    id: "f0fd81a5-d5af-4ab5-b2c6-6f39574626cf",
    rating: 0.021733801935034602,
  },
  {
    displayImageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/5/57/A_Haunting_in_Venice_logo.jpg/320px-A_Haunting_in_Venice_logo.jpg",
    displayName: "A Haunting in Venice",
    format: "Movie",
    genres: ["Mystery"],
    summary:
      "A Haunting in Venice is an upcoming American mystery film directed by Kenneth Branagh, based on Hallowe'en Party by Agatha Christie. The film is a sequel to Murder on the Orient Express (2017) and Death on the Nile (2022). Branagh reprises his role as Hercule Poirot, alongside Kyle Allen, Camille Cottin, Jamie Dornan, Tina Fey, Jude Hill, Kelly Reilly, and Michelle Yeoh.",
    id: "4de93dfd-e785-46d5-82a9-5d9824699c16",
    rating: 0.3698867149793035,
  },
  {
    displayName: "Challengers",
    format: "Movie",
    genres: ["Comedy", "Sports", "Romance"],
    summary:
      "Challengers is an upcoming American romantic sports comedy film directed by Luca Guadagnino from a screenplay by Justin Kuritzkes. Its cast includes Zendaya, Mike Faist, and Josh O'Connor.",
    id: "9b1ed38e-857b-4b7c-b050-15b36e7abc41",
    rating: 0.5457758682740046,
  },
  {
    displayName: "The Expendables 4",
    format: "Movie",
    genres: ["Action"],
    summary:
      "The Expendables 4 is an upcoming American action film directed by Scott Waugh, with a script co-written by Kurt Wimmer, Tad Daggerhart and Max Adams, from an original story by Kurt Wimmer, Spenser Cohen and Tad Daggerhart. It is the fourth installment in The Expendables franchise and the sequel to The Expendables 3 (2014), starring an ensemble cast including Jason Statham, Dolph Lundgren, Randy Couture, and Sylvester Stallone reprising their roles from previous films, alongside 50 Cent, Megan Fox, Andy García, Tony Jaa, Jacob Scipio, Iko Uwais, Levy Tran and Eddie Hall.",
    id: "b91ff30b-938a-48f8-8b78-8fd520a93ff5",
    rating: 0.2968556429146034,
  },
  {
    displayName: "The Book of Clarence",
    format: "Movie",
    genres: [],
    summary:
      "The Book of Clarence is an upcoming American epic film written and directed by Jeymes Samuel. The film is due for release on September 22, 2023.",
    id: "05ce1b92-2b4c-4654-a45a-e008bd665d4a",
    rating: 0.14738022068122358,
  },
  {
    displayName: "Next Goal Wins",
    format: "Movie",
    genres: ["Comedy", "Drama", "Sports"],
    summary:
      "Next Goal Wins is an upcoming sports comedy-drama film directed by Taika Waititi, who co-wrote the screenplay with Iain Morris. The film is based on the 2014 documentary of the same name by Mike Brett and Steve Jamison about Dutch-American coach Thomas Rongen's efforts to lead the American Samoa national football team, considered the weakest football team in the world, to qualification for the 2014 FIFA World Cup.",
    id: "bfd82a06-2e9a-420f-ab29-3aea40357e97",
    rating: 0.46483625133211537,
  },
  {
    displayName: "PAW Patrol: The Mighty Movie",
    format: "Movie",
    genres: ["Action", "Adventure", "Animated", "Comedy"],
    summary:
      "PAW Patrol: The Mighty Movie is an upcoming Canadian computer-animated action-adventure comedy film based on the television series PAW Patrol created by Keith Chapman. Produced by Spin Master Entertainment, the toy company behind the series, with animation provided by Mikros Image, and released by Paramount Pictures and Nickelodeon Movies, it is the sequel to the 2021 film PAW Patrol: The Movie and the second film under the Spin Master Entertainment banner. Directed by Cal Brunker and written by Bob Barlen, it features elements from the Mighty Pups sub-theme of the main show. In the film, the PAW Patrol pups, who are given superpowers when a magical meteor crash lands in Adventure City, must stop the supervillains when Mayor Humdinger escaped from prison and teams up with Victoria Vance by planning to steal the superpowers for themselves, before its too late.",
    id: "591f3175-73e4-4795-8173-9da3a09ef343",
    rating: 0.6257914246357617,
  },
  {
    displayImageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c7/Kraven_the_Hunter_%28film%29.jpg/320px-Kraven_the_Hunter_%28film%29.jpg",
    displayName: "Kraven the Hunter",
    format: "Movie",
    genres: ["Superhero"],
    summary:
      "Kraven the Hunter is an upcoming American superhero film based on the Marvel Comics character of the same name, produced by Columbia Pictures in association with Marvel. Distributed by Sony Pictures Releasing, it is intended to be the fourth film in Sony's Spider-Man Universe (SSU). The film is being directed by J. C. Chandor from a screenplay by Art Marcum & Matt Holloway and Richard Wenk, and stars Aaron Taylor-Johnson in the title role alongside Ariana DeBose and Fred Hechinger.",
    id: "985e3bc5-02ef-42fe-9e62-2673d37ed8d9",
    rating: 0.32134729836233733,
  },
  {
    displayName: "Killers of the Flower Moon",
    format: "Movie",
    genres: ["Crime", "Drama", "Western"],
    summary:
      "Killers of the Flower Moon is an upcoming American Western crime drama film directed by Martin Scorsese, from a screenplay he co-wrote with Eric Roth, based on the best-selling 2017 non-fiction book Killers of the Flower Moon: The Osage Murders and the Birth of the FBI by David Grann. Its plot centers on a series of Oklahoma murders in the Osage Nation during the 1920s, committed after oil was discovered on tribal land. The film stars Leonardo DiCaprio, who also serves as an executive producer, alongside Jesse Plemons, Lily Gladstone, Brendan Fraser, John Lithgow and Robert De Niro. It marks the seventh collaboration between Scorsese and DiCaprio as well as the eleventh collaboration between Scorsese and De Niro.",
    id: "5df98280-a282-4c33-851e-e81c306aad8a",
    rating: 0.4439979213524108,
  },
  {
    displayName: "True Love",
    format: "Movie",
    genres: ["Science Fiction"],
    summary:
      "True Love is an upcoming American science fiction film directed, written and co-produced by Gareth Edwards. The film stars John David Washington, Gemma Chan, Ralph Ineson, Allison Janney, and Ken Watanabe.",
    id: "56a6e03a-7b9d-4308-8039-4e403b16724b",
    rating: 0.07438006292894883,
  },
  {
    displayName: "Untitled The Exorcist film",
    format: "Movie",
    genres: ["Horror", "Supernatural"],
    summary:
      "The untitled The Exorcist film is an upcoming American supernatural horror film directed by David Gordon Green, with a screenplay he co-wrote with Peter Sattler, from a story he co-authored with Scott Teems and Danny McBride. It stars Leslie Odom Jr., Ellen Burstyn, Ann Dowd and Jennifer Nettles.",
    id: "ae94ae2b-9bcf-47ac-947b-0552b1ac368e",
    rating: 0.6170618530972674,
  },
  {
    displayName: "Damsel",
    format: "Movie",
    genres: ["Fantasy"],
    summary:
      "Damsel is an upcoming American fantasy film directed by Juan Carlos Fresnadillo, written by Dan Mazeau, and starring Millie Bobby Brown, Nick Robinson, Angela Bassett, Robin Wright, Ray Winstone, Brooke Carter, and Shohreh Aghdashloo. It is set for release on Netflix on October 13, 2023.",
    id: "b0ad417d-3cb2-4da4-acce-1f40008e1bf3",
    rating: 0.14187510808730197,
  },
  {
    displayName: "Ordinary Angels",
    format: "Movie",
    genres: ["Drama"],
    summary:
      "Ordinary Angels is an upcoming American drama film directed by Jon Gunn and starring Hilary Swank, Alan Ritchson, Emily Mitchell, and Nancy Travis.",
    id: "18887adb-6002-48f9-b0cf-6d19183cb8a3",
    rating: 0.2522593704968834,
  },
  {
    displayName: "Dumb Money",
    format: "Movie",
    genres: ["Comedy", "Drama", "Biography"],
    summary:
      "Dumb Money is an upcoming American biographical comedy-drama film directed by Craig Gillespie, from a script by Lauren Schuker Blum and Rebecca Angelo, based on the book The Antisocial Network: The GameStop Short Squeeze and the Ragtag Group of Amateur Traders That Brought Wall Street to Its Knees by Ben Mezrich. The film chronicles the GameStop short squeeze from January 2021, and stars an ensemble cast featuring Paul Dano, Sebastian Stan, Seth Rogen, and Pete Davidson. Teddy Schwarzman, Aaron Ryder, and Gillespie are producing the project. The film will be released theatrically on October 20, 2023, by Stage 6 Films and Sony Pictures Releasing.",
    id: "23bf23b1-a1fb-417d-9599-9416847287d8",
    rating: 0.6515026996152025,
  },
  {
    displayName: "The Underdoggs",
    format: "Movie",
    genres: [],
    id: "fb9fa09d-43bd-4fce-88c2-51336a0bfe5d",
    rating: 0.11850833522121107,
  },
  {
    displayName: "Five Nights at Freddy's",
    format: "Movie",
    genres: ["Horror", "Supernatural"],
    summary:
      "Five Nights at Freddy's is an upcoming American supernatural horror film directed by Emma Tammi, from a screenplay she co-wrote with Scott Cawthon and Seth Cuddeback, based on the video game franchise of the same name created and developed by Cawthon. It stars Josh Hutcherson, Matthew Lillard, Mary Stuart Masterson, Piper Rubio, Kat Conner Sterling, and Elizabeth Lail.",
    id: "14f55ce0-4a9d-42c0-afe3-391066f71752",
    rating: 0.131825399180322,
  },
  {
    displayName: "Saw X",
    format: "Movie",
    genres: ["Horror"],
    summary:
      "Saw X is an upcoming American horror film directed by Kevin Greutert and written by Josh Stolberg and Peter Goldfinger. The film is the tenth installment overall in the Saw film series, and stars Tobin Bell, Shawnee Smith, Synnøve Macody Lund, Steven Brand, and Michael Beach.",
    id: "c5ee82b1-6c00-47f5-a0a4-ea50edb58875",
    rating: 0.3081021836080129,
  },
  {
    displayName: "Pain Hustlers",
    format: "Movie",
    genres: ["Drama"],
    summary:
      "Pain Hustlers is an upcoming American conspiracy drama film directed by David Yates from a screenplay by Wells Tower, based on a 2018 New York Times Magazine article, \"The Pain Hustlers\", by Evan Hughes and his subsequent novel The Hard Sell released in 2022. It stars Emily Blunt, Chris Evans, Andy García, Catherine O'Hara, Jay Duplass, Brian d'Arcy James, and Chloe Coleman.",
    id: "19d526c1-9d37-474a-9591-7e0421d65ebf",
    rating: 0.7879714550668895,
  },
  {
    displayName: "Dune: Part Two",
    format: "Movie",
    genres: ["Science Fiction"],
    summary:
      "Dune: Part Two is an upcoming American epic science fiction film directed by Denis Villeneuve from a screenplay by Villeneuve, Jon Spaihts, and Eric Roth. The direct sequel to the 2021 film, it is the second of a two-part adaptation of the 1965 novel Dune by Frank Herbert and will cover roughly the second half of the book. Timothée Chalamet, Rebecca Ferguson, Josh Brolin, Stellan Skarsgård, Dave Bautista, Stephen McKinley Henderson, Zendaya, Charlotte Rampling, and Javier Bardem reprise their roles from the first film, with Florence Pugh, Austin Butler, Christopher Walken, Léa Seydoux, Souheila Yacoub, and Tim Blake Nelson joining the ensemble cast.",
    id: "45f3e306-950d-43ff-8dcf-c36ef19bf1ea",
    rating: 0.8624597022678457,
  },
  {
    displayImageUrl:
      "https://upload.wikimedia.org/wikipedia/en/7/7a/The_Marvels_poster.jpg",
    displayName: "The Marvels",
    format: "Movie",
    genres: ["Superhero"],
    summary:
      "The Marvels is an upcoming American superhero film based on Marvel Comics featuring the characters Carol Danvers / Captain Marvel, Kamala Khan / Ms. Marvel, and Monica Rambeau. Produced by Marvel Studios and distributed by Walt Disney Studios Motion Pictures, it is intended to be the sequel to the film Captain Marvel (2019), a continuation of the television series Ms. Marvel (2022), and the 33rd film in the Marvel Cinematic Universe (MCU). The film is directed by Nia DaCosta from a screenplay she co-wrote with Megan McDonnell, Elissa Karasik, and Zeb Wells. It stars Brie Larson as Carol Danvers, Iman Vellani as Kamala Khan, and Teyonah Parris as Monica Rambeau, alongside Samuel L. Jackson. In the film, Danvers, Khan, and Rambeau begin swapping places with each other every time they use their powers and must team-up.",
    id: "abcb3b48-bb14-4c16-b96a-a54dc2f9da3d",
    rating: 0.4103903158048434,
  },
  {
    displayImageUrl:
      "https://upload.wikimedia.org/wikipedia/en/thumb/0/00/Chicken_run_ver1.jpg/320px-Chicken_run_ver1.jpg",
    displayName: "Chicken Run: Dawn of the Nugget",
    format: "Movie",
    genres: ["Adventure", "Animated", "Comedy"],
    summary:
      "Chicken Run is a 2000 stop-motion animated adventure comedy film produced by Pathé and Aardman Animations in partnership with DreamWorks Animation. Aardman's first feature-length film, it was directed by Peter Lord and Nick Park from a screenplay by Karey Kirkpatrick and based on an original story by Lord and Park. The film stars the voices of Julia Sawalha, Mel Gibson, Tony Haygarth, Miranda Richardson, Phil Daniels, Lynn Ferguson, Timothy Spall, Imelda Staunton, and Benjamin Whitrow. The plot centres on a group of British anthropomorphic chickens who see an American rooster named Rocky Rhodes as their only hope to escape the farm when their owners want to turn them into meat pies.",
    id: "4fc2187c-82ab-4fda-b943-d87c5bd530c5",
    rating: 0.8963883299085187,
  },
  {
    displayName: "The Killer",
    format: "Movie",
    genres: ["Action", "Noir", "Thriller"],
    summary:
      "The Killer is an upcoming American neo-noir action thriller film directed by David Fincher and with a screenplay by Andrew Kevin Walker. The film is based on the French graphic novel series of the same name by Alexis Nolent and Luc Jacamon. The film stars Michael Fassbender, Charles Parnell, Arliss Howard, Sophie Charlotte, and Tilda Swinton.",
    id: "541ffde2-4763-4446-9ab8-aab7fff3bb4f",
    rating: 0.34098623471160683,
  },
  {
    displayName: "The Holdovers",
    format: "Movie",
    genres: ["Comedy", "Drama"],
    summary:
      "The Holdovers is an upcoming American comedy-drama film directed by Alexander Payne, written by David Hemingson and starring Paul Giamatti.",
    id: "81e82287-ae0b-4618-9b61-1e6e14401a0f",
    rating: 0.8135264378224096,
  },
  {
    displayImageUrl:
      "https://upload.wikimedia.org/wikipedia/en/b/b5/Hunger_games_the_ballad_of_songbirds_and_snakes.png",
    displayName: "The Hunger Games: The Ballad of Songbirds and Snakes",
    format: "Movie",
    genres: ["Action", "Science Fiction"],
    summary:
      "The Hunger Games: The Ballad of Songbirds and Snakes is an upcoming American science fiction action film directed by Francis Lawrence from a screenplay by Michael Arndt and Michael Lesslie, based on the 2020 novel The Ballad of Songbirds and Snakes by Suzanne Collins. It is the fifth installment in The Hunger Games film series, serving as a prequel to The Hunger Games (2012). The film stars Tom Blyth, Rachel Zegler, Josh Andrés Rivera, Hunter Schafer, Jason Schwartzman, Burn Gorman, Peter Dinklage, and Viola Davis. Set 64 years before the first film, it follows the origins of Coriolanus Snow (Blyth) and his relationship with a young Hunger Games tribute Lucy Gray Baird (Zegler), which lead him on the path to becoming the tyrannical leader of Panem.",
    id: "f4337d0e-1e99-4838-8385-d63c50a1c511",
    rating: 0.4992417063469161,
  },
  {
    displayImageUrl:
      "https://upload.wikimedia.org/wikipedia/en/b/bd/Trolls3film.jpg",
    displayName: "Trolls Band Together",
    format: "Movie",
    genres: ["Animated", "Comedy", "Musical"],
    summary:
      "Trolls Band Together is an upcoming American computer-animated musical comedy film produced by DreamWorks Animation and distributed by Universal Pictures, based on the Good Luck Trolls dolls from Thomas Dam. It is directed by Walt Dohrn and co-directed by Tim Heitz, from a screenplay by Elizabeth Tippet and the writing team of Jonathan Aibel and Glenn Berger. The film serves as the sequel to Trolls World Tour (2020) and the third installment in the Trolls franchise. Anna Kendrick, Justin Timberlake, Zooey Deschanel, Christopher Mintz-Plasse, Icona Pop, Anderson .Paak, Ron Funches, Kenan Thompson, Kunal Nayyar, and Dohrn reprise their voice roles from its predecessors, with newcomers Eric André, Kid Cudi, Daveed Diggs, Troye Sivan, Camila Cabello, Amy Schumer, Andrew Rannells, RuPaul, and Zosia Mamet joining the ensemble voice cast. In the film, Poppy (Kendrick) and Branch (Timberlake), who are officially a couple, attempt to rescue Floyd (Sivan) while reuniting Branch's brothers after the boyband phenomenon, BroZone, was disbanded.",
    id: "e319e2af-24c6-4199-babd-f6e53864c3dd",
    rating: 0.4640016375443661,
  },
  {
    displayName: "A Family Affair",
    format: "Movie",
    genres: ["Comedy", "Romance"],
    summary:
      "A Family Affair is an upcoming American romantic comedy film directed by Richard LaGravenese and written by Carrie Solomon. The film stars Nicole Kidman, Zac Efron, Joey King, Liza Koshy, and Kathy Bates.",
    id: "9ee47335-ab76-41ac-9887-aa756f871239",
    rating: 0.08141972022971,
  },
  {
    displayName: "Thanksgiving",
    format: "Movie",
    genres: ["Slasher"],
    summary:
      "Thanksgiving is an upcoming American slasher film directed by Eli Roth and produced by Roger Birnbaum, from a screenplay written by Roth and Jeff Rendell. It is based on Roth's mock trailer of the same name from Grindhouse (2007). The film stars Addison Rae and Patrick Dempsey.",
    id: "0ce3bcf0-d00c-4cfb-addb-e019d55a6141",
    rating: 0.30740287000462874,
  },
  {
    displayName: "Wish",
    format: "Movie",
    genres: ["Animated"],
    summary:
      'Walt Disney Animation Studios is an American animation studio headquartered in Burbank, California, the original feature film division of The Walt Disney Company. The studio\'s films are also often called "Disney Classics", or "Disney Animated Canon".',
    id: "191f9dc2-71cf-43aa-a323-8979fd8e6d28",
    rating: 0.9125990512659579,
  },
  {
    displayName: "Napoleon",
    format: "Movie",
    genres: ["Drama", "Historical"],
    summary:
      "Napoleon is an upcoming epic historical drama film directed and produced by Ridley Scott and written by David Scarpa. It stars Joaquin Phoenix as Napoleon and depicts the French leader's rise to power. The film is scheduled to be theatrically released by Sony Pictures Releasing on November 22, 2023, before streaming on Apple TV+ at a later date.",
    id: "370470f6-7093-4b3b-8897-e8c094e416fa",
    rating: 0.3941396195294049,
  },
  {
    displayName: "Leo",
    format: "Movie",
    genres: [],
    id: "2b2a33f5-1ddc-451a-9978-397b239d096a",
    rating: 0.1414775445334373,
  },
  {
    displayName: "Leave the World Behind",
    format: "Movie",
    genres: ["Thriller"],
    summary:
      "Leave the World Behind is an upcoming psychological thriller film written, directed and produced by Sam Esmail, based on the 2020 the novel of the same name by Rumaan Alam. The film stars Julia Roberts, Mahershala Ali, Ethan Hawke, Myha'la Herrold, Farrah Mackenzie, Charlie Evans, and Kevin Bacon.",
    id: "2a81280b-3bec-4f02-b6da-b77d5b61a287",
    rating: 0.45539870311888,
  },
  {
    displayName: "Magazine Dreams",
    format: "Movie",
    genres: ["Drama"],
    summary:
      "Magazine Dreams is a 2023 American drama film written and directed by Elijah Bynum. It stars Jonathan Majors, Haley Bennett, Taylour Paige, Mike O'Hearn, Harrison Page and Harriet Sansom Harris.",
    id: "07854ccb-ed9e-4ea7-a70a-2745d7842ca4",
    rating: 0.8823315730597732,
  },
  {
    displayName: "Wonka",
    format: "Movie",
    genres: ["Fantasy", "Musical"],
    summary:
      "Wonka is an upcoming musical fantasy film directed by Paul King, who co-wrote the screenplay with Simon Farnaby. The film serves as a prequel to the 1964 novel Charlie and the Chocolate Factory by Roald Dahl and stars Timothée Chalamet as the titular character, following his early days as an eccentric chocolatier. Keegan-Michael Key, Rowan Atkinson, Sally Hawkins, Olivia Colman, and Jim Carter star in supporting roles.",
    id: "bb09d905-91f5-4c8d-a074-44b3dd14d02b",
    rating: 0.6208453232439666,
  },
  {
    displayImageUrl:
      "https://upload.wikimedia.org/wikipedia/en/thumb/f/f9/Aquaman_and_the_Lost_Kingdom_logo.jpg/320px-Aquaman_and_the_Lost_Kingdom_logo.jpg",
    displayName: "Aquaman and the Lost Kingdom",
    format: "Movie",
    genres: ["Superhero"],
    summary:
      "Aquaman and the Lost Kingdom is an upcoming American superhero film based on the DC Comics character Aquaman. Produced by DC Studios, the Safran Company, and Atomic Monster Productions, and set for distribution by Warner Bros. Pictures, it is intended to be the sequel to Aquaman (2018), and the 15th and final installment in the DC Extended Universe (DCEU). The film is directed by James Wan from a screenplay written by David Leslie Johnson-McGoldrick, and stars Jason Momoa as Arthur Curry / Aquaman alongside Amber Heard, Willem Dafoe, Patrick Wilson, Dolph Lundgren, Yahya Abdul-Mateen II, Temuera Morrison, and Nicole Kidman.",
    id: "29d3a119-f5b8-4025-8053-cd4a2da45cf8",
    rating: 0.9356076198383216,
  },
  {
    displayName: "Untitled Ghostbusters: Afterlife sequel",
    format: "Movie",
    genres: ["Comedy", "Supernatural"],
    summary:
      "The untitled Ghostbusters: Afterlife sequel is an upcoming American supernatural comedy film directed by Gil Kenan from a screenplay co-written by Jason Reitman and Kenan. It serves as the sequel to Ghostbusters: Afterlife (2021), and the fifth film in the Ghostbusters franchise. The film stars Finn Wolfhard, Mckenna Grace, Celeste O'Connor, Carrie Coon, Paul Rudd and Ernie Hudson reprising their roles, with new additions to the cast including Kumail Nanjiani, Patton Oswalt, James Acaster and Emily Alyn Lind.",
    id: "c2a9383f-1c4c-4d20-b203-d1bf595c1802",
    rating: 0.33239974288947804,
  },
  {
    displayName: "Rebel Moon",
    format: "Movie",
    genres: ["Science Fiction"],
    summary:
      "Rebel Moon is an upcoming American epic space opera film directed by Zack Snyder from a screenplay he co-wrote with Shay Hatten and Kurt Johnstad, based on a story he also created with Johnstad. Produced by The Stone Quarry and Grand Electric, and distributed by Netflix. The film features an ensemble cast that includes Sofia Boutella, Charlie Hunnam, Ray Fisher, Djimon Hounsou, Jena Malone, Corey Stoll, Ed Skrein, Cleopatra Coleman, Fra Fee, Cary Elwes, and Anthony Hopkins.",
    id: "3eb62dc9-1a6b-4198-a874-3f9803400874",
    rating: 0.9199268003500447,
  },
  {
    displayName: "Migration",
    format: "Movie",
    genres: [],
    summary:
      "This is a list of productions produced by Illumination, an American film and animation studio based in Santa Monica, California, United States. This includes feature films, television specials, shorts, and digital series. As of 2023, Illumination has released 13 feature films, which were all distributed by Universal Pictures, with their first being Despicable Me on July 9, 2010, and their latest being The Super Mario Bros. Movie on April 5, 2023.",
    id: "fc38a141-0383-439b-bf95-380d6272d8bc",
    rating: 0.43692455499400906,
  },
  {
    displayName: "The Color Purple",
    format: "Movie",
    genres: ["Drama", "Musical", "Historical"],
    summary:
      "The Color Purple is an upcoming American musical coming-of-age period drama film directed by Blitz Bazawule and adapted for the screen by Marcus Gardley from the 2005 stage musical of the same name, which is in turn based on Alice Walker's 1982 Pulitzer Prize-winning novel of the same name. It is the second film adaptation of the novel, following Steven Spielberg's 1985 film adaptation. Spielberg and Quincy Jones return to produce this version, along with the stage musical's producers Scott Sanders and Oprah Winfrey, the latter of whom also starred in the 1985 film as Sofia.",
    id: "ff3d1928-8527-42a5-970e-64900d0ce81c",
    rating: 0.4190935816639636,
  },
] as ContentItem[];
