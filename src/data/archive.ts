const u = (id: string, w = 1200) =>
  `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${w}&q=80`;

export type Film = {
  slug: string;
  title: string;
  year: number;
  decade: string;
  director: string;
  directorSlug: string;
  rating: number;
  runtime: string;
  country: string;
  genre: string;
  tag: string;
  still: string;
  staffPick?: boolean;
  synopsis: string;
  notes: string;
};

export const films: Film[] = [
  {
    slug: "the-400-blows",
    title: "The 400 Blows",
    year: 1959,
    decade: "1950s",
    director: "François Truffaut",
    directorSlug: "francois-truffaut",
    rating: 9.1,
    runtime: "99 min",
    country: "France",
    genre: "Drama",
    tag: "French New Wave",
    still: u("photo-1517604931442-7e0c8ed2963c"),
    staffPick: true,
    synopsis:
      "A restless Parisian boy drifts between an indifferent home and a punishing school, until the sea offers the only honest horizon he has ever seen.",
    notes:
      "Shot largely on location with a handheld Cameflex, the film's final freeze-frame rewrote how cinema ends a sentence.",
  },
  {
    slug: "metropolis",
    title: "Metropolis",
    year: 1927,
    decade: "1920s",
    director: "Fritz Lang",
    directorSlug: "fritz-lang",
    rating: 8.7,
    runtime: "153 min",
    country: "Germany",
    genre: "Science Fiction",
    tag: "Expressionist",
    still:
      "https://upload.wikimedia.org/wikipedia/commons/d/d9/%22Metropolis%22_%281927_film%29_%2815418159339%29.jpg",
    synopsis:
      "In a vertical city split between penthouse dreamers and subterranean workers, a machine-woman is built to break a strike.",
    notes:
      "Lost for decades, restored from a 16mm print discovered in Buenos Aires in 2008. Still the most expensive silent film ever made.",
  },
  {
    slug: "breathless",
    title: "Breathless",
    year: 1960,
    decade: "1960s",
    director: "Jean-Luc Godard",
    directorSlug: "jean-luc-godard",
    rating: 8.6,
    runtime: "90 min",
    country: "France",
    genre: "Crime",
    tag: "French New Wave",
    still: u("photo-1489599849927-2ee91cede3ba"),
    staffPick: true,
    synopsis:
      "A small-time thief with a Bogart habit talks his way across Paris with an American student who is never quite convinced.",
    notes:
      "The jump cuts began as a way to shorten a long film. They ended up shortening the whole history of editing.",
  },
  {
    slug: "the-night-of-the-hunter",
    title: "The Night of the Hunter",
    year: 1955,
    decade: "1950s",
    director: "Charles Laughton",
    directorSlug: "charles-laughton",
    rating: 8.1,
    runtime: "92 min",
    country: "USA",
    genre: "Thriller",
    tag: "Noir",
    still: u("photo-1503095396549-807759245b35"),
    synopsis:
      "A preacher with LOVE and HATE inked across his knuckles hunts two children down a river of shadow and hymn.",
    notes:
      "Laughton's only film as director. It flopped, then quietly became the template for American gothic.",
  },
  {
    slug: "persona",
    title: "Persona",
    year: 1966,
    decade: "1960s",
    director: "Ingmar Bergman",
    directorSlug: "ingmar-bergman",
    rating: 8.5,
    runtime: "83 min",
    country: "Sweden",
    genre: "Psychological",
    tag: "Psychological",
    still: u("photo-1524985069026-dd778a71c7b4"),
    synopsis:
      "An actress stops speaking. Her nurse cannot stop. On a bare island the two faces begin to trade places.",
    notes:
      "Bergman called it a poem in images. The famous split-face composition was assembled in-camera, not in post.",
  },
  {
    slug: "the-red-shoes",
    title: "The Red Shoes",
    year: 1948,
    decade: "1940s",
    director: "Michael Powell",
    directorSlug: "michael-powell",
    rating: 8.1,
    runtime: "135 min",
    country: "UK",
    genre: "Drama",
    tag: "Technicolor",
    still: u("photo-1478720568477-152d9b164e26"),
    synopsis:
      "A ballerina is asked to choose between the man she loves and the dance that will not release her.",
    notes:
      "Three-strip Technicolor at its most feverish. Scorsese has called it the film he has watched most often.",
  },
  {
    slug: "sunset-boulevard",
    title: "Sunset Boulevard",
    year: 1950,
    decade: "1950s",
    director: "Billy Wilder",
    directorSlug: "billy-wilder",
    rating: 8.9,
    runtime: "110 min",
    country: "USA",
    genre: "Noir",
    tag: "Noir",
    still:
      "https://upload.wikimedia.org/wikipedia/commons/1/14/Sunset_Boulevard_%281950_poster%29.jpg",
    synopsis:
      "A broke screenwriter drifts into the mansion of a silent-era star who is still waiting for her close-up.",
    notes:
      "Narrated by a dead man. Wilder shot the original opening in a morgue and had to cut it.",
  },
  {
    slug: "the-cabinet-of-dr-caligari",
    title: "The Cabinet of Dr. Caligari",
    year: 1920,
    decade: "1920s",
    director: "Robert Wiene",
    directorSlug: "robert-wiene",
    rating: 8.0,
    runtime: "76 min",
    country: "Germany",
    genre: "Horror",
    tag: "Expressionist",
    still:
      "https://upload.wikimedia.org/wikipedia/commons/7/74/CABINETOFDRCALIGARI-poster.jpg",
    synopsis:
      "A hypnotist and his sleepwalker arrive in a town of painted, leaning walls, and people begin to die at night.",
    notes:
      "Sets were painted on canvas because electricity was rationed. Constraint became a movement.",
  },
  {
    slug: "bicycle-thieves",
    title: "Bicycle Thieves",
    year: 1948,
    decade: "1940s",
    director: "Vittorio De Sica",
    directorSlug: "vittorio-de-sica",
    rating: 8.4,
    runtime: "89 min",
    country: "Italy",
    genre: "Drama",
    tag: "Neorealism",
    still: u("photo-1461151304267-38535e780c79"),
    synopsis:
      "A father and son search postwar Rome for a stolen bicycle, which is also a search for a future.",
    notes: "Cast entirely from non-actors. De Sica turned down a studio deal to keep it that way.",
  },
  {
    slug: "tokyo-story",
    title: "Tokyo Story",
    year: 1953,
    decade: "1950s",
    director: "Yasujiro Ozu",
    directorSlug: "yasujiro-ozu",
    rating: 8.8,
    runtime: "136 min",
    country: "Japan",
    genre: "Drama",
    tag: "Shomin-geki",
    still:
      "https://upload.wikimedia.org/wikipedia/commons/8/86/Tokyo_monogatari_poster.jpg",
    staffPick: true,
    synopsis:
      "An elderly couple travel to visit their grown children and find that everyone is busy being polite.",
    notes:
      "Ozu keeps the camera at tatami height and almost never moves it. The stillness does the work.",
  },
  {
    slug: "the-third-man",
    title: "The Third Man",
    year: 1949,
    decade: "1940s",
    director: "Carol Reed",
    directorSlug: "carol-reed",
    rating: 8.3,
    runtime: "104 min",
    country: "UK",
    genre: "Noir",
    tag: "Noir",
    still: u("photo-1571310100246-e0676f359b42"),
    synopsis:
      "A pulp novelist arrives in occupied Vienna for a friend's funeral and finds the coffin was a rumour.",
    notes: "Scored entirely on a single zither, recorded in a Viennese wine bar.",
  },
  {
    slug: "seven-samurai",
    title: "Seven Samurai",
    year: 1954,
    decade: "1950s",
    director: "Akira Kurosawa",
    directorSlug: "akira-kurosawa",
    rating: 9.0,
    runtime: "207 min",
    country: "Japan",
    genre: "Epic",
    tag: "Jidaigeki",
    still:
      "https://upload.wikimedia.org/wikipedia/commons/b/b5/Seven_Samurai_poster2.jpg",
    synopsis:
      "A starving village hires seven masterless swordsmen to stand between it and the harvest raiders.",
    notes:
      "Kurosawa's multi-camera long lenses invented the modern action grammar every blockbuster still borrows.",
  },
  {
    slug: "la-dolce-vita",
    title: "La Dolce Vita",
    year: 1960,
    decade: "1960s",
    director: "Federico Fellini",
    directorSlug: "federico-fellini",
    rating: 8.2,
    runtime: "174 min",
    country: "Italy",
    genre: "Drama",
    tag: "Modernist",
    still: u("photo-1485846234645-a62644f84728"),
    synopsis:
      "Seven nights in Rome with a gossip journalist who keeps mistaking spectacle for meaning.",
    notes:
      "Gave the world the word paparazzi, named after a photographer character called Paparazzo.",
  },
  {
    slug: "the-general",
    title: "The General",
    year: 1926,
    decade: "1920s",
    director: "Buster Keaton",
    directorSlug: "buster-keaton",
    rating: 8.5,
    runtime: "67 min",
    country: "USA",
    genre: "Comedy",
    tag: "Silent",
    still:
      "https://upload.wikimedia.org/wikipedia/commons/3/36/The_General_%281926%29_-_Movie_Poster.png",
    synopsis:
      "A railway engineer rejected by the army chases his stolen locomotive straight through the front line.",
    notes:
      "The bridge collapse was the most expensive shot of the silent era. It was done in one take.",
  },
  {
    slug: "casablanca",
    title: "Casablanca",
    year: 1942,
    decade: "1940s",
    director: "Michael Curtiz",
    directorSlug: "michael-curtiz",
    rating: 8.9,
    runtime: "102 min",
    country: "USA",
    genre: "Romance",
    tag: "Studio Era",
    still:
      "https://upload.wikimedia.org/wikipedia/commons/b/b3/CasablancaPoster-Gold.jpg",
    synopsis:
      "A nightclub owner in wartime Morocco has to decide whether neutrality is a position or a hiding place.",
    notes:
      "The ending was still unwritten a week into shooting. Nobody on set knew who would leave.",
  },
  {
    slug: "rear-window",
    title: "Rear Window",
    year: 1954,
    decade: "1950s",
    director: "Alfred Hitchcock",
    directorSlug: "alfred-hitchcock",
    rating: 8.6,
    runtime: "112 min",
    country: "USA",
    genre: "Thriller",
    tag: "Suspense",
    still: u("photo-1594909122845-11baa439b7bf"),
    synopsis:
      "A photographer with a broken leg watches the courtyard opposite until one window stops making sense.",
    notes: "Built as one enormous set with 31 apartments, each independently lit and dressed.",
  },
  {
    slug: "8-and-a-half",
    title: "8½",
    year: 1963,
    decade: "1960s",
    director: "Federico Fellini",
    directorSlug: "federico-fellini",
    rating: 8.4,
    runtime: "138 min",
    country: "Italy",
    genre: "Drama",
    tag: "Modernist",
    still: u("photo-1440404653325-ab127d49abc1"),
    synopsis:
      "A director with no film and no ideas retreats into memory, fantasy and the women who narrate him.",
    notes: "Fellini pinned a note to the camera during the shoot: remember, this is a comedy.",
  },
  {
    slug: "vertigo",
    title: "Vertigo",
    year: 1958,
    decade: "1950s",
    director: "Alfred Hitchcock",
    directorSlug: "alfred-hitchcock",
    rating: 8.7,
    runtime: "128 min",
    country: "USA",
    genre: "Thriller",
    tag: "Suspense",
    still: u("photo-1536440136628-849c177e76a1"),
    synopsis:
      "A retired detective follows a woman through San Francisco and falls in love with a person who is not there.",
    notes: "The dolly-zoom was invented here, on a miniature stairwell laid flat on its side.",
  },
  {
    slug: "pandoras-box",
    title: "Pandora's Box",
    year: 1929,
    decade: "1920s",
    director: "G.W. Pabst",
    directorSlug: "gw-pabst",
    rating: 7.9,
    runtime: "133 min",
    country: "Germany",
    genre: "Drama",
    tag: "Silent",
    still:
      "https://upload.wikimedia.org/wikipedia/commons/6/67/%22La_Caja_de_Pandora%22_poster%2C_1929.jpg",
    synopsis: "Lulu moves through Weimar Berlin leaving ruin behind her, entirely without malice.",
    notes:
      "Louise Brooks' bob became the decade's silhouette. She was dismissed by critics for 40 years.",
  },
];

