import React from 'react';
import mapMarkerIMG from '../images/map_marker.svg';
import {Link} from 'react-router-dom';
import { FiPlus } from 'react-icons/fi';
import '../pages/orphanages-map.css';
import {Map, TileLayer} from 'react-leaflet';
import 'leaflet/dist/leaflet.css';



function OrphanagesMap(){
    return(
        <div id="page-map">
            <aside>
                <header>
                <img src = {mapMarkerIMG} alt = "Happy"/>

                <h2>Escolha um orfanato no mapa</h2>

                <p> Muitas crianças estão esperando a sua visita :)</p>
                </header>

                <footer>
                    <strong>Barueri</strong>
                    <span>São Paulo</span>
                </footer>
            </aside>

            <Map
                center={[-23.546015,-46.8713472]}
                zoom={15}
                style={{width: '100%', height: '100%'}}
            >

                {/*<TileLayer url="https://a.tile.openstreetmap.org/{z}/{x}/{y}.png"/>*/}

                
                <TileLayer 
                //No lugar de 'light' pode ser 'dark'...encontrar os temas em 'mapbox light v10 dark v10'
                    url={`https://api.mapbox.com/styles/v1/mapbox/light-v10/tiles/256/{z}/{x}/{y}@2x?access_token=${process.env.REACT_APP_MAPBOX_TOKEN}`}
                />
                
            </Map>

            <Link to ="" className="create-orphanage">
                <FiPlus size={32} color="#FFF"/>
            </Link>

        </div>
    );    
}

export default OrphanagesMap;