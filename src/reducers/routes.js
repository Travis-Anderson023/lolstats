let Aatrox = null
let Ahri = null
let Akali = null
let Alistar = null
let Amumu = null
let Anivia = null
let Annie = null
let Aphelios = null
let Ashe = null
let AurelionSol = null
let Azir = null
let Bard = null
let Blitzcrank = null
let Brand = null
let Braum = null
let Caitlyn = null
let Camille = null
let Cassiopeia = null
let ChoGath = null
let Corki = null
let Darius = null
let Diana = null
let Mundo = null
let Draven = null
let Ekko = null
let Elise = null
let Evelynn = null
let Ezreal = null
let Fiddlesticks = null
let Fiora = null
let Fizz = null
let Galio = null
let Gangplank = null
let Garen = null
let Gnar = null
let Gragas = null
let Graves = null
let Hecarim = null
let Heimerdinger = null
let Illaoi = null
let Irelia = null
let Ivern = null
let Janna = null
let JarvanIV = null
let Jax = null
let Jayce = null
let Jhin = null
let Jinx = null
let KaiSa = null
let Kalista = null
let Karma = null
let Karthus = null
let Kassadin = null
let Katarina = null
let Kayle = null
let Kayn = null
let Kennen = null
let KhaZix = null
let Kindred = null
let Kled = null
let KledSkaarl = null
let KogMaw = null
let LeBlanc = null
let LeeSin = null
let Leona = null
let Lillia = null
let Lissandra = null
let Lucian = null
let Lulu = null
let Lux = null
let Malphite = null
let Malzahar = null
let Maokai = null
let MasterYi = null
let MegaGnar = null
let MissFortune = null
let Mordekaiser = null
let Morgana = null
let Nami = null
let Nasus = null
let Nautilus = null
let Neeko = null
let Nidalee = null
let Nocturne = null
let NunuWillump = null
let Olaf = null
let Orianna = null
let Ornn = null
let Pantheon = null
let Poppy = null
let Pyke = null
let Qiyana = null
let Quinn = null
let Rakan = null
let Rammus = null
let RekSai = null
let Renekton = null
let Rengar = null
let Riven = null
let Rumble = null
let Ryze = null
let Samira = null
let Sejuani = null
let Senna = null
let Seraphine = null
let Sett = null
let Shaco = null
let Shen = null
let Shyvana = null
let Singed = null
let Sion = null
let Sivir = null
let Skarner = null
let Sona = null
let Soraka = null
let Swain = null
let Sylas = null
let Syndra = null
let TahmKench = null
let Taliyah = null
let Talon = null
let Taric = null
let Teemo = null
let Thresh = null
let Tristana = null
let Trundle = null
let Tryndamere = null
let TwistedFate = null
let Twitch = null
let Udyr = null
let Urgot = null
let Varus = null
let Vayne = null
let Veigar = null
let VelKoz = null
let Vi = null
let Viktor = null
let Vladimir = null
let Volibear = null
let Warwick = null
let Wukong = null
let Xayah = null
let Xerath = null
let XinZhao = null
let Yasuo = null
let Yone = null
let Yorick = null
let Yuumi = null
let Zac = null
let Zed = null
let Ziggs = null
let Zilean = null
let Zoe = null
let Zyra = null
const routesReducer = (state = [
    {
      text: Aatrox,
      img: <img style={{ width: '200', height: 200 }} src={"https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Aatrox_0.jpg"} alt="Testingimage" />,
      path: '/Aatrox'
    },
    {
      text: Ahri,
      img: <img style={{ width: '200', height: 200 }} src={"https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Ahri_0.jpg"} alt="Testingimage" />,
      path: '/Ahri'
    },
    {
      text: Akali,
      img: <img style={{ width: '200', height: 200 }} src={"https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Akali_0.jpg"} alt="Testingimage" />,
      path: '/Akali'
    },
    {
      text: Alistar,
      img: <img style={{ width: '200', height: 200 }} src={"https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Alistar_0.jpg"} alt="Testingimage" />,
      path: '/Alistar'
    },
    {
      text: Amumu,
      img: <img style={{ width: '200', height: 200 }} src={"https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Amumu_0.jpg"} alt="Testingimage" />,
      path: '/Amumu'
    },
    {
      text: Anivia,
      img: <img style={{ width: '200', height: 200 }} src={"https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Anivia_0.jpg"} alt="Testingimage" />,
      path: '/Anivia'
    },
    {
      text: Annie,
      img: <img style={{ width: '200', height: 200 }} src={"https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Annie_0.jpg"} alt="Testingimage" />,
      path: '/Annie'
    },
    {
      text: Aphelios,
      img: <img style={{ width: '200', height: 200 }} src={"https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Aphelios_0.jpg"} alt="Testingimage" />,
      path: '/Aphelios'
    },
    {
      text: Ashe,
      img: <img style={{ width: '200', height: 200 }} src={"https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Ashe_0.jpg"} alt="Testingimage" />,
      path: '/Ashe'
    },
    {
      text: AurelionSol,
      img: <img style={{ width: '200', height: 200 }} src={"https://ddragon.leagueoflegends.com/cdn/img/champion/splash/AurelionSol_0.jpg"} alt="Testingimage" />,
      path: '/Aurelion Sol'
    },
    {
      text: Azir,
      img: <img style={{ width: '200', height: 200 }} src={"https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Azir_0.jpg"} alt="Testingimage" />,
      path: '/Azir'
    },
    {
      text: Bard,
      img: <img style={{ width: '200', height: 200 }} src={"https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Bard_0.jpg"} alt="Testingimage" />,
      path: '/Bard'
    },
    {
      text: Blitzcrank,
      img: <img style={{ width: '200', height: 200 }} src={"https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Blitzcrank_0.jpg"} alt="Testingimage" />,
      path: '/Blitzcrank'
    },
    {
      text: Brand,
      img: <img style={{ width: '200', height: 200 }} src={"https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Brand_0.jpg"} alt="Testingimage" />,
      path: '/Brand'
    },
    {
      text: Braum,
      img: <img style={{ width: '200', height: 200 }} src={"https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Braum_0.jpg"} alt="Testingimage" />,
      path: '/Braum'
    },
    {
      text: Caitlyn,
      img: <img style={{ width: '200', height: 200 }} src={"https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Caitlyn_0.jpg"} alt="Testingimage" />,
      path: '/Caitlyn'
    },
    {
      text: Camille,
      img: <img style={{ width: '200', height: 200 }} src={"https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Camille_0.jpg"} alt="Testingimage" />,
      path: '/Camille'
    },
    {
      text: Cassiopeia,
      img: <img style={{ width: '200', height: 200 }} src={"https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Cassiopeia_0.jpg"} alt="Testingimage" />,
      path: '/Cassiopeia'
    },
    {
      text: ChoGath,
      img: <img style={{ width: '200', height: 200 }} src={"https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Chogath_0.jpg"} alt="Testingimage" />,
      path: '/ChoGath'
    },
    {
      text: Corki,
      img: <img style={{ width: '200', height: 200 }} src={"https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Corki_0.jpg"} alt="Testingimage" />,
      path: '/Corki'
    },
    {
      text: Darius,
      img: <img style={{ width: '200', height: 200 }} src={"https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Darius_0.jpg"} alt="Testingimage" />,
      path: '/Darius'
    },
    {
      text: Diana,
      img: <img style={{ width: '200', height: 200 }} src={"https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Diana_0.jpg"} alt="Testingimage" />,
      path: '/Diana'
    },
    {
      text: Mundo,
      img: <img style={{ width: '200', height: 200 }} src={"https://ddragon.leagueoflegends.com/cdn/img/champion/splash/DrMundo_0.jpg"} alt="Testingimage" />,
      path: '/DrMundo'
    },
    {
      text: Draven,
      img: <img style={{ width: '200', height: 200 }} src={"https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Draven_0.jpg"} alt="Testingimage" />,
      path: '/Draven'
    },
    {
      text: Ekko,
      img: <img style={{ width: '200', height: 200 }} src={"https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Ekko_0.jpg"} alt="Testingimage" />,
      path: '/Ekko'
    },
    {
      text: Elise,
      img: <img style={{ width: '200', height: 200 }} src={"https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Elise_0.jpg"} alt="Testingimage" />,
      path: '/Elise'
    },
    {
      text: Evelynn,
      img: <img style={{ width: '200', height: 200 }} src={"https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Evelynn_0.jpg"} alt="Testingimage" />,
      path: '/Evelynn'
    },
    {
      text: Ezreal,
      img: <img style={{ width: '200', height: 200 }} src={"https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Ezreal_0.jpg"} alt="Testingimage" />,
      path: '/Ezreal'
    },
    {
      text: Fiddlesticks,
      img: <img style={{ width: '200', height: 200 }} src={"https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Fiddlesticks_0.jpg"} alt="Testingimage" />,
      path: '/Fiddlesticks'
    },
    {
      text: Fiora,
      img: <img style={{ width: '200', height: 200 }} src={"https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Fiora_0.jpg"} alt="Testingimage" />,
      path: '/Fiora'
    },
    {
      text: Fizz,
      img: <img style={{ width: '200', height: 200 }} src={"https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Fizz_0.jpg"} alt="Testingimage" />,
      path: '/Fizz'
    },
    {
      text: Galio,
      img: <img style={{ width: '200', height: 200 }} src={"https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Galio_0.jpg"} alt="Testingimage" />,
      path: '/Galio'
    },
    {
      text: Gangplank,
      img: <img style={{ width: '200', height: 200 }} src={"https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Gangplank_0.jpg"} alt="Testingimage" />,
      path: '/Gangplank'
    },
    {
      text: Garen,
      img: <img style={{ width: '200', height: 200 }} src={"https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Garen_0.jpg"} alt="Testingimage" />,
      path: '/Garen'
    },
    {
      text: Gnar,
      img: <img style={{ width: '200', height: 200 }} src={"https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Gnar_0.jpg"} alt="Testingimage" />,
      path: '/Gnar'
    },
    {
      text: Gragas,
      img: <img style={{ width: '200', height: 200 }} src={"https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Gragas_0.jpg"} alt="Testingimage" />,
      path: '/Gragas'
    },
    {
      text: Graves,
      img: <img style={{ width: '200', height: 200 }} src={"https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Graves_0.jpg"} alt="Testingimage" />,
      path: '/Graves'
    },
    {
      text: Hecarim,
      img: <img style={{ width: '200', height: 200 }} src={"https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Hecarim_0.jpg"} alt="Testingimage" />,
      path: '/Hecarim'
    },
    {
      text: Heimerdinger,
      img: <img style={{ width: '200', height: 200 }} src={"https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Heimerdinger_0.jpg"} alt="Testingimage" />,
      path: '/Heimerdinger'
    },
    {
      text: Illaoi,
      img: <img style={{ width: '200', height: 200 }} src={"https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Illaoi_0.jpg"} alt="Testingimage" />,
      path: '/Illaoi'
    },
    {
      text: Irelia,
      img: <img style={{ width: '200', height: 200 }} src={"https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Irelia_0.jpg"} alt="Testingimage" />,
      path: '/Irelia'
    },
    {
      text: Ivern,
      img: <img style={{ width: '200', height: 200 }} src={"https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Ivern_0.jpg"} alt="Testingimage" />,
      path: '/Ivern'
    },
    {
      text: Janna,
      img: <img style={{ width: '200', height: 200 }} src={"https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Janna_0.jpg"} alt="Testingimage" />,
      path: '/Janna'
    },
    {
      text: JarvanIV,
      img: <img style={{ width: '200', height: 200 }} src={"https://ddragon.leagueoflegends.com/cdn/img/champion/splash/JarvanIV_0.jpg"} alt="Testingimage" />,
      path: '/JarvanIV'
    },
    {
      text: Jax,
      img: <img style={{ width: '200', height: 200 }} src={"https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Jax_0.jpg"} alt="Testingimage" />,
      path: '/Jax'
    },
    {
      text: Jayce,
      img: <img style={{ width: '200', height: 200 }} src={"https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Jayce_0.jpg"} alt="Testingimage" />,
      path: '/Jayce'
    },
    {
      text: Jhin,
      img: <img style={{ width: '200', height: 200 }} src={"https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Jhin_0.jpg"} alt="Testingimage" />,
      path: '/Jhin'
    },
    {
      text: Jinx,
      img: <img style={{ width: '200', height: 200 }} src={"https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Jinx_0.jpg"} alt="Testingimage" />,
      path: '/Jinx'
    },
    {
      text: KaiSa,
      img: <img style={{ width: '200', height: 200 }} src={"https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Kaisa_0.jpg"} alt="Testingimage" />,
      path: '/KaiSa'
    },
    {
      text: Kalista,
      img: <img style={{ width: '200', height: 200 }} src={"https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Kalista_0.jpg"} alt="Testingimage" />,
      path: '/Kalista'
    },
    {
      text: Karma,
      img: <img style={{ width: '200', height: 200 }} src={"https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Karma_0.jpg"} alt="Testingimage" />,
      path: '/Karma'
    },
    {
      text: Karthus,
      img: <img style={{ width: '200', height: 200 }} src={"https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Karthus_0.jpg"} alt="Testingimage" />,
      path: '/Karthus'
    },
    {
      text: Kassadin,
      img: <img style={{ width: '200', height: 200 }} src={"https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Kassadin_0.jpg"} alt="Testingimage" />,
      path: '/Kassadin'
    },
    {
      text: Katarina,
      img: <img style={{ width: '200', height: 200 }} src={"https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Katarina_0.jpg"} alt="Testingimage" />,
      path: '/Katarina'
    },
    {
      text: Kayle,
      img: <img style={{ width: '200', height: 200 }} src={"https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Kayle_0.jpg"} alt="Testingimage" />,
      path: '/Kayle'
    },
    {
      text: Kayn,
      img: <img style={{ width: '200', height: 200 }} src={"https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Kayn_0.jpg"} alt="Testingimage" />,
      path: '/Kayn'
    },
    {
      text: Kennen,
      img: <img style={{ width: '200', height: 200 }} src={"https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Kennen_0.jpg"} alt="Testingimage" />,
      path: '/Kennen'
    },
    {
      text: KhaZix,
      img: <img style={{ width: '200', height: 200 }} src={"https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Khazix_0.jpg"} alt="Testingimage" />,
      path: '/KhaZix'
    },
    {
      text: Kindred,
      img: <img style={{ width: '200', height: 200 }} src={"https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Kindred_0.jpg"} alt="Testingimage" />,
      path: '/Kindred'
    },
    {
      text: Kled,
      img: <img style={{ width: '200', height: 200 }} src={"https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Kled_0.jpg"} alt="Testingimage" />,
      path: '/Kled'
    },
    {
      text: KledSkaarl,
      img: <img style={{ width: '200', height: 200 }} src={"https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Kled_0.jpg"} alt="Testingimage" />,
      path: '/KledSkaarl'
    },
    {
      text: KogMaw,
      img: <img style={{ width: '200', height: 200 }} src={"https://ddragon.leagueoflegends.com/cdn/img/champion/splash/KogMaw_0.jpg"} alt="Testingimage" />,
      path: '/KogMaw'
    },
    {
      text: LeBlanc,
      img: <img style={{ width: '200', height: 200 }} src={"https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Leblanc_0.jpg"} alt="Testingimage" />,
      path: '/LeBlanc'
    },
    {
      text: LeeSin,
      img: <img style={{ width: '200', height: 200 }} src={"https://ddragon.leagueoflegends.com/cdn/img/champion/splash/LeeSin_0.jpg"} alt="Testingimage" />,
      path: '/LeeSin'
    },
    {
      text: Leona,
      img: <img style={{ width: '200', height: 200 }} src={"https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Leona_0.jpg"} alt="Testingimage" />,
      path: '/Leona'
    },
    {
      text: Lillia,
      img: <img style={{ width: '200', height: 200 }} src={"https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Lillia_0.jpg"} alt="Testingimage" />,
      path: '/Lillia'
    },
    {
      text: Lissandra,
      img: <img style={{ width: '200', height: 200 }} src={"https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Lissandra_0.jpg"} alt="Testingimage" />,
      path: '/Lissandra'
    },
    {
      text: Lucian,
      img: <img style={{ width: '200', height: 200 }} src={"https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Lucian_0.jpg"} alt="Testingimage" />,
      path: '/Lucian'
    },
    {
      text: Lulu,
      img: <img style={{ width: '200', height: 200 }} src={"https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Lulu_0.jpg"} alt="Testingimage" />,
      path: '/Lulu'
    },
    {
      text: Lux,
      img: <img style={{ width: '200', height: 200 }} src={"https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Lux_0.jpg"} alt="Testingimage" />,
      path: '/Lux'
    },
    {
      text: Malphite,
      img: <img style={{ width: '200', height: 200 }} src={"https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Malphite_0.jpg"} alt="Testingimage" />,
      path: '/Malphite'
    },
    {
      text: Malzahar,
      img: <img style={{ width: '200', height: 200 }} src={"https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Malzahar_0.jpg"} alt="Testingimage" />,
      path: '/Malzahar'
    },
    {
      text: Maokai,
      img: <img style={{ width: '200', height: 200 }} src={"https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Maokai_0.jpg"} alt="Testingimage" />,
      path: '/Maokai'
    },
    {
      text: MasterYi,
      img: <img style={{ width: '200', height: 200 }} src={"https://ddragon.leagueoflegends.com/cdn/img/champion/splash/MasterYi_0.jpg"} alt="Testingimage" />,
      path: '/MasterYi'
    },
    {
      text: MegaGnar,
      img: <img style={{ width: '200', height: 200 }} src={"https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Gnar_0.jpg"} alt="Testingimage" />,
      path: '/MegaGnar'
    },
    {
      text: MissFortune,
      img: <img style={{ width: '200', height: 200 }} src={"https://ddragon.leagueoflegends.com/cdn/img/champion/splash/MissFortune_0.jpg"} alt="Testingimage" />,
      path: '/MissFortune'
    },
    {
      text: Mordekaiser,
      img: <img style={{ width: '200', height: 200 }} src={"https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Mordekaiser_0.jpg"} alt="Testingimage" />,
      path: '/Mordekaiser'
    },
    {
      text: Morgana,
      img: <img style={{ width: '200', height: 200 }} src={"https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Morgana_0.jpg"} alt="Testingimage" />,
      path: '/Morgana'
    },
    {
      text: Nami,
      img: <img style={{ width: '200', height: 200 }} src={"https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Nami_0.jpg"} alt="Testingimage" />,
      path: '/Nami'
    },
    {
      text: Nasus,
      img: <img style={{ width: '200', height: 200 }} src={"https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Nasus_0.jpg"} alt="Testingimage" />,
      path: '/Nasus'
    },
    {
      text: Nautilus,
      img: <img style={{ width: '200', height: 200 }} src={"https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Nautilus_0.jpg"} alt="Testingimage" />,
      path: '/Nautilus'
    },
    {
      text: Neeko,
      img: <img style={{ width: '200', height: 200 }} src={"https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Neeko_0.jpg"} alt="Testingimage" />,
      path: '/Neeko'
    },
    {
      text: Nidalee,
      img: <img style={{ width: '200', height: 200 }} src={"https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Nidalee_0.jpg"} alt="Testingimage" />,
      path: '/Nidalee'
    },
    {
      text: Nocturne,
      img: <img style={{ width: '200', height: 200 }} src={"https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Nocturne_0.jpg"} alt="Testingimage" />,
      path: '/Nocturne'
    },
    {
      text: NunuWillump,
      img: <img style={{ width: '200', height: 200 }} src={"https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Nunu_0.jpg"} alt="Testingimage" />,
      path: '/NunuWillump'
    },
    {
      text: Olaf,
      img: <img style={{ width: '200', height: 200 }} src={"https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Olaf_0.jpg"} alt="Testingimage" />,
      path: '/Olaf'
    },
    {
      text: Orianna,
      img: <img style={{ width: '200', height: 200 }} src={"https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Orianna_0.jpg"} alt="Testingimage" />,
      path: '/Orianna'
    },
    {
      text: Ornn,
      img: <img style={{ width: '200', height: 200 }} src={"https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Ornn_0.jpg"} alt="Testingimage" />,
      path: '/Ornn'
    },
    {
      text: Pantheon,
      img: <img style={{ width: '200', height: 200 }} src={"https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Pantheon_0.jpg"} alt="Testingimage" />,
      path: '/Pantheon'
    },
    {
      text: Poppy,
      img: <img style={{ width: '200', height: 200 }} src={"https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Poppy_0.jpg"} alt="Testingimage" />,
      path: '/Poppy'
    },
    {
      text: Pyke,
      img: <img style={{ width: '200', height: 200 }} src={"https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Pyke_0.jpg"} alt="Testingimage" />,
      path: '/Pyke'
    },
    {
      text: Qiyana,
      img: <img style={{ width: '200', height: 200 }} src={"https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Qiyana_0.jpg"} alt="Testingimage" />,
      path: '/Qiyana'
    },
    {
      text: Quinn,
      img: <img style={{ width: '200', height: 200 }} src={"https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Quinn_0.jpg"} alt="Testingimage" />,
      path: '/Quinn'
    },
    {
      text: Rakan,
      img: <img style={{ width: '200', height: 200 }} src={"https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Rakan_0.jpg"} alt="Testingimage" />,
      path: '/Rakan'
    },
    {
      text: Rammus,
      img: <img style={{ width: '200', height: 200 }} src={"https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Rammus_0.jpg"} alt="Testingimage" />,
      path: '/Rammus'
    },
    {
      text: RekSai,
      img: <img style={{ width: '200', height: 200 }} src={"https://ddragon.leagueoflegends.com/cdn/img/champion/splash/RekSai_0.jpg"} alt="Testingimage" />,
      path: '/RekSai'
    },
    {
      text: Renekton,
      img: <img style={{ width: '200', height: 200 }} src={"https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Renekton_0.jpg"} alt="Testingimage" />,
      path: '/Renekton'
    },
    {
      text: Rengar,
      img: <img style={{ width: '200', height: 200 }} src={"https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Rengar_0.jpg"} alt="Testingimage" />,
      path: '/Rengar'
    },
    {
      text: Riven,
      img: <img style={{ width: '200', height: 200 }} src={"https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Riven_0.jpg"} alt="Testingimage" />,
      path: '/Riven'
    },
    {
      text: Rumble,
      img: <img style={{ width: '200', height: 200 }} src={"https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Rumble_0.jpg"} alt="Testingimage" />,
      path: '/Rumble'
    },
    {
      text: Ryze,
      img: <img style={{ width: '200', height: 200 }} src={"https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Ryze_0.jpg"} alt="Testingimage" />,
      path: '/Ryze'
    },
    {
      text: Samira,
      img: <img style={{ width: '200', height: 200 }} src={"https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Samira_0.jpg"} alt="Testingimage" />,
      path: '/Samira'
    },
    {
      text: Sejuani,
      img: <img style={{ width: '200', height: 200 }} src={"https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Sejuani_0.jpg"} alt="Testingimage" />,
      path: '/Sejuani'
    },
    {
      text: Senna,
      img: <img style={{ width: '200', height: 200 }} src={"https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Senna_0.jpg"} alt="Testingimage" />,
      path: '/Senna'
    },
    {
      text: Seraphine,
      img: <img style={{ width: '200', height: 200 }} src={"https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Seraphine_0.jpg"} alt="Testingimage" />,
      path: '/Seraphine'
    },
    {
      text: Sett,
      img: <img style={{ width: '200', height: 200 }} src={"https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Sett_0.jpg"} alt="Testingimage" />,
      path: '/Sett'
    },
    {
      text: Shaco,
      img: <img style={{ width: '200', height: 200 }} src={"https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Shaco_0.jpg"} alt="Testingimage" />,
      path: '/Shaco'
    },
    {
      text: Shen,
      img: <img style={{ width: '200', height: 200 }} src={"https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Shen_0.jpg"} alt="Testingimage" />,
      path: '/Shen'
    },
    {
      text: Shyvana,
      img: <img style={{ width: '200', height: 200 }} src={"https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Shyvana_0.jpg"} alt="Testingimage" />,
      path: '/Shyvana'
    },
    {
      text: Singed,
      img: <img style={{ width: '200', height: 200 }} src={"https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Singed_0.jpg"} alt="Testingimage" />,
      path: '/Singed'
    },
    {
      text: Sion,
      img: <img style={{ width: '200', height: 200 }} src={"https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Sion_0.jpg"} alt="Testingimage" />,
      path: '/Sion'
    },
    {
      text: Sivir,
      img: <img style={{ width: '200', height: 200 }} src={"https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Sivir_0.jpg"} alt="Testingimage" />,
      path: '/Sivir'
    },
    {
      text: Skarner,
      img: <img style={{ width: '200', height: 200 }} src={"https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Skarner_0.jpg"} alt="Testingimage" />,
      path: '/Skarner'
    },
    {
      text: Sona,
      img: <img style={{ width: '200', height: 200 }} src={"https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Sona_0.jpg"} alt="Testingimage" />,
      path: '/Sona'
    },
    {
      text: Soraka,
      img: <img style={{ width: '200', height: 200 }} src={"https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Soraka_0.jpg"} alt="Testingimage" />,
      path: '/Soraka'
    },
    {
      text: Swain,
      img: <img style={{ width: '200', height: 200 }} src={"https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Swain_0.jpg"} alt="Testingimage" />,
      path: '/Swain'
    },
    {
      text: Sylas,
      img: <img style={{ width: '200', height: 200 }} src={"https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Sylas_0.jpg"} alt="Testingimage" />,
      path: '/Sylas'
    },
    {
      text: Syndra,
      img: <img style={{ width: '200', height: 200 }} src={"https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Syndra_0.jpg"} alt="Testingimage" />,
      path: '/Syndra'
    },
    {
      text: TahmKench,
      img: <img style={{ width: '200', height: 200 }} src={"https://ddragon.leagueoflegends.com/cdn/img/champion/splash/TahmKench_0.jpg"} alt="Testingimage" />,
      path: '/TahmKench'
    },
    {
      text: Taliyah,
      img: <img style={{ width: '200', height: 200 }} src={"https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Taliyah_0.jpg"} alt="Testingimage" />,
      path: '/Taliyah'
    },
    {
      text: Talon,
      img: <img style={{ width: '200', height: 200 }} src={"https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Talon_0.jpg"} alt="Testingimage" />,
      path: '/Talon'
    },
    {
      text: Taric,
      img: <img style={{ width: '200', height: 200 }} src={"https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Taric_0.jpg"} alt="Testingimage" />,
      path: '/Taric'
    },
    {
      text: Teemo,
      img: <img style={{ width: '200', height: 200 }} src={"https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Teemo_0.jpg"} alt="Testingimage" />,
      path: '/Teemo'
    },
    {
      text: Thresh,
      img: <img style={{ width: '200', height: 200 }} src={"https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Thresh_0.jpg"} alt="Testingimage" />,
      path: '/Thresh'
    },
    {
      text: Tristana,
      img: <img style={{ width: '200', height: 200 }} src={"https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Tristana_0.jpg"} alt="Testingimage" />,
      path: '/Tristana'
    },
    {
      text: Trundle,
      img: <img style={{ width: '200', height: 200 }} src={"https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Trundle_0.jpg"} alt="Testingimage" />,
      path: '/Trundle'
    },
    {
      text: Tryndamere,
      img: <img style={{ width: '200', height: 200 }} src={"https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Tryndamere_0.jpg"} alt="Testingimage" />,
      path: '/Tryndamere'
    },
    {
      text: TwistedFate,
      img: <img style={{ width: '200', height: 200 }} src={"https://ddragon.leagueoflegends.com/cdn/img/champion/splash/TwistedFate_0.jpg"} alt="Testingimage" />,
      path: '/TwistedFate'
    },
    {
      text: Twitch,
      img: <img style={{ width: '200', height: 200 }} src={"https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Twitch_0.jpg"} alt="Testingimage" />,
      path: '/Twitch'
    },
    {
      text: Udyr,
      img: <img style={{ width: '200', height: 200 }} src={"https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Udyr_0.jpg"} alt="Testingimage" />,
      path: '/Udyr'
    },
    {
      text: Urgot,
      img: <img style={{ width: '200', height: 200 }} src={"https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Urgot_0.jpg"} alt="Testingimage" />,
      path: '/Urgot'
    },
    {
      text: Varus,
      img: <img style={{ width: '200', height: 200 }} src={"https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Varus_0.jpg"} alt="Testingimage" />,
      path: '/Varus'
    },
    {
      text: Vayne,
      img: <img style={{ width: '200', height: 200 }} src={"https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Vayne_0.jpg"} alt="Testingimage" />,
      path: '/Vayne'
    },
    {
      text: Veigar,
      img: <img style={{ width: '200', height: 200 }} src={"https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Veigar_0.jpg"} alt="Testingimage" />,
      path: '/Veigar'
    },
    {
      text: VelKoz,
      img: <img style={{ width: '200', height: 200 }} src={"https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Velkoz_0.jpg"} alt="Testingimage" />,
      path: '/VelKoz'
    },
    {
      text: Vi,
      img: <img style={{ width: '200', height: 200 }} src={"https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Vi_0.jpg"} alt="Testingimage" />,
      path: '/Vi'
    },
    {
      text: Viktor,
      img: <img style={{ width: '200', height: 200 }} src={"https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Viktor_0.jpg"} alt="Testingimage" />,
      path: '/Viktor'
    },
    {
      text: Vladimir,
      img: <img style={{ width: '200', height: 200 }} src={"https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Vladimir_0.jpg"} alt="Testingimage" />,
      path: '/Vladimir'
    },
    {
      text: Volibear,
      img: <img style={{ width: '200', height: 200 }} src={"https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Volibear_0.jpg"} alt="Testingimage" />,
      path: '/Volibear'
    },
    {
      text: Warwick,
      img: <img style={{ width: '200', height: 200 }} src={"https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Warwick_0.jpg"} alt="Testingimage" />,
      path: '/Warwick'
    },
    {
      text: Wukong,
      img: <img style={{ width: '200', height: 200 }} src={"https://ddragon.leagueoflegends.com/cdn/img/champion/splash/MonkeyKing_0.jpg"} alt="Testingimage" />,
      path: '/Wukong'
    },
    {
      text: Xayah,
      img: <img style={{ width: '200', height: 200 }} src={"https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Xayah_0.jpg"} alt="Testingimage" />,
      path: '/Xayah'
    },
    {
      text: Xerath,
      img: <img style={{ width: '200', height: 200 }} src={"https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Xerath_0.jpg"} alt="Testingimage" />,
      path: '/Xerath'
    },
    {
      text: XinZhao,
      img: <img style={{ width: '200', height: 200 }} src={"https://ddragon.leagueoflegends.com/cdn/img/champion/splash/XinZhao_0.jpg"} alt="Testingimage" />,
      path: '/XinZhao'
    },
    {
      text: Yasuo,
      img: <img style={{ width: '200', height: 200 }} src={"https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Yasuo_0.jpg"} alt="Testingimage" />,
      path: '/Yasuo'
    },
    {
      text: Yone,
      img: <img style={{ width: '200', height: 200 }} src={"https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Yone_0.jpg"} alt="Testingimage" />,
      path: '/Yone'
    },
    {
      text: Yorick,
      img: <img style={{ width: '200', height: 200 }} src={"https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Yorick_0.jpg"} alt="Testingimage" />,
      path: '/Yorick'
    },
    {
      text: Yuumi,
      img: <img style={{ width: '200', height: 200 }} src={"https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Yuumi_0.jpg"} alt="Testingimage" />,
      path: '/Yuumi'
    },
    {
      text: Zac,
      img: <img style={{ width: '200', height: 200 }} src={"https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Zac_0.jpg"} alt="Testingimage" />,
      path: '/Zac'
    },
    {
      text: Zed,
      img: <img style={{ width: '200', height: 200 }} src={"https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Zed_0.jpg"} alt="Testingimage" />,
      path: '/Zed'
    },
    {
      text: Ziggs,
      img: <img style={{ width: '200', height: 200 }} src={"https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Ziggs_0.jpg"} alt="Testingimage" />,
      path: '/Ziggs'
    },
    {
      text: Zilean,
      img: <img style={{ width: '200', height: 200 }} src={"https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Zilean_0.jpg"} alt="Testingimage" />,
      path: '/Zilean'
    },
    {
      text: Zoe,
      img: <img style={{ width: '200', height: 200 }} src={"https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Zoe_0.jpg"} alt="Testingimage" />,
      path: '/Zoe'
    },
    {
      text: Zyra,
      img: <img style={{ width: '200', height: 200 }} src={"https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Zyra_0.jpg"} alt="Testingimage" />,
      path: '/Zyra'
    }
]) => {return state}

export default routesReducer