export type Director = {
  slug: string;
  name: string;
  years: string;
  country: string;
  era: string;
  portrait: string;
  bio: string;
  signature: string;
  filmCount: number;
};

export const directors: Director[] = [
  {
    slug: "jean-luc-godard",
    name: "Jean-Luc Godard",
    years: "1930 – 2022",
    country: "France",
    era: "1960s",
    portrait:
      "https://upload.wikimedia.org/wikipedia/commons/2/24/Jean%E2%80%93Luc_Godard_%28cropped%29.jpg",
    bio: "Critic turned saboteur. Godard treated the feature film as an essay you could argue with, cutting against continuity until the seams became the subject.",
    signature: "Jump cuts, direct address, quotation as argument.",
    filmCount: 42,
  },
  {
    slug: "alfred-hitchcock",
    name: "Alfred Hitchcock",
    years: "1899 – 1980",
    country: "UK / USA",
    era: "1950s",
    portrait:
      "https://upload.wikimedia.org/wikipedia/commons/1/10/Alfred_Hitchcock_%281955%29.JPG",
    bio: "The architect of suspense. Hitchcock storyboarded anxiety frame by frame, giving the audience information the characters lacked and letting the wait do the damage.",
    signature: "Subjective camera, withheld information, ordinary rooms turned lethal.",
    filmCount: 53,
  },
  {
    slug: "akira-kurosawa",
    name: "Akira Kurosawa",
    years: "1910 – 1998",
    country: "Japan",
    era: "1950s",
    portrait:
      "https://upload.wikimedia.org/wikipedia/commons/4/48/Akirakurosawa-onthesetof7samurai-1953-page88.jpg",
    bio: "A painter first, Kurosawa composed weather as a character: rain, dust and wind pressing on people who must still choose.",
    signature: "Multi-camera long lenses, axial cuts, elemental weather.",
    filmCount: 30,
  },
  {
    slug: "ingmar-bergman",
    name: "Ingmar Bergman",
    years: "1918 – 2007",
    country: "Sweden",
    era: "1960s",
    portrait:
      "https://upload.wikimedia.org/wikipedia/commons/f/f2/Ingmar_Bergman_%281966%29.jpg",
    bio: "Bergman shot faces the way other directors shoot landscapes, holding on them until doubt surfaced.",
    signature: "Close-ups without escape, silence as dialogue.",
    filmCount: 46,
  },
  {
    slug: "fritz-lang",
    name: "Fritz Lang",
    years: "1890 – 1976",
    country: "Germany / USA",
    era: "1920s",
    portrait:
      "https://upload.wikimedia.org/wikipedia/commons/2/20/Fritz_Lang_%281969%29.jpg",
    bio: "From Weimar spectacle to American noir, Lang drew systems: cities, crowds and machines that grind the individual down.",
    signature: "Geometry of crowds, shadow as verdict.",
    filmCount: 40,
  },
  {
    slug: "federico-fellini",
    name: "Federico Fellini",
    years: "1920 – 1993",
    country: "Italy",
    era: "1960s",
    portrait:
      "https://upload.wikimedia.org/wikipedia/commons/9/97/Federico_Fellini_NYWTS_2.jpg",
    bio: "Fellini abandoned plot for procession, staging memory as a parade that never quite explains itself.",
    signature: "Circus logic, dream inserts, crowded frames.",
    filmCount: 24,
  },
  {
    slug: "yasujiro-ozu",
    name: "Yasujiro Ozu",
    years: "1903 – 1963",
    country: "Japan",
    era: "1950s",
    portrait:
      "https://upload.wikimedia.org/wikipedia/commons/8/85/Yasujiro_Ozu_01.jpg",
    bio: "Ozu filmed families at the exact height of someone sitting on the floor, and let ordinary politeness carry heartbreak.",
    signature: "Tatami-level camera, pillow shots, no pans.",
    filmCount: 54,
  },
  {
    slug: "billy-wilder",
    name: "Billy Wilder",
    years: "1906 – 2002",
    country: "Austria / USA",
    era: "1950s",
    portrait:
      "https://upload.wikimedia.org/wikipedia/commons/d/d0/Billy_Wilder.jpg",
    bio: "Wilder wrote dialogue like a card sharp and directed with the invisible efficiency of someone who knew the audience was smart.",
    signature: "Cynical narration, immaculate structure, last-line punchlines.",
    filmCount: 27,
  },
];

