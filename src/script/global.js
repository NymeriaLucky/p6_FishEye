// Import all the pages à revoir
//* Importer toutes les dépendances et composants JavaScript(modules)
// importer les dependences
import "./src/style/index.css"
import {data} from './FishEyeDataFR.json'// voir pour suprimer dossier data avec même fichier
Data();
// Import all the pages
import {FisheyeHomePage} from './src/script/index.js' // Attention bien respecté l'url avec ./ en début
FisheyeHomePage();//index
import {TagsPage} from './script/tags.js'
TagsPage();
import {Photographer} from './src/photographer.js'//user page
Photographer();
import {PhotographerPage} from './script/photographer-page.js'
PhotographerPage();
// Import all the pages/composants/s/user composants
import {FormModal} from './script/form-modal.js'
FormModal();
import {lightboxModal} from './script/diaporama.js'
lightboxModal();

// Import all the pages/composants
import {FisheyeLogo} from './image/logo/logo.png'
FisheyeLogo();
import {TagsNav} from './script/tagNav.js'
('Tags-nav', TagsNav());//dans index.html
import {PhotographerTags} from '.script/photographer-tags.js'//voir ou se trouve l'élément,=>detail.js
('photographer-tags', PhotographerTags());
import {PhotographerCard} from './script/photographer-card.js'//reste a voir =>detail.js
('photographer-card', PhotographerCard());

import {Media} from './script/media.js'//media-card
Media();
import {MediaLightbox} from './script/media-lightbox.js'//diaporama
MediaLightbox();
import {MediasSelect} from './script/medias-select.js'
('medias-select', MediasSelect());//selection de medias
import {PhotographerInfos} from './script/photographer-infos.js'//liste users
('photographer-infos', PhotographerInfos());
import {PhotographerMedias} from './script/photographer-medias.js'
('photographer-medias', PhotographerMedias());
import {PhotographerProfile} from './script/photographer-page.js'// nom a adapterou suprimer
('photographer-profile', PhotographerProfile());


import {Detail} from './script/detail.js'//à répartir suivant les classes
Detail();
import {Fetch1} from './script/fetch1.js'// ces 2 fichiers certainement à renomer suivant ce qui manque
Fetch1();
// Import all the pages/components/index composants
import {FeaturedPhotographers} from './index/featured-photographers.js'
('featured-photographers', FeaturedPhotographers());
import {ReturnTop} from '.script/index/return-top.js'//(detail.js ou fetch1)
('return-top', ReturnTop());//a revoir
// Import all the pages/components/tag composants
import {TaggedPhotographers} from './script/tagged-photographers.js'//defini le photographe suivant le tag
('tagged-photographers', TaggedPhotographers());
/* reste à faire
 * -error page404 ?
 exemple :import { name, draw, reportArea, reportPerimeter } from './modules/square.mjs';
 */




