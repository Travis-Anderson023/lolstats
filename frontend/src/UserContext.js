import { createContext , useState} from 'react'
import {CardMedia} from '@material-ui/core'

export const UserContext = createContext('')

export const UserContainer = ({children}) => {

    const [routes, setRoutes] = useState([
        {
          text: 'Aatrox',
          img: <CardMedia style={{width: '100%', height: '100%' }} component='img' image={"https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Aatrox_0.jpg"} alt="Testingimage" />,
          path: '/Aatrox'
        },
        {
          text: 'Ahri',
          img: <CardMedia style={{width:'100%', height: '100%'}} component='img' image={"https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Ahri_0.jpg"} alt="Testingimage" />,
          path: '/Ahri'
        },
        {
          text: 'Akali',
          img: <CardMedia style={{width:'100%', height: '100%'}} component='img' image={"https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Akali_0.jpg"} alt="Testingimage" />,
          path: '/Akali'
        },
        {
          text: 'Alistar',
          img: <CardMedia style={{width:'100%', height: '100%'}} component='img' image={"https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Alistar_0.jpg"} alt="Testingimage" />,
          path: '/Alistar'
        },
        {
          text: 'Amumu',
          img: <CardMedia style={{width:'100%', height: '100%'}} component='img' image={"https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Amumu_0.jpg"} alt="Testingimage" />,
          path: '/Amumu'
        },
        {
          text: 'Anivia',
          img: <CardMedia style={{width:'100%', height: '100%'}} component='img' image={"https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Anivia_0.jpg"} alt="Testingimage" />,
          path: '/Anivia'
        },
        {
          text: 'Annie',
          img: <CardMedia style={{width:'100%', height: '100%'}} component='img' image={"https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Annie_0.jpg"} alt="Testingimage" />,
          path: '/Annie'
        },
        {
          text: 'Aphelios',
          img: <CardMedia style={{width:'100%', height: '100%'}} component='img' image={"https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Aphelios_0.jpg"} alt="Testingimage" />,
          path: '/Aphelios'
        },
        {
          text: 'Ashe',
          img: <CardMedia style={{width:'100%', height: '100%'}} component='img' image={"https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Ashe_0.jpg"} alt="Testingimage" />,
          path: '/Ashe'
        },
        {
          text: 'AurelionSol',
          img: <CardMedia style={{width:'100%', height: '100%'}} component='img' image={"https://ddragon.leagueoflegends.com/cdn/img/champion/splash/AurelionSol_0.jpg"} alt="Testingimage" />,
          path: '/Aurelion Sol'
        },
        {
          text: 'Azir',
          img: <CardMedia style={{width:'100%', height: '100%'}} component='img' image={"https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Azir_0.jpg"} alt="Testingimage" />,
          path: '/Azir'
        },
        {
          text: 'Bard',
          img: <CardMedia style={{width:'100%', height: '100%'}} component='img' image={"https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Bard_0.jpg"} alt="Testingimage" />,
          path: '/Bard'
        },
        {
          text: 'Blitzcrank',
          img: <CardMedia style={{width:'100%', height: '100%'}} component='img' image={"https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Blitzcrank_0.jpg"} alt="Testingimage" />,
          path: '/Blitzcrank'
        },
        {
          text: 'Brand',
          img: <CardMedia style={{width:'100%', height: '100%'}} component='img' image={"https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Brand_0.jpg"} alt="Testingimage" />,
          path: '/Brand'
        },
        {
          text: 'Braum',
          img: <CardMedia style={{width:'100%', height: '100%'}} component='img' image={"https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Braum_0.jpg"} alt="Testingimage" />,
          path: '/Braum'
        },
        {
          text: 'Caitlyn',
          img: <CardMedia style={{width:'100%', height: '100%'}} component='img' image={"https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Caitlyn_0.jpg"} alt="Testingimage" />,
          path: '/Caitlyn'
        },
        {
          text: 'Camille',
          img: <CardMedia style={{width:'100%', height: '100%'}} component='img' image={"https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Camille_0.jpg"} alt="Testingimage" />,
          path: '/Camille'
        },
        {
          text: 'Cassiopeia',
          img: <CardMedia style={{width:'100%', height: '100%'}} component='img' image={"https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Cassiopeia_0.jpg"} alt="Testingimage" />,
          path: '/Cassiopeia'
        },
        {
          text: 'ChoGath',
          img: <CardMedia style={{width:'100%', height: '100%'}} component='img' image={"https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Chogath_0.jpg"} alt="Testingimage" />,
          path: '/ChoGath'
        },
        {
          text: 'Corki',
          img: <CardMedia style={{width:'100%', height: '100%'}} component='img' image={"https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Corki_0.jpg"} alt="Testingimage" />,
          path: '/Corki'
        },
        {
          text: 'Darius',
          img: <CardMedia style={{width:'100%', height: '100%'}} component='img' image={"https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Darius_0.jpg"} alt="Testingimage" />,
          path: '/Darius'
        },
        {
          text: 'Diana',
          img: <CardMedia style={{width:'100%', height: '100%'}} component='img' image={"https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Diana_0.jpg"} alt="Testingimage" />,
          path: '/Diana'
        },
        {
          text: 'Mundo',
          img: <CardMedia style={{width:'100%', height: '100%'}} component='img' image={"https://ddragon.leagueoflegends.com/cdn/img/champion/splash/DrMundo_0.jpg"} alt="Testingimage" />,
          path: '/DrMundo'
        },
        {
          text: 'Draven',
          img: <CardMedia style={{width:'100%', height: '100%'}} component='img' image={"https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Draven_0.jpg"} alt="Testingimage" />,
          path: '/Draven'
        },
        {
          text: 'Ekko',
          img: <CardMedia style={{width:'100%', height: '100%'}} component='img' image={"https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Ekko_0.jpg"} alt="Testingimage" />,
          path: '/Ekko'
        },
        {
          text: 'Elise',
          img: <CardMedia style={{width:'100%', height: '100%'}} component='img' image={"https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Elise_0.jpg"} alt="Testingimage" />,
          path: '/Elise'
        },
        {
          text: 'Evelynn',
          img: <CardMedia style={{width:'100%', height: '100%'}} component='img' image={"https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Evelynn_0.jpg"} alt="Testingimage" />,
          path: '/Evelynn'
        },
        {
          text: 'Ezreal',
          img: <CardMedia style={{width:'100%', height: '100%'}} component='img' image={"https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Ezreal_0.jpg"} alt="Testingimage" />,
          path: '/Ezreal'
        },
        {
          text: 'Fiddlesticks',
          img: <CardMedia style={{width:'100%', height: '100%'}} component='img' image={"https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Fiddlesticks_0.jpg"} alt="Testingimage" />,
          path: '/Fiddlesticks'
        },
        {
          text: 'Fiora',
          img: <CardMedia style={{width:'100%', height: '100%'}} component='img' image={"https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Fiora_0.jpg"} alt="Testingimage" />,
          path: '/Fiora'
        },
        {
          text: 'Fizz',
          img: <CardMedia style={{width:'100%', height: '100%'}} component='img' image={"https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Fizz_0.jpg"} alt="Testingimage" />,
          path: '/Fizz'
        },
        {
          text: 'Galio',
          img: <CardMedia style={{width:'100%', height: '100%'}} component='img' image={"https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Galio_0.jpg"} alt="Testingimage" />,
          path: '/Galio'
        },
        {
          text: 'Gangplank',
          img: <CardMedia style={{width:'100%', height: '100%'}} component='img' image={"https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Gangplank_0.jpg"} alt="Testingimage" />,
          path: '/Gangplank'
        },
        {
          text: 'Garen',
          img: <CardMedia style={{width:'100%', height: '100%'}} component='img' image={"https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Garen_0.jpg"} alt="Testingimage" />,
          path: '/Garen'
        },
        {
          text: 'Gnar',
          img: <CardMedia style={{width:'100%', height: '100%'}} component='img' image={"https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Gnar_0.jpg"} alt="Testingimage" />,
          path: '/Gnar'
        },
        {
          text: 'Gragas',
          img: <CardMedia style={{width:'100%', height: '100%'}} component='img' image={"https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Gragas_0.jpg"} alt="Testingimage" />,
          path: '/Gragas'
        },
        {
          text: 'Graves',
          img: <CardMedia style={{width:'100%', height: '100%'}} component='img' image={"https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Graves_0.jpg"} alt="Testingimage" />,
          path: '/Graves'
        },
        {
          text: 'Hecarim',
          img: <CardMedia style={{width:'100%', height: '100%'}} component='img' image={"https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Hecarim_0.jpg"} alt="Testingimage" />,
          path: '/Hecarim'
        },
        {
          text: 'Heimerdinger',
          img: <CardMedia style={{width:'100%', height: '100%'}} component='img' image={"https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Heimerdinger_0.jpg"} alt="Testingimage" />,
          path: '/Heimerdinger'
        },
        {
          text: 'Illaoi',
          img: <CardMedia style={{width:'100%', height: '100%'}} component='img' image={"https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Illaoi_0.jpg"} alt="Testingimage" />,
          path: '/Illaoi'
        },
        {
          text: 'Irelia',
          img: <CardMedia style={{width:'100%', height: '100%'}} component='img' image={"https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Irelia_0.jpg"} alt="Testingimage" />,
          path: '/Irelia'
        },
        {
          text: 'Ivern',
          img: <CardMedia style={{width:'100%', height: '100%'}} component='img' image={"https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Ivern_0.jpg"} alt="Testingimage" />,
          path: '/Ivern'
        },
        {
          text: 'Janna',
          img: <CardMedia style={{width:'100%', height: '100%'}} component='img' image={"https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Janna_0.jpg"} alt="Testingimage" />,
          path: '/Janna'
        },
        {
          text: 'JarvanIV',
          img: <CardMedia style={{width:'100%', height: '100%'}} component='img' image={"https://ddragon.leagueoflegends.com/cdn/img/champion/splash/JarvanIV_0.jpg"} alt="Testingimage" />,
          path: '/JarvanIV'
        },
        {
          text: 'Jax',
          img: <CardMedia style={{width:'100%', height: '100%'}} component='img' image={"https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Jax_0.jpg"} alt="Testingimage" />,
          path: '/Jax'
        },
        {
          text: 'Jayce',
          img: <CardMedia style={{width:'100%', height: '100%'}} component='img' image={"https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Jayce_0.jpg"} alt="Testingimage" />,
          path: '/Jayce'
        },
        {
          text: 'Jhin',
          img: <CardMedia style={{width:'100%', height: '100%'}} component='img' image={"https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Jhin_0.jpg"} alt="Testingimage" />,
          path: '/Jhin'
        },
        {
          text: 'Jinx',
          img: <CardMedia style={{width:'100%', height: '100%'}} component='img' image={"https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Jinx_0.jpg"} alt="Testingimage" />,
          path: '/Jinx'
        },
        {
          text: 'KaiSa',
          img: <CardMedia style={{width:'100%', height: '100%'}} component='img' image={"https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Kaisa_0.jpg"} alt="Testingimage" />,
          path: '/KaiSa'
        },
        {
          text: 'Kalista',
          img: <CardMedia style={{width:'100%', height: '100%'}} component='img' image={"https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Kalista_0.jpg"} alt="Testingimage" />,
          path: '/Kalista'
        },
        {
          text: 'Karma',
          img: <CardMedia style={{width:'100%', height: '100%'}} component='img' image={"https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Karma_0.jpg"} alt="Testingimage" />,
          path: '/Karma'
        },
        {
          text: 'Karthus',
          img: <CardMedia style={{width:'100%', height: '100%'}} component='img' image={"https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Karthus_0.jpg"} alt="Testingimage" />,
          path: '/Karthus'
        },
        {
          text: 'Kassadin',
          img: <CardMedia style={{width:'100%', height: '100%'}} component='img' image={"https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Kassadin_0.jpg"} alt="Testingimage" />,
          path: '/Kassadin'
        },
        {
          text: 'Katarina',
          img: <CardMedia style={{width:'100%', height: '100%'}} component='img' image={"https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Katarina_0.jpg"} alt="Testingimage" />,
          path: '/Katarina'
        },
        {
          text: 'Kayle',
          img: <CardMedia style={{width:'100%', height: '100%'}} component='img' image={"https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Kayle_0.jpg"} alt="Testingimage" />,
          path: '/Kayle'
        },
        {
          text: 'Kayn',
          img: <CardMedia style={{width:'100%', height: '100%'}} component='img' image={"https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Kayn_0.jpg"} alt="Testingimage" />,
          path: '/Kayn'
        },
        {
          text: 'Kennen',
          img: <CardMedia style={{width:'100%', height: '100%'}} component='img' image={"https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Kennen_0.jpg"} alt="Testingimage" />,
          path: '/Kennen'
        },
        {
          text: 'KhaZix',
          img: <CardMedia style={{width:'100%', height: '100%'}} component='img' image={"https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Khazix_0.jpg"} alt="Testingimage" />,
          path: '/KhaZix'
        },
        {
          text: 'Kindred',
          img: <CardMedia style={{width:'100%', height: '100%'}} component='img' image={"https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Kindred_0.jpg"} alt="Testingimage" />,
          path: '/Kindred'
        },
        {
          text: 'Kled',
          img: <CardMedia style={{width:'100%', height: '100%'}} component='img' image={"https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Kled_0.jpg"} alt="Testingimage" />,
          path: '/Kled'
        },
        {
          text: 'KledSkaarl',
          img: <CardMedia style={{width:'100%', height: '100%'}} component='img' image={"https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Kled_0.jpg"} alt="Testingimage" />,
          path: '/KledSkaarl'
        },
        {
          text: 'KogMaw',
          img: <CardMedia style={{width:'100%', height: '100%'}} component='img' image={"https://ddragon.leagueoflegends.com/cdn/img/champion/splash/KogMaw_0.jpg"} alt="Testingimage" />,
          path: '/KogMaw'
        },
        {
          text: 'LeBlanc',
          img: <CardMedia style={{width:'100%', height: '100%'}} component='img' image={"https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Leblanc_0.jpg"} alt="Testingimage" />,
          path: '/LeBlanc'
        },
        {
          text: 'LeeSin',
          img: <CardMedia style={{width:'100%', height: '100%'}} component='img' image={"https://ddragon.leagueoflegends.com/cdn/img/champion/splash/LeeSin_0.jpg"} alt="Testingimage" />,
          path: '/LeeSin'
        },
        {
          text: 'Leona',
          img: <CardMedia style={{width:'100%', height: '100%'}} component='img' image={"https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Leona_0.jpg"} alt="Testingimage" />,
          path: '/Leona'
        },
        {
          text: 'Lillia',
          img: <CardMedia style={{width:'100%', height: '100%'}} component='img' image={"https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Lillia_0.jpg"} alt="Testingimage" />,
          path: '/Lillia'
        },
        {
          text: 'Lissandra',
          img: <CardMedia style={{width:'100%', height: '100%'}} component='img' image={"https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Lissandra_0.jpg"} alt="Testingimage" />,
          path: '/Lissandra'
        },
        {
          text: 'Lucian',
          img: <CardMedia style={{width:'100%', height: '100%'}} component='img' image={"https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Lucian_0.jpg"} alt="Testingimage" />,
          path: '/Lucian'
        },
        {
          text: 'Lulu',
          img: <CardMedia style={{width:'100%', height: '100%'}} component='img' image={"https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Lulu_0.jpg"} alt="Testingimage" />,
          path: '/Lulu'
        },
        {
          text: 'Lux',
          img: <CardMedia style={{width:'100%', height: '100%'}} component='img' image={"https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Lux_0.jpg"} alt="Testingimage" />,
          path: '/Lux'
        },
        {
          text: 'Malphite',
          img: <CardMedia style={{width:'100%', height: '100%'}} component='img' image={"https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Malphite_0.jpg"} alt="Testingimage" />,
          path: '/Malphite'
        },
        {
          text: 'Malzahar',
          img: <CardMedia style={{width:'100%', height: '100%'}} component='img' image={"https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Malzahar_0.jpg"} alt="Testingimage" />,
          path: '/Malzahar'
        },
        {
          text: 'Maokai',
          img: <CardMedia style={{width:'100%', height: '100%'}} component='img' image={"https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Maokai_0.jpg"} alt="Testingimage" />,
          path: '/Maokai'
        },
        {
          text: 'MasterYi',
          img: <CardMedia style={{width:'100%', height: '100%'}} component='img' image={"https://ddragon.leagueoflegends.com/cdn/img/champion/splash/MasterYi_0.jpg"} alt="Testingimage" />,
          path: '/MasterYi'
        },
        {
          text: 'MegaGnar',
          img: <CardMedia style={{width:'100%', height: '100%'}} component='img' image={"https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Gnar_0.jpg"} alt="Testingimage" />,
          path: '/MegaGnar'
        },
        {
          text: 'MissFortune',
          img: <CardMedia style={{width:'100%', height: '100%'}} component='img' image={"https://ddragon.leagueoflegends.com/cdn/img/champion/splash/MissFortune_0.jpg"} alt="Testingimage" />,
          path: '/MissFortune'
        },
        {
          text: 'Mordekaiser',
          img: <CardMedia style={{width:'100%', height: '100%'}} component='img' image={"https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Mordekaiser_0.jpg"} alt="Testingimage" />,
          path: '/Mordekaiser'
        },
        {
          text: 'Morgana',
          img: <CardMedia style={{width:'100%', height: '100%'}} component='img' image={"https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Morgana_0.jpg"} alt="Testingimage" />,
          path: '/Morgana'
        },
        {
          text: 'Nami',
          img: <CardMedia style={{width:'100%', height: '100%'}} component='img' image={"https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Nami_0.jpg"} alt="Testingimage" />,
          path: '/Nami'
        },
        {
          text: 'Nasus',
          img: <CardMedia style={{width:'100%', height: '100%'}} component='img' image={"https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Nasus_0.jpg"} alt="Testingimage" />,
          path: '/Nasus'
        },
        {
          text: 'Nautilus',
          img: <CardMedia style={{width:'100%', height: '100%'}} component='img' image={"https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Nautilus_0.jpg"} alt="Testingimage" />,
          path: '/Nautilus'
        },
        {
          text: 'Neeko',
          img: <CardMedia style={{width:'100%', height: '100%'}} component='img' image={"https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Neeko_0.jpg"} alt="Testingimage" />,
          path: '/Neeko'
        },
        {
          text: 'Nidalee',
          img: <CardMedia style={{width:'100%', height: '100%'}} component='img' image={"https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Nidalee_0.jpg"} alt="Testingimage" />,
          path: '/Nidalee'
        },
        {
          text: 'Nocturne',
          img: <CardMedia style={{width:'100%', height: '100%'}} component='img' image={"https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Nocturne_0.jpg"} alt="Testingimage" />,
          path: '/Nocturne'
        },
        {
          text: 'NunuWillump',
          img: <CardMedia style={{width:'100%', height: '100%'}} component='img' image={"https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Nunu_0.jpg"} alt="Testingimage" />,
          path: '/NunuWillump'
        },
        {
          text: 'Olaf',
          img: <CardMedia style={{width:'100%', height: '100%'}} component='img' image={"https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Olaf_0.jpg"} alt="Testingimage" />,
          path: '/Olaf'
        },
        {
          text: 'Orianna',
          img: <CardMedia style={{width:'100%', height: '100%'}} component='img' image={"https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Orianna_0.jpg"} alt="Testingimage" />,
          path: '/Orianna'
        },
        {
          text: 'Ornn',
          img: <CardMedia style={{width:'100%', height: '100%'}} component='img' image={"https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Ornn_0.jpg"} alt="Testingimage" />,
          path: '/Ornn'
        },
        {
          text: 'Pantheon',
          img: <CardMedia style={{width:'100%', height: '100%'}} component='img' image={"https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Pantheon_0.jpg"} alt="Testingimage" />,
          path: '/Pantheon'
        },
        {
          text: 'Poppy',
          img: <CardMedia style={{width:'100%', height: '100%'}} component='img' image={"https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Poppy_0.jpg"} alt="Testingimage" />,
          path: '/Poppy'
        },
        {
          text: 'Pyke',
          img: <CardMedia style={{width:'100%', height: '100%'}} component='img' image={"https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Pyke_0.jpg"} alt="Testingimage" />,
          path: '/Pyke'
        },
        {
          text: 'Qiyana',
          img: <CardMedia style={{width:'100%', height: '100%'}} component='img' image={"https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Qiyana_0.jpg"} alt="Testingimage" />,
          path: '/Qiyana'
        },
        {
          text: 'Quinn',
          img: <CardMedia style={{width:'100%', height: '100%'}} component='img' image={"https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Quinn_0.jpg"} alt="Testingimage" />,
          path: '/Quinn'
        },
        {
          text: 'Rakan',
          img: <CardMedia style={{width:'100%', height: '100%'}} component='img' image={"https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Rakan_0.jpg"} alt="Testingimage" />,
          path: '/Rakan'
        },
        {
          text: 'Rammus',
          img: <CardMedia style={{width:'100%', height: '100%'}} component='img' image={"https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Rammus_0.jpg"} alt="Testingimage" />,
          path: '/Rammus'
        },
        {
          text: 'RekSai',
          img: <CardMedia style={{width:'100%', height: '100%'}} component='img' image={"https://ddragon.leagueoflegends.com/cdn/img/champion/splash/RekSai_0.jpg"} alt="Testingimage" />,
          path: '/RekSai'
        },
        {
          text: 'Renekton',
          img: <CardMedia style={{width:'100%', height: '100%'}} component='img' image={"https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Renekton_0.jpg"} alt="Testingimage" />,
          path: '/Renekton'
        },
        {
          text: 'Rengar',
          img: <CardMedia style={{width:'100%', height: '100%'}} component='img' image={"https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Rengar_0.jpg"} alt="Testingimage" />,
          path: '/Rengar'
        },
        {
          text: 'Riven',
          img: <CardMedia style={{width:'100%', height: '100%'}} component='img' image={"https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Riven_0.jpg"} alt="Testingimage" />,
          path: '/Riven'
        },
        {
          text: 'Rumble',
          img: <CardMedia style={{width:'100%', height: '100%'}} component='img' image={"https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Rumble_0.jpg"} alt="Testingimage" />,
          path: '/Rumble'
        },
        {
          text: 'Ryze',
          img: <CardMedia style={{width:'100%', height: '100%'}} component='img' image={"https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Ryze_0.jpg"} alt="Testingimage" />,
          path: '/Ryze'
        },
        {
          text: 'Samira',
          img: <CardMedia style={{width:'100%', height: '100%'}} component='img' image={"https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Samira_0.jpg"} alt="Testingimage" />,
          path: '/Samira'
        },
        {
          text: 'Sejuani',
          img: <CardMedia style={{width:'100%', height: '100%'}} component='img' image={"https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Sejuani_0.jpg"} alt="Testingimage" />,
          path: '/Sejuani'
        },
        {
          text: 'Senna',
          img: <CardMedia style={{width:'100%', height: '100%'}} component='img' image={"https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Senna_0.jpg"} alt="Testingimage" />,
          path: '/Senna'
        },
        {
          text: 'Seraphine',
          img: <CardMedia style={{width:'100%', height: '100%'}} component='img' image={"https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Seraphine_0.jpg"} alt="Testingimage" />,
          path: '/Seraphine'
        },
        {
          text: 'Sett',
          img: <CardMedia style={{width:'100%', height: '100%'}} component='img' image={"https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Sett_0.jpg"} alt="Testingimage" />,
          path: '/Sett'
        },
        {
          text: 'Shaco',
          img: <CardMedia style={{width:'100%', height: '100%'}} component='img' image={"https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Shaco_0.jpg"} alt="Testingimage" />,
          path: '/Shaco'
        },
        {
          text: 'Shen',
          img: <CardMedia style={{width:'100%', height: '100%'}} component='img' image={"https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Shen_0.jpg"} alt="Testingimage" />,
          path: '/Shen'
        },
        {
          text: 'Shyvana',
          img: <CardMedia style={{width:'100%', height: '100%'}} component='img' image={"https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Shyvana_0.jpg"} alt="Testingimage" />,
          path: '/Shyvana'
        },
        {
          text: 'Singed',
          img: <CardMedia style={{width:'100%', height: '100%'}} component='img' image={"https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Singed_0.jpg"} alt="Testingimage" />,
          path: '/Singed'
        },
        {
          text: 'Sion',
          img: <CardMedia style={{width:'100%', height: '100%'}} component='img' image={"https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Sion_0.jpg"} alt="Testingimage" />,
          path: '/Sion'
        },
        {
          text: 'Sivir',
          img: <CardMedia style={{width:'100%', height: '100%'}} component='img' image={"https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Sivir_0.jpg"} alt="Testingimage" />,
          path: '/Sivir'
        },
        {
          text: 'Skarner',
          img: <CardMedia style={{width:'100%', height: '100%'}} component='img' image={"https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Skarner_0.jpg"} alt="Testingimage" />,
          path: '/Skarner'
        },
        {
          text: 'Sona',
          img: <CardMedia style={{width:'100%', height: '100%'}} component='img' image={"https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Sona_0.jpg"} alt="Testingimage" />,
          path: '/Sona'
        },
        {
          text: 'Soraka',
          img: <CardMedia style={{width:'100%', height: '100%'}} component='img' image={"https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Soraka_0.jpg"} alt="Testingimage" />,
          path: '/Soraka'
        },
        {
          text: 'Swain',
          img: <CardMedia style={{width:'100%', height: '100%'}} component='img' image={"https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Swain_0.jpg"} alt="Testingimage" />,
          path: '/Swain'
        },
        {
          text: 'Sylas',
          img: <CardMedia style={{width:'100%', height: '100%'}} component='img' image={"https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Sylas_0.jpg"} alt="Testingimage" />,
          path: '/Sylas'
        },
        {
          text: 'Syndra',
          img: <CardMedia style={{width:'100%', height: '100%'}} component='img' image={"https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Syndra_0.jpg"} alt="Testingimage" />,
          path: '/Syndra'
        },
        {
          text: 'TahmKench',
          img: <CardMedia style={{width:'100%', height: '100%'}} component='img' image={"https://ddragon.leagueoflegends.com/cdn/img/champion/splash/TahmKench_0.jpg"} alt="Testingimage" />,
          path: '/TahmKench'
        },
        {
          text: 'Taliyah',
          img: <CardMedia style={{width:'100%', height: '100%'}} component='img' image={"https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Taliyah_0.jpg"} alt="Testingimage" />,
          path: '/Taliyah'
        },
        {
          text: 'Talon',
          img: <CardMedia style={{width:'100%', height: '100%'}} component='img' image={"https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Talon_0.jpg"} alt="Testingimage" />,
          path: '/Talon'
        },
        {
          text: 'Taric',
          img: <CardMedia style={{width:'100%', height: '100%'}} component='img' image={"https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Taric_0.jpg"} alt="Testingimage" />,
          path: '/Taric'
        },
        {
          text: 'Teemo',
          img: <CardMedia style={{width:'100%', height: '100%'}} component='img' image={"https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Teemo_0.jpg"} alt="Testingimage" />,
          path: '/Teemo'
        },
        {
          text: 'Thresh',
          img: <CardMedia style={{width:'100%', height: '100%'}} component='img' image={"https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Thresh_0.jpg"} alt="Testingimage" />,
          path: '/Thresh'
        },
        {
          text: 'Tristana',
          img: <CardMedia style={{width:'100%', height: '100%'}} component='img' image={"https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Tristana_0.jpg"} alt="Testingimage" />,
          path: '/Tristana'
        },
        {
          text: 'Trundle',
          img: <CardMedia style={{width:'100%', height: '100%'}} component='img' image={"https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Trundle_0.jpg"} alt="Testingimage" />,
          path: '/Trundle'
        },
        {
          text: 'Tryndamere',
          img: <CardMedia style={{width:'100%', height: '100%'}} component='img' image={"https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Tryndamere_0.jpg"} alt="Testingimage" />,
          path: '/Tryndamere'
        },
        {
          text: 'TwistedFate',
          img: <CardMedia style={{width:'100%', height: '100%'}} component='img' image={"https://ddragon.leagueoflegends.com/cdn/img/champion/splash/TwistedFate_0.jpg"} alt="Testingimage" />,
          path: '/TwistedFate'
        },
        {
          text: 'Twitch',
          img: <CardMedia style={{width:'100%', height: '100%'}} component='img' image={"https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Twitch_0.jpg"} alt="Testingimage" />,
          path: '/Twitch'
        },
        {
          text: 'Udyr',
          img: <CardMedia style={{width:'100%', height: '100%'}} component='img' image={"https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Udyr_0.jpg"} alt="Testingimage" />,
          path: '/Udyr'
        },
        {
          text: 'Urgot',
          img: <CardMedia style={{width:'100%', height: '100%'}} component='img' image={"https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Urgot_0.jpg"} alt="Testingimage" />,
          path: '/Urgot'
        },
        {
          text: 'Varus',
          img: <CardMedia style={{width:'100%', height: '100%'}} component='img' image={"https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Varus_0.jpg"} alt="Testingimage" />,
          path: '/Varus'
        },
        {
          text: 'Vayne',
          img: <CardMedia style={{width:'100%', height: '100%'}} component='img' image={"https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Vayne_0.jpg"} alt="Testingimage" />,
          path: '/Vayne'
        },
        {
          text: 'Veigar',
          img: <CardMedia style={{width:'100%', height: '100%'}} component='img' image={"https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Veigar_0.jpg"} alt="Testingimage" />,
          path: '/Veigar'
        },
        {
          text: 'VelKoz',
          img: <CardMedia style={{width:'100%', height: '100%'}} component='img' image={"https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Velkoz_0.jpg"} alt="Testingimage" />,
          path: '/VelKoz'
        },
        {
          text: 'Vi',
          img: <CardMedia style={{width:'100%', height: '100%'}} component='img' image={"https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Vi_0.jpg"} alt="Testingimage" />,
          path: '/Vi'
        },
        {
          text: 'Viktor',
          img: <CardMedia style={{width:'100%', height: '100%'}} component='img' image={"https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Viktor_0.jpg"} alt="Testingimage" />,
          path: '/Viktor'
        },
        {
          text: 'Vladimir',
          img: <CardMedia style={{width:'100%', height: '100%'}} component='img' image={"https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Vladimir_0.jpg"} alt="Testingimage" />,
          path: '/Vladimir'
        },
        {
          text: 'Volibear',
          img: <CardMedia style={{width:'100%', height: '100%'}} component='img' image={"https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Volibear_0.jpg"} alt="Testingimage" />,
          path: '/Volibear'
        },
        {
          text: 'Warwick',
          img: <CardMedia style={{width:'100%', height: '100%'}} component='img' image={"https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Warwick_0.jpg"} alt="Testingimage" />,
          path: '/Warwick'
        },
        {
          text: 'Wukong',
          img: <CardMedia style={{width:'100%', height: '100%'}} component='img' image={"https://ddragon.leagueoflegends.com/cdn/img/champion/splash/MonkeyKing_0.jpg"} alt="Testingimage" />,
          path: '/Wukong'
        },
        {
          text: 'Xayah',
          img: <CardMedia style={{width:'100%', height: '100%'}} component='img' image={"https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Xayah_0.jpg"} alt="Testingimage" />,
          path: '/Xayah'
        },
        {
          text: 'Xerath',
          img: <CardMedia style={{width:'100%', height: '100%'}} component='img' image={"https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Xerath_0.jpg"} alt="Testingimage" />,
          path: '/Xerath'
        },
        {
          text: 'XinZhao',
          img: <CardMedia style={{width:'100%', height: '100%'}} component='img' image={"https://ddragon.leagueoflegends.com/cdn/img/champion/splash/XinZhao_0.jpg"} alt="Testingimage" />,
          path: '/XinZhao'
        },
        {
          text: 'Yasuo',
          img: <CardMedia style={{width:'100%', height: '100%'}} component='img' image={"https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Yasuo_0.jpg"} alt="Testingimage" />,
          path: '/Yasuo'
        },
        {
          text: 'Yone',
          img: <CardMedia style={{width:'100%', height: '100%'}} component='img' image={"https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Yone_0.jpg"} alt="Testingimage" />,
          path: '/Yone'
        },
        {
          text: 'Yorick',
          img: <CardMedia style={{width:'100%', height: '100%'}} component='img' image={"https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Yorick_0.jpg"} alt="Testingimage" />,
          path: '/Yorick'
        },
        {
          text: 'Yuumi',
          img: <CardMedia style={{width:'100%', height: '100%'}} component='img' image={"https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Yuumi_0.jpg"} alt="Testingimage" />,
          path: '/Yuumi'
        },
        {
          text: 'Zac',
          img: <CardMedia style={{width:'100%', height: '100%'}} component='img' image={"https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Zac_0.jpg"} alt="Testingimage" />,
          path: '/Zac'
        },
        {
          text: 'Zed',
          img: <CardMedia style={{width:'100%', height: '100%'}} component='img' image={"https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Zed_0.jpg"} alt="Testingimage" />,
          path: '/Zed'
        },
        {
          text: 'Ziggs',
          img: <CardMedia style={{width:'100%', height: '100%'}} component='img' image={"https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Ziggs_0.jpg"} alt="Testingimage" />,
          path: '/Ziggs'
        },
        {
          text: 'Zilean',
          img: <CardMedia style={{width:'100%', height: '100%'}} component='img' image={"https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Zilean_0.jpg"} alt="Testingimage" />,
          path: '/Zilean'
        },
        {
          text: 'Zoe',
          img: <CardMedia style={{width:'100%', height: '100%'}} component='img' image={"https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Zoe_0.jpg"} alt="Testingimage" />,
          path: '/Zoe'
        },
        {
          text: 'Zyra',
          img: <CardMedia style={{width:'100%', height: '100%'}} component='img' image={"https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Zyra_0.jpg"} alt="Testingimage" />,
          path: '/Zyra'
        }
    ]);
    const [filterValue, setFilterValue] = useState('');

    return <UserContext.Provider value = {{
        routes, setRoutes,
        filterValue, setFilterValue
    }}>
        {children}
    </UserContext.Provider>
}