export type Club = {
  slug: string;
  name: string;
  blurb: string;
  members: string;
  cadence: string;
  host: string;
  cover: string;
  nowWatching: string;
  discussion: { author: string; initials: string; time: string; body: string }[];
};

export const clubs: Club[] = [
  {
    slug: "noir-after-dark",
    name: "Noir After Dark",
    blurb: "This week: shadows that tell a story.",
    members: "12.4K",
    cadence: "Thursdays · 21:00",
    host: "Dana Reyes",
    cover: u("photo-1503095396549-807759245b35", 900),
    nowWatching: "sunset-boulevard",
    discussion: [
      {
        author: "Dana Reyes",
        initials: "DR",
        time: "2h ago",
        body: "The narration is spoken by a corpse and nobody in 1950 blinked. Where else does that trick land this cleanly?",
      },
      {
        author: "Marcus Vale",
        initials: "MV",
        time: "5h ago",
        body: "Watch the pool lighting in reel three — it is the only warm light in the entire mansion.",
      },
      {
        author: "Ida Nakamura",
        initials: "IN",
        time: "1d ago",
        body: "Swanson playing a version of her own erased career still feels like the bravest casting ever done.",
      },
    ],
  },
  {
    slug: "new-wave-new-rules",
    name: "New Wave New Rules",
    blurb: "Rewatching the rebels of 1959.",
    members: "8.1K",
    cadence: "Sundays · 18:00",
    host: "Théo Baptiste",
    cover: u("photo-1489599849927-2ee91cede3ba", 900),
    nowWatching: "breathless",
    discussion: [
      {
        author: "Théo Baptiste",
        initials: "TB",
        time: "40m ago",
        body: "Reminder: we are watching the 4K restoration this week, not the 2008 transfer. The grain is the point.",
      },
      {
        author: "Priya Anand",
        initials: "PA",
        time: "3h ago",
        body: "The jump cuts read as impatience, not experiment. That is why they still feel modern.",
      },
    ],
  },
  {
    slug: "technicolor-dreamers",
    name: "Technicolor Dreamers",
    blurb: "The art of making colour feel loud.",
    members: "6.8K",
    cadence: "Saturdays · 20:00",
    host: "Ruth Alcott",
    cover: u("photo-1478720568477-152d9b164e26", 900),
    nowWatching: "the-red-shoes",
    discussion: [
      {
        author: "Ruth Alcott",
        initials: "RA",
        time: "1h ago",
        body: "Three-strip Technicolor needed so much light the sets hit 40°C. You can almost feel it in the ballet.",
      },
      {
        author: "Sam Okafor",
        initials: "SO",
        time: "6h ago",
        body: "The 17-minute ballet sequence is essentially a music video made 40 years early.",
      },
    ],
  },
  {
    slug: "silent-but-loud",
    name: "Silent But Loud",
    blurb: "Pre-1930 pictures, live-scored.",
    members: "4.2K",
    cadence: "Tuesdays · 19:30",
    host: "Elias Vogt",
    cover: u("photo-1533488765986-dfa2a9939acd", 900),
    nowWatching: "the-general",
    discussion: [
      {
        author: "Elias Vogt",
        initials: "EV",
        time: "12h ago",
        body: "Keaton never mugged for the camera. The stunts are funny because his face refuses to be.",
      },
    ],
  },
];

