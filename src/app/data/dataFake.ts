export interface SongArticle {
  id: string;
  rank: number;
  title: string;
  artist: string;
  album: string;
  releaseYear: string;
  streams: string;
  genre: string;
  duration: string;
  photoCover: string;
  description: string;
  contentParagraphs: string[];
  records: string[];
  trivia: string[];
  spotifyUrl: string;
}

export const dataFake: SongArticle[] = [
  {
    id: '1',
    rank: 1,
    title: 'Blinding Lights - The Weeknd quebra todos os recordes e reina absoluto no Spotify',
    artist: 'The Weeknd',
    album: 'After Hours',
    releaseYear: '2019',
    streams: '4.350.000.000+',
    genre: 'Synthwave / Synth-pop / R&B',
    duration: '3:20',
    photoCover: 'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?q=80&w=1200&auto=format&fit=crop',
    description: 'Com mais de 4,3 bilhões de streams, o hit mundial de Abel Tesfaye desbancou todos os concorrentes e se consagrou como a música mais ouvida da história da plataforma.',
    contentParagraphs: [
      'Lançada em 29 de novembro de 2019 como o segundo single de seu aclamado quarto álbum de estúdio, "After Hours", a faixa "Blinding Lights" de The Weeknd redefiniu a música pop dos anos 2020. Com uma estética nostálgica inspirada no synthwave dos anos 1980 e batidas eletrizantes criadas ao lado do lendário produtor sueco Max Martin e Oscar Holter, a música conquistou o topo de paradas em mais de 35 países.',
      'Em janeiro de 2023, "Blinding Lights" oficialmente ultrapassou "Shape of You" de Ed Sheeran para se tornar a canção com maior número de reproduções na história de todo o Spotify. Sua permanência nas paradas foi tão impressionante que a revista Billboard a nomeou oficialmente como a música número 1 de todos os tempos na história do Hot 100, superando clássicos que perduravam por décadas.',
      'A atmosfera cinematográfica do videoclipe gravado nas ruas iluminadas de Las Vegas, combinada com a apresentação histórica no Super Bowl LV, transformou a era "After Hours" em um marco cultural. Mesmo anos após o lançamento, a faixa continua adicionando centenas de milhares de streams diariamente em playlists globais.'
    ],
    records: [
      '#1 Canção mais ouvida de todos os tempos no Spotify (+4,35 bilhões de reproduções)',
      'Primeira faixa na história a permanecer no Top 10 da Billboard Hot 100 por 1 ano inteiro (57 semanas)',
      '#1 Canção de Maior Sucesso de Todos os Tempos segundo a Billboard',
      'Mais rápida a alcançar a marca de 2 e 3 bilhões de streams na época'
    ],
    trivia: [
      'The Weeknd escreveu a melodia principal em poucas horas no estúdio em Estocolmo ao lado de Max Martin.',
      'A canção viralizou organicamente no TikTok com o "Blinding Lights Challenge", impulsionando seu alcance intergeracional.',
      'O traje vermelho clássico usado nas apresentações tornou-se um dos visuais mais icônicos da cultura pop contemporânea.'
    ],
    spotifyUrl: 'https://open.spotify.com/track/0VjIjW4GlUZAMYd2vXMi3b'
  },
  {
    id: '2',
    rank: 2,
    title: 'Shape of You - Ed Sheeran continua firme como o maior hino pop dos anos 2010',
    artist: 'Ed Sheeran',
    album: '÷ (Divide)',
    releaseYear: '2017',
    streams: '3.820.000.000+',
    genre: 'Pop / Dancehall',
    duration: '3:53',
    photoCover: 'https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?q=80&w=1200&auto=format&fit=crop',
    description: 'O megasucesso acústico-dancehall de Ed Sheeran dominou o planeta em 2017 e permaneceu no topo do Spotify por mais de 5 anos ininterruptos.',
    contentParagraphs: [
      'Originalmente escrita em sessões com Steve Mac e Johnny McDaid com a intenção de ser gravada por Rihanna ou pelo grupo Little Mix, "Shape of You" tomou outro rumo quando a gravadora de Ed Sheeran insistiu que a canção fizesse parte de seu álbum "÷ (Divide)". A intuição foi certeira: a música se tornou um colosso comercial instantâneo.',
      'Com seu riff rítmico inconfundível de marimba e uma melodia vocal cativante, a música acumulou recordes astronômicos. Foi a primeira faixa na história a romper a barreira dos 3 bilhões de reproduções no Spotify, estabelecendo um padrão que poucos artistas conseguiram sequer sonhar em atingir.',
      'A faixa dominou o topo da UK Singles Chart por 14 semanas e a Billboard Hot 100 por 12 semanas, além de vencer o Grammy de Melhor Performance Pop Solo em 2018.'
    ],
    records: [
      'Primeira faixa a atingir 2 bilhões e 3 bilhões de streams no Spotify',
      'Permaneceu no ranking das mais ouvidas do mundo por mais de 2.000 dias consecutivos',
      'Certificada com mais de 30 discos de platina em múltiplos países'
    ],
    trivia: [
      'Ed Sheeran gravou as bases de percussão batendo em seu próprio violão acústico.',
      'Os compositores de "No Scrubs" do TLC receberam créditos na faixa devido a semelhanças harmônicas no refrão.'
    ],
    spotifyUrl: 'https://open.spotify.com/track/7qiZfU4dY1lWllzX7mPBI3'
  },
  {
    id: '3',
    rank: 3,
    title: 'Someone You Loved - Lewis Capaldi e a balada emotiva que comoveu bilhões',
    artist: 'Lewis Capaldi',
    album: 'Divinely Uninspired to a Hellish Extent',
    releaseYear: '2018',
    streams: '3.410.000.000+',
    genre: 'Pop / Piano Ballad / Indie Pop',
    duration: '3:02',
    photoCover: 'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?q=80&w=1200&auto=format&fit=crop',
    description: 'Com uma voz potente e carregada de vulnerabilidade, o cantor escocês conquistou o posto de balada com piano mais transmitida da história moderna.',
    contentParagraphs: [
      'Diferente das produções eletrônicas e repletas de sintetizadores que habitualmente dominam as paradas, "Someone You Loved" provou o poder atemporal de um piano solo e uma interpretação vocal visceral. Lewis Capaldi levou cerca de seis meses para concluir a letra da canção, buscando capturar a dor da perda e do luto de forma universal.',
      'O resultado foi um impacto astronômico: a faixa escalou lentamente as paradas até alcançar o #1 tanto no Reino Unido quanto nos Estados Unidos. A sinceridade desarmada de Capaldi e seu carisma hilário nas redes sociais impulsionaram a música a se tornar a 3ª canção mais ouvida de todos os tempos no Spotify.',
      'A canção foi indicada a Canção do Ano no Grammy de 2020 e recebeu o Brit Award de Canção do Ano, tornando Capaldi uma das maiores potências vocais da década.'
    ],
    records: [
      'Mais de 3,4 bilhões de streams no Spotify',
      'Balada solo ao piano mais ouvida de todos os tempos nas plataformas digitais',
      'Passou 7 semanas no topo da Official Singles Chart do Reino Unido'
    ],
    trivia: [
      'O primeiro videoclipe oficial estrelou o renomado ator Peter Capaldi (Doctor Who), primo distante de Lewis Capaldi.',
      'Lewis revelou que quase desistiu da faixa por achar que não conseguiria alcançar o tom alto do refrão ao vivo.'
    ],
    spotifyUrl: 'https://open.spotify.com/track/7qEHsqek3amRFiPRDJvcZ9'
  },
  {
    id: '4',
    rank: 4,
    title: 'Sunflower - Post Malone & Swae Lee: A obra-prima sonora do Aranhaverso',
    artist: 'Post Malone & Swae Lee',
    album: 'Spider-Man: Into the Spider-Verse / Hollywood\'s Bleeding',
    releaseYear: '2018',
    streams: '3.320.000.000+',
    genre: 'Hip-Hop / Dream Pop / R&B',
    duration: '2:38',
    photoCover: 'https://images.unsplash.com/photo-1511735111819-9a3f7709049c?q=80&w=1200&auto=format&fit=crop',
    description: 'Criada para a trilha sonora de Homem-Aranha no Aranhaverso, a colaboração se tornou uma das músicas mais certificadas e amadas do século.',
    contentParagraphs: [
      'Poucas trilhas sonoras no cinema moderno conseguiram capturar tão perfeitamente o espírito de um personagem quanto "Sunflower". Feita para acompanhar a jornada de Miles Morales na obra-prima animada "Homem-Aranha no Aranhaverso", a química entre os timbres únicos de Swae Lee e Post Malone gerou uma atmosfera sonhadora, calorosa e viciante.',
      'A faixa não apenas atingiu o primeiro lugar da Billboard Hot 100, como quebrou o recorde histórico da RIAA ao ser certificada com Disco de Platina Duplo-Diamante (mais de 20x platina nos EUA), sendo a primeira música na história da indústria fonográfica americana a alcançar esse feito incomparável.',
      'No Spotify, a canção mantém uma audiência diária massiva, servindo tanto como trilha de nostalgia dos fãs quanto como um dos maiores hinos de verão já produzidos.'
    ],
    records: [
      'Primeira música na história dos EUA certificada com 2x Diamante pela RIAA (20 milhões de unidades)',
      'Mais de 3,3 bilhões de transmissões no Spotify',
      'Trilha sonora cinematográfica animada de maior sucesso comercial da história do streaming'
    ],
    trivia: [
      'Swae Lee gravou sua icônica linha inicial "Needless to say, I keep in check" em apenas uma tomada no estúdio.',
      'A música foi indicada a Gravação do Ano e Melhor Performance Pop em Dupla no Grammy 2020.'
    ],
    spotifyUrl: 'https://open.spotify.com/track/3KkXRQHbMCARz0aVfEt68P'
  },
  {
    id: '5',
    rank: 5,
    title: 'As It Was - Harry Styles e o fenômeno indie-pop que parou o mundo em 2022',
    artist: 'Harry Styles',
    album: 'Harry\'s House',
    releaseYear: '2022',
    streams: '3.250.000.000+',
    genre: 'Indie Pop / Synth-pop / New Wave',
    duration: '2:47',
    photoCover: 'https://images.unsplash.com/photo-1501386761578-eac5c94b800a?q=80&w=1200&auto=format&fit=crop',
    description: 'Com uma linha de baixo vibrante e sinos contagiantes, Harry Styles quebrou o recorde mundial do Guinness de streams em 24 horas no Spotify.',
    contentParagraphs: [
      'Quando "As It Was" foi lançada em 1º de abril de 2022 como lead single do álbum "Harry\'s House", o impacto foi imediato. A faixa estabeleceu o recorde do Guinness World Records para a música mais reproduzida no Spotify em 24 horas por um artista masculino, com impressionantes 16,1 milhões de reproduções em um único dia.',
      'Contrastando uma melodia animada e efervescente com uma letra íntima sobre vulnerabilidade, isolamento e mudanças pessoais, a faixa passou 15 semanas no cobiçado primeiro lugar da Billboard Hot 100, tornando-se a 4ª mais duradoura da história americana.',
      'O álbum "Harry\'s House" acabou vencendo o cobiçado prêmio de Álbum do Ano no Grammy 2023, consagrando definitivamente Harry Styles como um dos maiores ícones da sua geração.'
    ],
    records: [
      'Recorde do Guinness: Música mais transmitida em 24 horas no Spotify por um artista masculino (16,1 milhões)',
      'Mais de 3,2 bilhões de streams acumulados',
      'Passou 15 semanas no #1 da Billboard Hot 100'
    ],
    trivia: [
      'A voz de criança que abre a música dizendo "Come on, Harry, we wanna say goodnight to you" é de sua afilhada Ruby Winston.',
      'O videoclipe foi gravado em Londres com coreografias inovadoras em uma plataforma giratória de arte moderna.'
    ],
    spotifyUrl: 'https://open.spotify.com/track/4LRPiXqCikLlN15c3yImP7'
  },
  {
    id: '6',
    rank: 6,
    title: 'Starboy - The Weeknd & Daft Punk: A fusão eletrizante do R&B com o toque francês',
    artist: 'The Weeknd ft. Daft Punk',
    album: 'Starboy',
    releaseYear: '2016',
    streams: '3.120.000.000+',
    genre: 'Electro-pop / R&B / Synthwave',
    duration: '3:50',
    photoCover: 'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?q=80&w=1200&auto=format&fit=crop',
    description: 'A colaboração histórica entre o cantor canadense e a lendária dupla de música eletrônica Daft Punk marcou época com seu beat futurista.',
    contentParagraphs: [
      'Em 2016, The Weeknd viajou até Paris para entrar em estúdio com Thomas Bangalter e Guy-Manuel de Homem-Christo, os lendários robôs do Daft Punk. Dessa união nasceu "Starboy", faixa-título que inaugurou uma nova fase estética na carreira de Abel Tesfaye, marcada pelo visual soturno e a icônica cruz de neon.',
      'Com uma linha de baixo pulsante e vocais robóticos característicos da dupla francesa, a música liderou as paradas internacionais e se tornou uma das colaborações mais prestigiadas e executadas de todo o catálogo do Spotify.',
      'A música foi fundamental para solidificar The Weeknd como um superstar global capaz de transitar com perfeição entre o underground do R&B e o topo absoluto da música pop global.'
    ],
    records: [
      'Mais de 3,1 bilhões de streams no Spotify',
      'Música mais executada da carreira do Daft Punk nas plataformas digitais',
      'Líder das paradas em mais de 30 países'
    ],
    trivia: [
      'Guy-Manuel do Daft Punk tocou a bateria ao vivo no estúdio enquanto Abel improvisava as melodias vocais.',
      'O videoclipe venceu o prêmio de Melhor Vídeo no MTV Europe Music Awards de 2016.'
    ],
    spotifyUrl: 'https://open.spotify.com/track/7MXVkk9YM5IZxh0wAE23mA'
  },
  {
    id: '7',
    rank: 7,
    title: 'Stay - The Kid LAROI & Justin Bieber: A explosão pop punk que dominou o planeta',
    artist: 'The Kid LAROI & Justin Bieber',
    album: 'F*ck Love 3: Overkill',
    releaseYear: '2021',
    streams: '3.080.000.000+',
    genre: 'Synth-pop / Pop Punk',
    duration: '2:21',
    photoCover: 'https://images.unsplash.com/photo-1465847899084-d164df4dedc6?q=80&w=1200&auto=format&fit=crop',
    description: 'Com ritmo frenético e refrão explosivo, a parceria entre o jovem australiano e Justin Bieber se tornou um dos hits mais rápidos a bater 3 bilhões.',
    contentParagraphs: [
      'Com apenas 2 minutos e 21 segundos de duração, "Stay" foi desenhada com precisão milimétrica para a era digital: sem enrolação, com batidas aceleradas a 170 BPM e um dueto vocal dinâmico entre o jovem prodígio The Kid LAROI e o experiente Justin Bieber.',
      'A canção dominou o Billboard Hot 100 por 7 semanas não consecutivas e passou incríveis 13 semanas no topo da Billboard Global 200, mostrando um apelo esmagador em todos os continentes, desde a América Latina até a Ásia.',
      'No Spotify, a canção entrou para o seleto clube das faixas com mais de 3 bilhões de streams em tempo recorde.'
    ],
    records: [
      'Mais de 3 bilhões de reproduções globais no Spotify',
      '13 semanas em #1 no Billboard Global 200',
      'Faixa australiana mais ouvida da história da música'
    ],
    trivia: [
      'The Kid LAROI gravou a melodia enquanto passava uma tarde na casa de Charlie Puth, que auxiliou na produção das teclas.',
      'Justin Bieber gravou seus vocais de improviso após ouvir a demo uma única vez.'
    ],
    spotifyUrl: 'https://open.spotify.com/track/5PjdY0CKGZdErtk25b9OhV'
  },
  {
    id: '8',
    rank: 8,
    title: 'Believer - Imagine Dragons e o poder do rock contemporâneo nas paradas globais',
    artist: 'Imagine Dragons',
    album: 'Evolve',
    releaseYear: '2017',
    streams: '2.980.000.000+',
    genre: 'Arena Rock / Pop Rock / Trap Rock',
    duration: '3:24',
    photoCover: 'https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?q=80&w=1200&auto=format&fit=crop',
    description: 'Transformando sofrimento e dor em força e triunfo, a banda de Las Vegas criou o maior hino de rock do século XXI no streaming.',
    contentParagraphs: [
      'Liderada pelos vocais intensos e percussão bombástica de Dan Reynolds, "Believer" transcendeu as divisões tradicionais de gênero musical. A faixa mescla elementos de rock de arena, batidas inspiradas no hip-hop moderno e refrão com peso avassalador.',
      'A música foi escrita após Dan Reynolds enfrentar um período de severa dor crônica causada por espondilite anquilosante e depressão. Ele decidiu canalizar essa experiência em uma mensagem afirmativa de que a dor é necessária para o crescimento pessoal.',
      'Com quase 3 bilhões de streams, "Believer" se firmou como a canção de rock mais reproduzida na história de todas as plataformas digitais.'
    ],
    records: [
      '#1 Canção de Rock mais executada no Spotify (+2,98 bilhões)',
      'Passou 29 semanas consecutivas no topo da Billboard Hot Rock Songs',
      'Mais de 10 milhões de cópias comercializadas nos Estados Unidos'
    ],
    trivia: [
      'O ator Dolph Lundgren (o Ivan Drago de Rocky IV) protagonizou o videoclipe em uma luta simbólica de boxe com Dan Reynolds.',
      'A canção foi utilizada em dezenas de trailers de filmes, comerciais do Super Bowl e eventos da Nintendo.'
    ],
    spotifyUrl: 'https://open.spotify.com/track/0pqnGHJpmpxLKifKR2L6wp'
  }
];