export const decades = [
  {
    id: "1920s",
    label: "1920s",
    title: "The Silent Cathedral",
    blurb: "Painted shadows, vertical cities and faces doing all the talking.",
    cover: u("photo-1516035069371-29a1b244cc32", 1400),
  },
  {
    id: "1940s",
    label: "1940s",
    title: "Rubble & Rain",
    blurb: "Studio gloss on one side of the ocean, neorealist streets on the other.",
    cover: u("photo-1461151304267-38535e780c79", 1400),
  },
  {
    id: "1950s",
    label: "1950s",
    title: "Widescreen Anxiety",
    blurb: "Colour got bigger, suburbs got quieter, and noir refused to die.",
    cover: u("photo-1542204165-65bf26472b9b", 1400),
  },
  {
    id: "1960s",
    label: "1960s",
    title: "Cut Against Yourself",
    blurb: "Rulebooks burned in Paris, Rome, Stockholm and Tokyo, all at once.",
    cover: u("photo-1485846234645-a62644f84728", 1400),
  },
];

export const heroStill = u("photo-1489599849927-2ee91cede3ba", 1600);

export const filmBySlug = (slug: string) => films.find((f) => f.slug === slug);
export const directorBySlug = (slug: string) => directors.find((d) => d.slug === slug);
export const clubBySlug = (slug: string) => clubs.find((c) => c.slug === slug);
export const filmsByDirector = (slug: string) => films.filter((f) => f.directorSlug === slug);
export const filmsByDecade = (id: string) => films.filter((f) => f.decade === id);

export const continueWatching = [
  { slug: "vertigo", progress: 62 },
  { slug: "tokyo-story", progress: 24 },
  { slug: "the-third-man", progress: 88 },
];
