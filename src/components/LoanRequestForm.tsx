import { Button, Grid } from "@mui/material";
import "../styles/form.scss";
import { useCallback, useState } from "react";
import personPlaceholder from "../assets/img/person.jpg";
import SignatureDialog from "./SignatureDialog";
import PhotoCaptureButton from "./TakePicture";
export interface ILoanRequestlangmProps {}

export const currency = [
  { id: 1, name: "Dollar", avr: "USD", sign: "$" },
  { id: 2, name: "Pound", avr: "GBP", sign: "£" },
  { id: 3, name: "Euro", avr: "EUR", sign: "€" },
];
export const countries = [
  "Afghanistan",
  "Albania",
  "Algeria",
  "American Samoa",
  "Andorra",
  "Angola",
  "Anguilla",
  "Antarctica",
  "Antigua and Barbuda",
  "Argentina",
  "Armenia",
  "Australia",
  "Aruba",
  "Austria",
  "Azerbaijan",
  "Bahamas",
  "Bahrain",
  "Bangladesh",
  "Barbados",
  "Belarus",
  "Belgium",
  "Belize",
  "Benin",
  "Bermuda",
  "Bhutan",
  "Bolivia",
  "Bosnia and Herzegovina",
  "Botswana",
  "Bouvet Island",
  "Brazil",
  "British Indian Ocean Territory",
  "Brunei",
  "Bulgaria",
  "Burkina Faso",
  "Burundi",
  "Cambodia",
  "Cameroon",
  "Canada",
  "Cabo Verde",
  "Cayman Islands",
  "Central African Republic",
  "Chad",
  "Chile",
  "China, People",
  "Christmas Island",
  "Cocos Islands",
  "Colombia",
  "Comoros",
  "Congo, Democratic Republic of the",
  "Congo, Republic of the",
  "Cook Islands",
  "Costa Rica",
  "Côte d",
  "Croatia",
  "Cuba",
  "Curaçao",
  "Cyprus",
  "Czech Republic",
  "Denmark",
  "Djibouti",
  "Dominica",
  "Dominican Republic",
  "East Timor",
  "Ecuador",
  "Egypt",
  "El Salvador",
  "Equatorial Guinea",
  "Eritrea",
  "Estonia",
  "Ethiopia",
  "Falkland Islands",
  "Faroe Islands",
  "Fiji",
  "Finland",
  "France",
  "France, Metropolitan",
  "French Guiana",
  "French Polynesia",
  "French South Territories",
  "Gabon",
  "Gambia",
  "Georgia",
  "Germany",
  "Guernsey",
  "Ghana",
  "Gibraltar",
  "Greece",
  "Greenland",
  "Grenada",
  "Guadeloupe",
  "Guam",
  "Guatemala",
  "Guinea",
  "Guinea-Bissau",
  "Guyana",
  "Haiti",
  "Heard Island And Mcdonald Island",
  "Honduras",
  "Hong Kong",
  "Hungary",
  "Iceland",
  "India",
  "Indonesia",
  "Iran",
  "Iraq",
  "Ireland",
  "Israel",
  "Italy",
  "Jamaica",
  "Japan",
  "Jersey",
  "Johnston Island",
  "Jordan",
  "Kazakhstan",
  "Kenya",
  "Kiribati",
  "Korea, Democratic People",
  "Korea, Republic of",
  "Kosovo",
  "Kuwait",
  "Kyrgyzstan",
  "Lao People",
  "Latvia",
  "Lebanon",
  "Lesotho",
  "Liberia",
  "Libya",
  "Liechtenstein",
  "Lithuania",
  "Lu,embourg",
  "Macau",
  "North Macedonia",
  "Madagascar",
  "Malawi",
  "Malaysia",
  "Maldives",
  "Mali",
  "Malta",
  "Marshall Islands",
  "Martinique",
  "Mauritania",
  "Mauritius",
  "Mayotte",
  "Me,ico",
  "Micronesia",
  "Moldova",
  "Monaco",
  "Mongolia",
  "Montserrat",
  "Montenegro",
  "Morocco",
  "Mozambique",
  "Myanmar",
  "Namibia",
  "Nauru",
  "Nepal",
  "Netherlands",
  "Netherlands Antilles",
  "New Caledonia",
  "New Zealand",
  "Nicaragua",
  "Niger",
  "Nigeria",
  "Niue",
  "Norfolk Island",
  "Northern Mariana Islands",
  "Norway",
  "Oman",
  "Pakistan",
  "Palau",
  "Palestine, State of",
  "Panama",
  "Papua New Guinea",
  "Paraguay",
  "Peru",
  "Philippines",
  "Pitcairn Islands",
  "Poland",
  "Portugal",
  "Puerto Rico",
  "Qatar",
  "Reunion Island",
  "Romania",
  "Russia",
  "Rwanda",
  "Saint Kitts and Nevis",
  "Saint Lucia",
  "Saint Vincent and the Grenadines",
  "Samoa",
  "Saint Helena",
  "Saint Pierre &amp; Miquelon",
  "San Marino",
  "Sao Tome and Principe",
  "Saudi Arabia",
  "Senegal",
  "Serbia",
  "Seychelles",
  "Sierra Leone",
  "Singapore",
  "Sint Maarten",
  "Slovakia",
  "Slovenia",
  "Solomon Islands",
  "Somalia",
  "South Africa",
  "South Georgia and South Sandwich",
  "Spain",
  "Sri Lanka",
  "Stateless Persons",
  "Sudan",
  "Sudan, South",
  "Suriname",
  "Svalbard and Jan Mayen",
  "Swaziland",
  "Sweden",
  "Switzerland",
  "Syria",
  "Taiwan, Republic of China",
  "Tajikistan",
  "Tanzania",
  "Thailand",
  "Togo",
  "Tokelau",
  "Tonga",
  "Trinidad and Tobago",
  "Tunisia",
  "Turkey",
  "Turkmenistan",
  "Turks And Caicos Islands",
  "Tuvalu",
  "Uganda",
  "Ukraine",
  "United Arab Emirates",
  "United Kingdom",
  "US Minor Outlying Islands",
  "United States of America (USA)",
  "Uruguay",
  "Uzbekistan",
  "Vanuatu",
  "Vatican City",
  "Venezuela",
  "Vietnam",
  "Virgin Islands, British",
  "Virgin Islands, U.S,",
  "Wallis And Futuna Islands",
  "Western Sahara",
  "Yemen Arab Rep,",
  "Yemen Democratic",
  "Zambia",
  "Zimbabwe",
];
export const branches = [
  "22 Mazoria Branch",
  "Aba Jifar Branch",
  "Aba Mela Branch",
  "Aba Nefso Branch",
  "Abba Jama Branch",
  "Abba Sena Branch",
  "Abdi Qophe Branch",
  "Abdisa Aga Branch",
  "Abebech Gobana Branch",
  "Abebie Tufa Branch",
  "Abichu Nya' a Branch",
  "Abomsa Branch",
  "Abubeker Al-Siddiq Br",
  "Abuna Branch",
  "Ada Barga Branch",
  "Adaba Branch",
  "Adama Branch",
  "Adami Branch",
  "Addele Branch",
  "Addisu Gebeya Branch",
  "Adea Branch",
  "Adigrat Branch",
  "Adola Branch",
  "Afren Kelo Branch",
  "Agamsa Migir Branch",
  "Agarfa Branch",
  "Agaro Branch",
  "Agemsa Branch",
  "Ahmed Imam Branch",
  "Airport Forex Bureau",
  "Ajje Branch",
  "Akaki Branch",
  "Aksum Branch",
  "Alamura Branch",
  "Al-Bukhari Branch",
  "Aleltu Branch",
  "Alge Sachi Branch",
  "Ali Branch",
  "AL-Nasir Branch",
  "Al-Rahma Branch",
  "Amal Branch",
  "Amana Branch",
  "Ambo Branch",
  "Amuru Branch",
  "Ancher Branch",
  "Anfillo Branch",
  "Anger Gute Branch",
  "Anole Micro Branch",
  "Ansar Branch",
  "Arba Minch Branch",
  "Arboye Branch",
  "Arefa Branch",
  "Areka Branch",
  "Arsi Negelle Branch",
  "Artu Branch",
  "Asabot Branch",
  "Asandabo Branch",
  "Asela Branch",
  "Asgori Branch",
  "Asko Branch",
  "Asosa Branch",
  "Aw-Abadir Branch",
  "Awaro Branch",
  "Awash Melkasa Branch",
  "Awash Sebat Kilo",
  "Awasho Branch",
  "Awetu Branch",
  "Axale Jatani Branch",
  "Ayer Tena Branch",
  "Ayetu Branch",
  "Ayira Branch",
  "Babile Branch",
  "Babo Gambel Branch",
  "Badano Branch",
  "Bahir Dar Branch",
  "Bakalca Branch",
  "Bakannisa Branch",
  "Bake Branch",
  "Bake Jama Branch",
  "Bako Tibe Branch",
  "Bale Gesgar Branch",
  "Bantu Branch",
  "Barecha Branch",
  "Baro Korma Branch",
  "Baro Tumsa Branch",
  "Baroda Branch",
  "Batu Branch",
  "Bedelle Branch",
  "Bedessa Branch",
  "Bedhatu Branch",
  "Begi Branch",
  "Bekerware Branch",
  "Bensa Daye Branch",
  "Bereka Branch",
  "Beriso Dukale Micro",
  "Beshale Branch",
  "Bethel Branch",
  "Biftu Branch",
  "Bila Branch",
  "Bilal Branch",
  "Bilile Branch",
  "Birbirsa Branch",
  "Birmaji Branch",
  "Bishan Guracha Branch",
  "Bishoftu Branch",
  "Boditi Branch",
  "Boke Branch",
  "Boke Xiqo Branch",
  "Bokku Branch",
  "Bokoji Branch",
  "Boku Migra Bake Branch",
  "Boku Shenen Branch",
  "Bole Airport Branch",
  "Bole Arabsa Branch",
  "Bole Atlas Branch",
  "Bole Bulbula Branch",
  "Bole Cargo Branch",
  "Bole Lami Branch",
  "Bole Medanealem Branch",
  "Bole Michael Branch",
  "Bole Ruwanda Branch",
  "Bole-Nura Hera Branch",
  "Bombtera Branch",
  "Bonaya Boshe Branch",
  "Bonga Branch",
  "Bonosha Branch",
  "Bore Branch",
  "Bori Branch",
  "Boru Jawi Branch",
  "Bosat Branch",
  "Bote Branch",
  "Bui Branch",
  "Bulbula Branch",
  "Bule Hora Branch",
  "Bulullo Branch",
  "Burayu Branch",
  "Bure Branch",
  "Bure Ilu Branch",
  "Burka Micro Branch",
  "Burka Tirtira Branch",
  "Burka Walabu Branch",
  "Burka Wayu Branch",
  "Burqa Dhintu Branch",
  "Burqa Jato Branch",
  "Butajira Branch",
  "Butta Branch",
  "Catherine Hamlin",
  "Chafe Anane Branch",
  "Chafe Arara Branch",
  "Chafe Branch",
  "Chalanqo Branch",
  "Chalchali Branch",
  "Chancho Branch",
  "Chanqa Birbir Branch",
  "Chawaqa Branch",
  "Chilalo Branch",
  "Chinaksen Branch",
  "Chiro Branch",
  "Chole Branch",
  "Chora Branch",
  "Churchill Branch",
  "CMC Branch",
  "Conolel Bezabih Petros",
  "Dabe Soloke Branch",
  "Dagaga Branch",
  "Dale Dembel Branch",
  "Dambi Branch",
  "Dambi Dollo Branch",
  "Damboya Branch",
  "Damo Dadi Branch",
  "Darimu Branch",
  "Darraba Bido Branch",
  "Dawo Branch",
  "Dawuro Branch",
  "Debasso Branch",
  "Debre Birhan Branch",
  "Debre Markos Branch",
  "Deder Branch",
  "Dedo Branch",
  "DERARO BRANCH",
  "Derartu Tullu Branch",
  "Derra Branch",
  "Dessie Branch",
  "Dhadacha Arara Branch",
  "Dhaga Bora Branch",
  "Dhaka Adi Branch",
  "Dhumuga Branch",
  "Didimtu Branch",
  "Digalu Branch",
  "Digital Banking",
  "Diksis Branch",
  "Dilla Branch",
  "Dire Dawa Branch",
  "Dire Hinchini Branch",
  "Dire Jitu Branch",
  "Dire Sololiya",
  "Diredawa Rashotel",
  "Djibruk Branch",
  "Doba Branch",
  "Dodola Branch",
  "Dodota Branch",
  "Dollo Ado Branch",
  "Dolo Bidena Branch",
  "Dolo Mana Branch",
  "Dolosebro Branch",
  "Doyo Gena Branch",
  "Dukem industry zone",
  "Dulo Branch",
  "Durame Branch",
  "Ego Branch",
  "Ejere Branch",
  "Eka Abado Branch",
  "Ela Bala Branch",
  "Elemo Qiltu Branch",
  "Enseno Branch",
  "Erer Branch",
  "Eteya Branch",
  "Fedis Branch",
  "Fejir Branch",
  "Ferensay Legasiyon Br",
  "Fethi Mesjid Branch",
  "Fiche Branch",
  "Figa Branch",
  "Fincha' a Branch",
  "Finfine Branch",
  "Fitala Branch",
  "Fitawurari Geja",
  "Folle Branch",
  "Fugnan Bira Branch",
  "Fura Branch",
  "Furi Branch",
  "Furkan Branch",
  "Gachi Branch",
  "Gafarsa Nono",
  "Gambella Branch",
  "Ganda Hara Branch",
  "Ganda Wuha Branch",
  "Ganji Branch",
  "Gara Baru Branch",
  "Gara Bolo Branch",
  "Gara Bushu Branch",
  "Gara Duba Branch",
  "Gara Muleta Branch",
  "Garba Guracha Branch",
  "Garu Hira Branch",
  "Gasara Branch",
  "Gawassa Branch",
  "Gedeb Branch",
  "Gedo Branch",
  "Gefersa Branch",
  "Gelan Branch",
  "Gelemso Branch",
  "Gemechis Branch",
  "GeneralWakoGutu Branch",
  "Gera Branch",
  "Gerji Branch",
  "Gesupa Branch",
  "Gida Ayana Branch",
  "Gidami Branch",
  "Gimbi Branch",
  "Ginchi Branch",
  "Ginnir Branch",
  "Goba Branch",
  "Gode Branch",
  "Gofa Gabriel Branch",
  "Gofa Mazoria Branch",
  "Gojam Berenda Branch",
  "Gololcha Branch",
  "Gonder Branch",
  "Gore Branch",
  "Goro Branch",
  "Goro Muti Branch",
  "Goro Qerensa Branch",
  "Gotera Branch",
  "Greek Camp Branch",
  "Guder Branch",
  "Gudetu Arjo Branch",
  "Guduru Branch",
  "Guge Branch",
  "Guje Branch",
  "Gulele Branch",
  "Guliso Branch",
  "Gumbichu Branch",
  "Gurd Shola Branch",
  "Gurmu Branch",
  "Hababo Guduru Branch",
  "Habe Branch",
  "Hadero Branch",
  "Hafatessa Branch",
  "Haile Fida Branch",
  "Haile Gebre Branch",
  "Halaba Kulito Branch",
  "Halal Branch",
  "Halchisa Branch",
  "Hamza Mesgid Branch",
  "Handhura Tulama Branch",
  "Hara Dembel Branch",
  "Hara Kello Branch",
  "Haramain Branch",
  "Haramaya Branch",
  "Harana Buluq Branch",
  "Harato Branch",
  "Harbu Branch",
  "Haro Adi Micro Branch",
  "Haro Charchar Branch",
  "Haro Dumal Branch",
  "Haro Wanchi Branch",
  "Harru Maru Branch",
  "Harufa Branch",
  "Hasasa Branch",
  "Hawa Gelan Branch",
  "Hawas Branch",
  "Hawasa Industrial Park",
  "Hawassa Branch",
  "Haya Dima Branch",
  "Hayyu Branch",
  "Head Office",
  "Heban Arsi Branch",
  "Hidhabu Abote Branch",
  "Hikma Branch",
  "Hilal Branch",
  "Hirmata Branch",
  "Hirna Branch",
  "Holeta Branch",
  "Homecho Branch",
  "Hora Arsedi Branch",
  "Horsisa Branch",
  "Hosana Branch",
  "Humera Branch",
  "Hundene Branch",
  "Hurufa Farado Branch",
  "Hurufa Rare Branch",
  "Hurumu Branch",
  "Huruta Branch",
  "Ilanso Hallo Branch",
  "Ilu Gelan Branch",
  "Imam Ahmed Mesjid Bran",
  "Iman Branch",
  "Iqra Branch",
  "Irbu Branch",
  "Itti Mako Branch",
  "Jagema Bedhane Branch",
  "Jahan Ameya Branch",
  "Jahan Jarso Branch",
  "JAJA BRANCH",
  "Jajura Branch",
  "Jaldu Branch",
  "Jamo Branch",
  "Jara Abageda Branch",
  "Jarra Branch",
  "Jate Branch",
  "Jibat Branch",
  "Jigjiga Branch",
  "Jimma Arjo Branch",
  "Jimma Rare Branch",
  "Jiren Branch",
  "Kali Branch",
  "Kamona Branch",
  "Karamile Branch",
  "Karayu Branch",
  "Karra Allo Branch",
  "Karra Qallu Branch",
  "Karra Qore Branch",
  "Karra Xuxxo Branch",
  "Katta Branch",
  "Kebena Branch",
  "Kefira Branch",
  "Kela Branch",
  "Kello Mesqela Branch",
  "Kemise Branch",
  "Kersa Arsi Branch",
  "Kersa Main Branch",
  "Kilole Branch",
  "Kiltu Dema Branch",
  "Kiltu Karra Branch",
  "Kiltu Lume Branch",
  "Kiramu Branch",
  "Kobo Branch",
  "Kofele Branch",
  "Koka Micro Branch",
  "Kokosa Branch",
  "Kolfe Branch",
  "Kolobo Branch",
  "Kombe Branch",
  "Kombolcha Branch",
  "Konso Branch",
  "Kotobe Branch",
  "Kula Branch",
  "Kura Jida Branch",
  "Kurfachale Branch",
  "Kusaye Branch",
  "Kutaye Branch",
  "Kuyera Branch",
  "Kuyyu Branch",
  "Labu Branch",
  "Lafto Branch",
  "Laga Bari Branch",
  "Laga Oda Branch",
  "Laku Branch",
  "Lamberet Branch",
  "Lami Industrial park",
  "Lauret Tsegaye",
  "Lega Billawo Branch",
  "Lega Saqo Branch",
  "Lega Tafo Branch",
  "Leka Branch",
  "Leka Dulacha Branch",
  "Leman Branch",
  "Lemo Branch",
  "Liban Chukala Branch",
  "Liban Jawi Branch",
  "Limu Genet Branch",
  "Limu Seqqa Branch",
  "Lisana Branch",
  "Logia-Sultan-Ali Mirah",
  "Lume Branch",
  "Mada Walabu Branch",
  "Madaro Branch",
  "Madha Galma Branch",
  "Makkat Al-Mukkarama",
  "Mako Bili Branch",
  "Mammo Mazamir Branch",
  "Mandi Branch",
  "Marwa Branch",
  "Mayu Muluke",
  "Mechara Branch",
  "Medinat Al-Munawer Br",
  "Megalla Branch",
  "Mekele Branch",
  "Meki Branch",
  "Melba Branch",
  "Melka Ballo Branch",
  "Melka Debana Branch",
  "Melka Gefersa Branch",
  "Melka Jebdu Branch",
  "Meraro Branch",
  "Merde Branch",
  "Merkato Branch",
  "Mesalemia Branch",
  "Meskel Flower Branch",
  "Meta Walkite Branch",
  "Metema Branch",
  "Mettu Branch",
  "Michata Branch",
  "Midakegni Branch",
  "Midhaga Branch",
  "Miesso Branch",
  "Migira Branch",
  "Milqaye Branch",
  "Mina Branch",
  "Mizan Aman Branch",
  "Mogor Branch",
  "Mojo Branch",
  "Moyale Branch",
  "Mufti Dawud Branch",
  "Mujja Branch",
  "Muka Arara Branch",
  "Muka Turi Branch",
  "Mulo Branch",
  "Murtiguto Branch",
  "Mustafa Harawe Branch",
  "Nagele Hasasa Branch",
  "Nedjo Branch",
  "Negele Borena Branch",
  "Negelle Arba Gugu Br",
  "Nejashi Branch",
  "Nekemte Branch",
  "Nesiha Branch",
  "Newland Micro Branch",
  "Nonno Branch",
  "Nunu Kumba Branch",
  "Nur Branch",
  "Ochocha Branch",
  "Oda Bilbila Branch",
  "Oda Bisil Branch",
  "Oda Boqota",
  "Oda Branch",
  "Oda Bultum Branch",
  "Oda Karra Branch",
  "Oda Nabe Branch",
  "Odo Liben Branch",
  "Odo Shakiso Branch",
  "Ogolcho Branch",
  "Olonkomi Branch",
  "OMER IBN AL-KHATTAB Br",
  "Omo Nada Branch",
  "Qacha Branch",
  "Qajela Doyo Branch",
  "Qale Branch",
  "Qarcha Branch",
  "Qebe Branch",
  "Qechema Branch",
  "Qeto Machara Branch",
  "Qoche Branch",
  "Qore Branch",
  "Qorke Karabu Branch",
  "Qulubi Branch",
  "Qurqura Branch",
  "Rabadori Branch",
  "Ramadan Branch",
  "Robale Branch",
  "Robe Branch",
  "Robe Dedea Branch",
  "Sabian Branch",
  "Sadan Ekka Branch",
  "Sadan Soddo Branch",
  "Sagure Branch",
  "Salahadin Ali-Ayub",
  "Salgan Eggu Branch",
  "Sanate Branch",
  "Sankura Branch",
  "Saris Branch",
  "Saxamma Branch",
  "Sayo Nole Branch",
  "Sebeta Ayo Branch",
  "Sebeta Hawas Branch",
  "Sechduna Branch",
  "Sedecha Branch",
  "Seglen Ilu Branch",
  "Seka Chokorsa Branch",
  "Selam Branch",
  "Sendafa Bake Branch",
  "Serbo Branch",
  "Shabe Branch",
  "Shabu Ejersa Branch",
  "Shafeta Branch",
  "Shala Branch",
  "Shambu Branch",
  "Shararo Branch",
  "Shashemene Branch",
  "Sheger Branch",
  "Sheik Bekri Sapello",
  "Sheik Mohammed Reshad",
  "Shenen Dhugo Branch",
  "Shenen Gibe Branch",
  "Shenen Jida Branch",
  "Sheno Branch",
  "Shinshicho Branch",
  "Shire Branch",
  "Shirka Branch",
  "Shufune Branch",
  "Sibu Sire Branch",
  "Sigmo Branch",
  "Siltana Branch",
  "Sinana Branch",
  "Sinqee Branch",
  "Sire Arsi Branch",
  "Soddo Dachi Branch",
  "Sofomar Branch",
  "Sokoru Branch",
  "Sor Micro Branch",
  "Sora Lume Branch",
  "Sulula Garbi Branch",
  "Sululta Branch",
  "Sumuda Branch",
  "Tabor Branch",
  "Taiwan Branch",
  "Taji Branch",
  "Taltale Branch",
  "Tana Branch",
  "Tepi Branch",
  "TEQWA BRANCH",
  "Tijo Branch",
  "Tiksa Jima Branch",
  "Tirunesh Dibaba Branch",
  "Tiyo Branch",
  "Tobba Branch",
  "Togo Wuchale Branch",
  "Tona Branch",
  "Torban Garba Branch",
  "Torban Obo Branch",
  "Torban Wale Branch",
  "Trade Service Process",
  "Tufa Muna Branch",
  "Tullo Branch",
  "Tullu Ejersa Branch",
  "Tullu Farda",
  "Tullu Gana Branch",
  "Tulu Bolo Branch",
  "Tulu Dimtu Branch",
  "Ukke Branch",
  "Ummu-Ayman Branch",
  "Uraga Branch",
  "Uta Wayyu Branch",
  "Wabari Branch",
  "Wadera Branch",
  "Wadessa Branch",
  "Wanji Branch",
  "Wara Ganu Branch",
  "Warka Branch",
  "Warqa Branch",
  "Warra Jarso Branch",
  "Wasarbi Branch",
  "Wato Branch",
  "Wayyu Branch",
  "Weliso Branch",
  "Weltea Branch",
  "Wirtu Merkato Branch",
  "Wolayita Soddo Branch",
  "Wolkite Branch",
  "Wollo Kombolcha Branch",
  "Xadacha Branch",
  "Xicho Branch",
  "Yabello Branch",
  "Yai Goro Branch",
  "Yai Gulele Branch",
  "Yaya Gulale Branch",
  "Yayyo Branch",
  "Yebu Branch",
  "Yirgachafe Branch",
  "Yirgalem Branch",
];

interface FileUploadProps {
  name: string;
  stateFunction: File | null;
  setStateFunction: React.Dispatch<React.SetStateAction<File | null>>;
  error: boolean;
}

export const FileUpload: React.FC<FileUploadProps> = ({
  name,
  stateFunction,
  setStateFunction,
  error,
}) => {
  const [fileUploadLabel, setFileUploadLabel] = useState("No file chosen");

  const fileUploadHandler = (e: any) => {
    if (e.target.files.length > 0) {
      const fileNames = Array.from(e.target.files).map(
        (file: any) => file.name
      );
      setFileUploadLabel(fileNames.join(", "));
      setStateFunction(e.target.files[0]);
    } else {
      setFileUploadLabel("Choose a file");
    }
  };

  console.log("file emp:", stateFunction);
  console.log("file emp:", stateFunction !== null);

  return (
    <div>
      <input
        type="file"
        name={name}
        multiple={true}
        className="file-upload"
        data-method="ajax"
        accept=".jpg,.jpeg,.jpe,.gif,.png,.bmp,.tiff,.tif,.webp,.ico,.heic,.asf,.asx,.wmv,.wmx,.wm,.avi,.divx,.flv,.mov,.qt,.mpeg,.mpg,.mpe,.mp4,.m4v,.ogv,.webm,.mkv,.3gp,.3gpp,.3g2,.3gp2,.txt,.asc,.c,.cc,.h,.srt,.csv,.tsv,.ics,.rtx,.css,.htm,.html,.vtt,.dfxp,.mp3,.m4a,.m4b,.aac,.ra,.ram,.wav,.ogg,.oga,.flac,.mid,.midi,.wma,.wax,.mka,.rtf,.js,.pdf,.class,.tar,.zip,.gz,.gzip,.rar,.7z,.psd,.xcf,.doc,.pot,.pps,.ppt,.wri,.xla,.xls,.xlt,.xlw,.mdb,.mpp,.docx,.docm,.dotx,.dotm,.xlsx,.xlsm,.xlsb,.xltx,.xltm,.xlam,.pptx,.pptm,.ppsx,.ppsm,.potx,.potm,.ppam,.sldx,.sldm,.onetoc,.onetoc2,.onetmp,.onepkg,.oxps,.xps,.odt,.odp,.ods,.odg,.odc,.odb,.odf,.wp,.wpd,.key,.numbers,.pages,.json,.svg,.svgz,.xml"
        data-size="50000000"
        data-size-message="Maximum file size allowed is 50 MB. "
        data-filetype="jpg|jpeg|jpe|gif|png|bmp|tiff|tif|webp|ico|heic|asf|asx|wmv|wmx|wm|avi|divx|flv|mov|qt|mpeg|mpg|mpe|mp4|m4v|ogv|webm|mkv|3gp|3gpp|3g2|3gp2|txt|asc|c|cc|h|srt|csv|tsv|ics|rtx|css|htm|html|vtt|dfxp|mp3|m4a|m4b|aac|ra|ram|wav|ogg|oga|flac|mid|midi|wma|wax|mka|rtf|js|pdf|class|tar|zip|gz|gzip|rar|7z|psd|xcf|doc|pot|pps|ppt|wri|xla|xls|xlt|xlw|mdb|mpp|docx|docm|dotx|dotm|xlsx|xlsm|xlsb|xltx|xltm|xlam|pptx|pptm|ppsx|ppsm|potx|potm|ppam|sldx|sldm|onetoc|onetoc2|onetmp|onepkg|oxps|xps|odt|odp|ods|odg|odc|odb|odf|wp|wpd|key|numbers|pages|json|svg|svgz|xml"
        data-filetype-message="file extension is not allowed."
        onChange={fileUploadHandler}
        required
      />
      <div
        className={`${
          stateFunction !== null ? "success" : error ? "error" : ""
        } file-upload-label`}
        aria-hidden="true"
      >
        <i className="fas fa-cloud-upload-alt"></i>
        <p>
          Drag and Drop (or) <span>Choose Files</span>
          <br />
          {stateFunction?.name || "No file chosen"}
        </p>
      </div>
    </div>
  );
};

export const SignatureUpload: React.FC<FileUploadProps> = ({
  name,
  stateFunction,
  setStateFunction,
  error,
}) => {
  const [fileUploadLabel, setFileUploadLabel] = useState("No file chosen");
  const [openSignatureDialog, setOpenSignatureDialog] = useState(false);
  const [signature, setSignature] = useState<string | null>(null);
  // console.log("sign:", signature);

  const handleOpenSignatureDialog = () => {
    setOpenSignatureDialog(true);
  };

  const handleCloseSignatureDialog = () => {
    setOpenSignatureDialog(false);
  };

  const handleSaveSignature = (sign: File) => {
    console.log("han", sign);

    setStateFunction(sign);
  };

  const fileUploadHandler = (e: any) => {
    if (e.target.files.length > 0) {
      const fileNames = Array.from(e.target.files).map(
        (file: any) => file.name
      );
      setFileUploadLabel(fileNames.join(", "));
      setStateFunction(e.target.files[0]);
    } else {
      setFileUploadLabel("Choose a file");
    }
  };

  return (
    <div>
      <input
        type="file"
        name={name}
        multiple={true}
        className="file-upload"
        data-method="ajax"
        accept=".jpg,.jpeg,.jpe,.gif,.png,.bmp,.tiff,.tif,.webp,.ico,.heic,.asf,.asx,.wmv,.wmx,.wm,.avi,.divx,.flv,.mov,.qt,.mpeg,.mpg,.mpe,.mp4,.m4v,.ogv,.webm,.mkv,.3gp,.3gpp,.3g2,.3gp2,.txt,.asc,.c,.cc,.h,.srt,.csv,.tsv,.ics,.rtx,.css,.htm,.html,.vtt,.dfxp,.mp3,.m4a,.m4b,.aac,.ra,.ram,.wav,.ogg,.oga,.flac,.mid,.midi,.wma,.wax,.mka,.rtf,.js,.pdf,.class,.tar,.zip,.gz,.gzip,.rar,.7z,.psd,.xcf,.doc,.pot,.pps,.ppt,.wri,.xla,.xls,.xlt,.xlw,.mdb,.mpp,.docx,.docm,.dotx,.dotm,.xlsx,.xlsm,.xlsb,.xltx,.xltm,.xlam,.pptx,.pptm,.ppsx,.ppsm,.potx,.potm,.ppam,.sldx,.sldm,.onetoc,.onetoc2,.onetmp,.onepkg,.oxps,.xps,.odt,.odp,.ods,.odg,.odc,.odb,.odf,.wp,.wpd,.key,.numbers,.pages,.json,.svg,.svgz,.xml"
        data-size="50000000"
        data-size-message="Maximum file size allowed is 50 MB. "
        data-filetype="jpg|jpeg|jpe|gif|png|bmp|tiff|tif|webp|ico|heic|asf|asx|wmv|wmx|wm|avi|divx|flv|mov|qt|mpeg|mpg|mpe|mp4|m4v|ogv|webm|mkv|3gp|3gpp|3g2|3gp2|txt|asc|c|cc|h|srt|csv|tsv|ics|rtx|css|htm|html|vtt|dfxp|mp3|m4a|m4b|aac|ra|ram|wav|ogg|oga|flac|mid|midi|wma|wax|mka|rtf|js|pdf|class|tar|zip|gz|gzip|rar|7z|psd|xcf|doc|pot|pps|ppt|wri|xla|xls|xlt|xlw|mdb|mpp|docx|docm|dotx|dotm|xlsx|xlsm|xlsb|xltx|xltm|xlam|pptx|pptm|ppsx|ppsm|potx|potm|ppam|sldx|sldm|onetoc|onetoc2|onetmp|onepkg|oxps|xps|odt|odp|ods|odg|odc|odb|odf|wp|wpd|key|numbers|pages|json|svg|svgz|xml"
        data-filetype-message="file extension is not allowed."
        onChange={fileUploadHandler}
        required
      />
      <div
        className={`${
          stateFunction !== null ? "success" : error ? "error" : ""
        } file-upload-label`}
        aria-hidden="true"
      >
        <i className="fas fa-cloud-upload-alt"></i>
        <p>
          Drag and Drop (or) <span>Choose Files</span>
          <br />
          {stateFunction?.name || "No file chosen"}
        </p>
      </div>
      <div className="signatureContainer">
        <p>or</p>
        <Button onClick={handleOpenSignatureDialog}>Sign Here</Button>
      </div>
      <SignatureDialog
        open={openSignatureDialog}
        onClose={handleCloseSignatureDialog}
        onSave={handleSaveSignature}
      />
      {/* {signature && <img src={signature} alt="signature" />} */}
    </div>
  );
};

export const ImageUpload: React.FC<FileUploadProps> = ({
  name,
  stateFunction,
  setStateFunction,
}) => {
  const [fileUploadLabel, setFileUploadLabel] = useState("No file chosen");
  const [imgPre, setImgPre] = useState<string | null>("");

  const [isDialogOpen, setDialogOpen] = useState(false);
  const [photoURL, setPhotoURL] = useState<string | null>(null);

  const handleCapture = useCallback((photoSrc: string | null) => {
    setImgPre(photoSrc);
  }, []);

  const fileUploadHandler = (e: any) => {
    if (e.target.files.length > 0) {
      const fileNames = Array.from(e.target.files).map(
        (file: any) => file.name
      );
      setFileUploadLabel(fileNames.join(", "));
      setStateFunction(e.target.files[0]);

      let reader = new FileReader();
      reader.readAsDataURL(e.target.files[0]);
      reader.onload = function (ev) {
        const url = (ev?.target?.result as string) || "";
        setImgPre(url);
        console.log("finall");
      };
    } else {
      setFileUploadLabel("Choose a file");
    }
  };

  return (
    <div>
      <input
        type="file"
        name={name}
        multiple={true}
        className="file-upload"
        data-method="ajax"
        accept=".jpg,.jpeg,.jpe,.gif,.png,.bmp,.tiff,.tif,.webp,.ico,.heic,.asf,.asx,.wmv,.wmx,.wm,.avi,.divx,.flv,.mov,.qt,.mpeg,.mpg,.mpe,.mp4,.m4v,.ogv,.webm,.mkv,.3gp,.3gpp,.3g2,.3gp2,.txt,.asc,.c,.cc,.h,.srt,.csv,.tsv,.ics,.rtx,.css,.htm,.html,.vtt,.dfxp,.mp3,.m4a,.m4b,.aac,.ra,.ram,.wav,.ogg,.oga,.flac,.mid,.midi,.wma,.wax,.mka,.rtf,.js,.pdf,.class,.tar,.zip,.gz,.gzip,.rar,.7z,.psd,.xcf,.doc,.pot,.pps,.ppt,.wri,.xla,.xls,.xlt,.xlw,.mdb,.mpp,.docx,.docm,.dotx,.dotm,.xlsx,.xlsm,.xlsb,.xltx,.xltm,.xlam,.pptx,.pptm,.ppsx,.ppsm,.potx,.potm,.ppam,.sldx,.sldm,.onetoc,.onetoc2,.onetmp,.onepkg,.oxps,.xps,.odt,.odp,.ods,.odg,.odc,.odb,.odf,.wp,.wpd,.key,.numbers,.pages,.json,.svg,.svgz,.xml"
        data-size="50000000"
        data-size-message="Maximum file size allowed is 50 MB. "
        data-filetype="jpg|jpeg|jpe|gif|png|bmp|tiff|tif|webp|ico|heic|asf|asx|wmv|wmx|wm|avi|divx|flv|mov|qt|mpeg|mpg|mpe|mp4|m4v|ogv|webm|mkv|3gp|3gpp|3g2|3gp2|txt|asc|c|cc|h|srt|csv|tsv|ics|rtx|css|htm|html|vtt|dfxp|mp3|m4a|m4b|aac|ra|ram|wav|ogg|oga|flac|mid|midi|wma|wax|mka|rtf|js|pdf|class|tar|zip|gz|gzip|rar|7z|psd|xcf|doc|pot|pps|ppt|wri|xla|xls|xlt|xlw|mdb|mpp|docx|docm|dotx|dotm|xlsx|xlsm|xlsb|xltx|xltm|xlam|pptx|pptm|ppsx|ppsm|potx|potm|ppam|sldx|sldm|onetoc|onetoc2|onetmp|onepkg|oxps|xps|odt|odp|ods|odg|odc|odb|odf|wp|wpd|key|numbers|pages|json|svg|svgz|xml"
        data-filetype-message="file extension is not allowed."
        onChange={fileUploadHandler}
        required
      />
      {/* <div className="file-upload-label" aria-hidden="true">
        <i className="fas fa-cloud-upload-alt"></i>
        <p>
          Drag and Drop (or) <span>Choose Files</span>
          <br />
          {stateFunction?.name || "No file chosen"}
        </p>
      </div> */}
      <div className="image-upload-container">
        <div className="imageHolder">
          <img src={imgPre || personPlaceholder} alt="img" />
        </div>
        <div className="action">
          <button className="upload">upload</button>
          <Button onClick={() => setDialogOpen(true)} className="selfie">
            Take a Selfie
          </Button>
        </div>
        {/* <Grid xs={12} sm={6}> */}
        <PhotoCaptureButton
          open={isDialogOpen}
          onClose={() => setDialogOpen(false)}
          onOpen={() => setDialogOpen(true)}
          onSave={setStateFunction}
          onCapture={handleCapture}
        />
      </div>
    </div>
  );
};

export function LoanRequestForm(props: ILoanRequestlangmProps) {
  const [photo, setPhoto] = useState<File | null>(null);

  return (
    <form className="loan-form-container" id="Loan_Request">
      <Grid container xs={11} lg={10} rowSpacing={4}>
        <Grid item xs={12} className="form-row">
          <div className="form-title">
            <p>To request a loan, please fill out these fields</p>
          </div>
        </Grid>

        <Grid item xs={12} className="form-row">
          <Grid container xs={12} columnSpacing={3} className="row1">
            <Grid
              item
              xs={12}
              sm={6}
              id="text-1"
              className="form-col form-col-6 "
            >
              <div className="form-field">
                <label
                  className="form-label"
                  id="form-field-text-1_651becd154b31-label"
                >
                  Full Name <span className="form-required">*</span>
                </label>
                <input
                  type="text"
                  name="text-1"
                  placeholder="Your Full Name"
                  id="form-field-text-1_651becd154b31"
                  className="form-input form-name--field"
                  data-required="1"
                  required
                />
              </div>
            </Grid>
            <Grid
              item
              xs={12}
              sm={6}
              id="name-4"
              className="form-col form-col-6 "
            >
              <div className="form-field">
                <label
                  className="form-label"
                  id="form-field-name-4_651becd154b31-label"
                >
                  Surname <span className="form-required">*</span>
                </label>
                <input
                  type="text"
                  name="name-4"
                  placeholder="Your Surname"
                  id="form-field-name-4_651becd154b31"
                  className="form-input form-name--field"
                  aria-required="true"
                  required
                />
              </div>
            </Grid>
          </Grid>
        </Grid>

        <Grid item xs={12} className="form-row">
          <Grid container xs={12} columnSpacing={3} className="form-row">
            <Grid
              item
              xs={12}
              sm={4}
              id="email-1"
              className="form-col form-col-4 "
            >
              <div className="form-field">
                <label
                  lang="form-field-email-1_651becd154b31"
                  className="form-label"
                  id="form-field-email-1_651becd154b31-label"
                >
                  Email Address <span className="form-required">*</span>
                </label>
                <input
                  type="email"
                  name="email-1"
                  placeholder="E.g. abdi@yahoo.com"
                  id="form-field-email-1_651becd154b31"
                  className="form-input form-email--field"
                  data-required="1"
                  aria-required="true"
                  required
                />
              </div>
            </Grid>
            <Grid
              item
              xs={12}
              sm={4}
              id="phone-1"
              className="form-col form-col-4 "
            >
              <div className="form-field">
                <label
                  lang="form-field-phone-1_651becd154b31"
                  className="form-label"
                  id="form-field-phone-1_651becd154b31-label"
                >
                  Phone <span className="form-required">*</span>
                </label>
                <input
                  type="text"
                  name="phone-1"
                  placeholder="E.g. +1 300 400 5000"
                  id="form-field-phone-1_651becd154b31"
                  className="form-input form-field--phone"
                  data-required="1"
                  aria-required="true"
                  required
                />
              </div>
            </Grid>
            <Grid
              item
              xs={12}
              sm={4}
              id="date-1"
              className="form-col form-col-4 "
            >
              <div className="form-field form-is_filled">
                <label
                  lang="form-field-date-1-picker_651becd154b31"
                  className="form-label"
                  id="form-field-date-1-picker_651becd154b31-label"
                >
                  Date <span className="form-required">*</span>
                </label>
                <div className="form-input-with-icon">
                  <label lang="form-field-date-1-picker_651becd154b31">
                    <span
                      className="form-icon-calendar"
                      aria-hidden="true"
                    ></span>
                  </label>
                  <input type="date" name="date-1" className="date" required />
                </div>
              </div>
            </Grid>
          </Grid>
        </Grid>

        <Grid item xs={12} className="form-row">
          <Grid container xs={12} columnSpacing={3} className="form-row">
            <Grid
              item
              xs={12}
              sm={4}
              id="email-1"
              className="form-col form-col-4 "
            >
              <div className="form-field">
                <label className="form-label">Country </label>
                <div className="select">
                  <select
                    name="address-1-country"
                    id="forminator-form-2333__field--address-1-country_6523b367d1783"
                    data-search="true"
                    data-placeholder="Select country"
                    data-default-value=""
                    data-select2-id="select2-data-forminator-form-2333__field--address-1-country_6523b367d1783"
                    aria-hidden="true"
                  >
                    {countries.map((country: any) => {
                      return <option value={country}>{country}</option>;
                    })}
                  </select>
                  <span>
                    <i className="fas fa-chevron-down"></i>
                  </span>
                </div>
              </div>
            </Grid>
            <Grid
              item
              xs={12}
              sm={4}
              id="email-1"
              className="form-col form-col-4 "
            >
              <div className="form-field">
                <label
                  id="forminator-form-2333__field--select-2_6523b367d1783-label"
                  className="form-label"
                >
                  Select What You Need{" "}
                  <span className="forminator-required">*</span>
                </label>
                <div className="select">
                  <select
                    required
                    id="forminator-form-2333__field--select-2_6523b367d1783"
                    className="forminator-select--field forminator-select2 select2-hidden-accessible forminator-screen-reader-only"
                    data-required="1"
                    name="select-2"
                    data-default-value=""
                    data-placeholder="Select What You Need"
                    data-search="false"
                    aria-labelledby="forminator-form-2333__field--select-2_6523b367d1783-label"
                    aria-describedby="forminator-form-2333__field--select-2_6523b367d1783-description forminator-form-2333__field--select-2_6523b367d1783-error"
                    data-select2-id="select2-data-forminator-form-2333__field--select-2_6523b367d1783"
                    aria-hidden="true"
                    aria-invalid="true"
                  >
                    <option value="" data-select2-id="select2-data-4-qp2p">
                      Select What You Need
                    </option>
                    <option
                      value="Diaspora-Mortgage-Loan"
                      data-calculation="0"
                      data-select2-id="select2-data-278-9opz"
                    >
                      Diaspora Mortgage Loan
                    </option>
                    <option
                      value="Diaspora-Automobile-Loan"
                      data-calculation="0"
                      data-select2-id="select2-data-279-zcb6"
                    >
                      Diaspora Automobile Loan
                    </option>
                    <option
                      value="Diaspora-Vehicle-Loan"
                      data-calculation="0"
                      data-select2-id="select2-data-280-wfn3"
                    >
                      Diaspora Vehicle Loan
                    </option>
                    <option
                      value="Diaspora-Personal-Loan"
                      data-calculation="0"
                      data-select2-id="select2-data-281-xcz9"
                    >
                      Diaspora Personal Loan
                    </option>
                    <option
                      value="Diaspora-Investment-and-Working-Capital-Loan"
                      data-calculation="0"
                      data-select2-id="select2-data-282-elw4"
                    >
                      Diaspora Investment and Working Capital Loan
                    </option>
                  </select>
                  <span>
                    <i className="fas fa-chevron-down"></i>
                  </span>
                </div>
              </div>
            </Grid>
            <Grid
              item
              xs={12}
              sm={4}
              id="email-1"
              className="form-col form-col-4 "
            >
              <div className="form-field">
                <label
                  id="forminator-form-2333__field--select-1_6523b367d1783-label"
                  className="form-label"
                >
                  Choose Your Nearest Branch{" "}
                  <span className="forminator-required">*</span>
                </label>
                <div className="select">
                  <select
                    required
                    id="forminator-form-2333__field--select-1_6523b367d1783"
                    className="forminator-select--field forminator-select2 select2-hidden-accessible forminator-screen-reader-only"
                    data-required="1"
                    name="select-1"
                    data-default-value=""
                    data-placeholder="Choose Your Branch"
                    data-search="false"
                    aria-labelledby="forminator-form-2333__field--select-1_6523b367d1783-label"
                    aria-describedby="forminator-form-2333__field--select-1_6523b367d1783-description forminator-form-2333__field--select-1_6523b367d1783-error"
                    data-select2-id="select2-data-forminator-form-2333__field--select-1_6523b367d1783"
                    aria-hidden="true"
                    aria-invalid="true"
                  >
                    {branches.map((branch: string) => {
                      return <option value={branch}>{branch}</option>;
                    })}
                  </select>
                  <span>
                    <i className="fas fa-chevron-down"></i>
                  </span>
                </div>
              </div>
            </Grid>
          </Grid>
        </Grid>

        <Grid item xs={12} className="form-row">
          <Grid container xs={12} columnSpacing={3} className="form-row">
            <Grid
              item
              xs={12}
              sm={6}
              id="select-3"
              className="form-col form-col-6 "
            >
              <div className="form-field">
                <label className="form-label">
                  Do you have Diaspora account?
                  <span className="form-required"> *</span>
                </label>
                <div className="select">
                  <select required>
                    <option value="Yes,-I-have.">Yes, I do.</option>
                    <option value="No,-I-don't-Have.">No, I don't.</option>
                  </select>
                  <span>
                    <i className="fas fa-chevron-down"></i>
                  </span>
                </div>
              </div>
            </Grid>
            <Grid
              item
              xs={12}
              sm={6}
              id="html-1"
              className="form-col form-col-6 "
            >
              <div className="form-field form-merge-tags" data-field="html-1">
                <label className="form-label">
                  Diaspora account is required. By clicking the link below, you
                  can apply if you do not already have one.
                </label>
                <div className="call-to-action">
                  <p>
                    <a href="https://diaspora.coopbankoromia.com.et/diaspora-current-account/">
                      Apply for Diaspora Account Now
                    </a>
                  </p>
                </div>
              </div>
            </Grid>
          </Grid>
        </Grid>

        <Grid item xs={12} className="form-row">
          <Grid container xs={12} columnSpacing={3} className="form-row">
            <Grid
              item
              xs={12}
              sm={6}
              id="select-6"
              className="form-col form-col-6 "
            >
              <div className="form-field">
                <label className="form-label">
                  Type of Account <span className="form-required">*</span>
                </label>
                <div className="select">
                  <select name="select-6" required>
                    <option data-select2-id="select2-data-10-v1mo">
                      Type of Account
                    </option>
                    <option value="one" data-calculation="0">
                      Diaspora Current Account (1009)
                    </option>
                    <option value="two" data-calculation="0">
                      Diaspora Fixed-Time Deposit Account
                    </option>
                    <option
                      value="Diaspora-Non-Repatriable-Account"
                      data-calculation="0"
                    >
                      Diaspora Non-Repatriable Account (6007)
                    </option>
                    <option
                      value="Diaspora-ECOLFL-Savings-Account"
                      data-calculation="0"
                    >
                      Diaspora ECOLFL Savings Account (6008)
                    </option>
                  </select>
                  <span>
                    <i className="fas fa-chevron-down"></i>
                  </span>
                </div>
              </div>
            </Grid>
            <Grid
              item
              xs={12}
              sm={6}
              id="name-1"
              className="form-col form-col-6 "
            >
              <div className="form-field">
                <label
                  lang="form-field-name-1_651becd154b31"
                  className="form-label"
                  id="form-field-name-1_651becd154b31-label"
                >
                  Your Account Number <span className="form-required">*</span>
                </label>
                <input
                  type="text"
                  name="name-1"
                  placeholder="E.g. 1009xxxxxxx4191"
                  id="form-field-name-1_651becd154b31"
                  className="form-input form-name--field"
                  aria-required="true"
                  required
                />
              </div>
            </Grid>
          </Grid>
        </Grid>

        <Grid item xs={12} className="form-row">
          <Grid container xs={12} columnSpacing={3} className="form-row">
            <Grid
              item
              xs={12}
              sm={4}
              id="select-5"
              className="form-col form-col-4 "
            >
              <div className="form-field">
                <label
                  lang="form-langm-2333__field--select-5_651becd154b31"
                  id="form-langm-2333__field--select-5_651becd154b31-label"
                  className="form-label"
                >
                  Income Source <span className="form-required">*</span>
                </label>
                <div className="select">
                  <select
                    id="form-langm-2333__field--select-5_651becd154b31"
                    className="form-select"
                    data-required="1"
                    name="select-5"
                    data-default-
                    data-placeholder="Specify your Income Source"
                    data-search="false"
                    aria-labelledby="form-langm-2333__field--select-5_651becd154b31-label"
                    aria-describedby="form-langm-2333__field--select-5_651becd154b31-description"
                    data-select2-id="select2-data-form-langm-2333__field--select-5_651becd154b31"
                    aria-hidden="true"
                    required
                  >
                    <option data-select2-id="select2-data-12-prgx">
                      Specify your Income Source
                    </option>
                    <option value="one" data-calculation="0">
                      Employment Letter
                    </option>
                    <option value="Two" data-calculation="0">
                      Individual Income TAX return of three(3) years
                      consecutives
                    </option>
                    <option
                      value="Audited-financial-statement-of-at-least-recent-One(1)-year"
                      data-calculation="0"
                    >
                      Audited financial statement of at least recent One(1) year
                    </option>
                  </select>
                  <span>
                    <i className="fas fa-chevron-down"></i>
                  </span>
                </div>
              </div>
            </Grid>
            <Grid
              item
              xs={12}
              sm={4}
              id="upload-2"
              className="form-col form-col-4 "
            >
              <div className="form-field">
                <label
                  lang="form-field-upload-2_651becd154b31"
                  className="form-label"
                >
                  Upload file <span className="form-required">*</span>
                </label>
                <div
                  className="file-upload-container"
                  data-element="upload-2_651becd154b31"
                  aria-describedby="form-field-upload-2_651becd154b31-description"
                >
                  <FileUpload
                    error={false}
                    name="upload-2[]"
                    stateFunction={photo}
                    setStateFunction={setPhoto}
                  />
                </div>
                <ul className="form-uploaded-files upload-container-upload-2_651becd154b31"></ul>
              </div>
            </Grid>
            <Grid
              item
              xs={12}
              sm={4}
              id="upload-1"
              className="form-col form-col-4 "
            >
              <div className="form-field">
                <label
                  lang="form-field-upload-1_651becd154b31"
                  className="form-label"
                >
                  Bank Statement(Optional)
                </label>
                <div
                  className="file-upload-container"
                  data-element="upload-1_651becd154b31"
                  aria-describedby="form-field-upload-1_651becd154b31-description"
                >
                  <FileUpload
                    error={false}
                    name="upload-1[]"
                    stateFunction={photo}
                    setStateFunction={setPhoto}
                  />
                </div>
                <ul className="form-uploaded-files upload-container-upload-1_651becd154b31"></ul>
              </div>
            </Grid>
          </Grid>
        </Grid>

        <Grid item xs={12} className="form-row">
          <Grid container xs={12} columnSpacing={3} className="form-row">
            <Grid
              item
              xs={12}
              sm={6}
              id="name-2"
              className="form-col form-col-6 "
            >
              <div className="form-field">
                <label
                  lang="form-field-name-2_651becd154b31"
                  className="form-label"
                  id="form-field-name-2_651becd154b31-label"
                >
                  Loan amount <span className="form-required">*</span>
                </label>
                <input
                  type="text"
                  name="name-2"
                  placeholder="E.g. 1,000,000.00"
                  id="form-field-name-2_651becd154b31"
                  className="form-input form-name--field"
                  aria-required="true"
                  required
                />
              </div>
            </Grid>
            <Grid
              item
              xs={12}
              sm={6}
              id="select-4"
              className="form-col form-col-6 "
            >
              <div className="form-field">
                <label
                  lang="form-langm-2333__field--select-4_651becd154b31"
                  id="form-langm-2333__field--select-4_651becd154b31-label"
                  className="form-label"
                >
                  Repayment Schedule <span className="form-required">*</span>
                </label>
                <div className="select">
                  <select
                    id="form-langm-2333__field--select-4_651becd154b31"
                    className="form-select"
                    data-required="1"
                    name="select-4"
                    data-default-
                    data-placeholder="Repayment Schedule"
                    data-search="false"
                    aria-labelledby="form-langm-2333__field--select-4_651becd154b31-label"
                    aria-describedby="form-langm-2333__field--select-4_651becd154b31-description"
                    data-select2-id="select2-data-form-langm-2333__field--select-4_651becd154b31"
                    aria-hidden="true"
                    required
                  >
                    <option data-select2-id="select2-data-14-d1ap">
                      Repayment Schedule
                    </option>
                    <option value="One-Month" data-calculation="0">
                      Monthly
                    </option>
                    <option value="Three-Months" data-calculation="0">
                      Two Months Basis
                    </option>
                    <option value="Six-Months" data-calculation="0">
                      Three Months Basis
                    </option>
                  </select>
                  <span>
                    <i className="fas fa-chevron-down"></i>
                  </span>
                </div>
              </div>
            </Grid>
          </Grid>
        </Grid>

        <Grid item xs={12} className="form-row">
          <div
            role="group"
            className="form-field"
            aria-labelledby="form-checkbox-group-651becd154b31-label"
          >
            <div className="recommendation">
              <h4
                id="form-checkbox-group-651becd154b31-label"
                className="form-label"
              >
                Recommendation: Would you recommend our product to your friends
                or relatives? If yes, please fill out the following inlangmation
                about them
              </h4>
              <label
                id="form-field-checkbox-1-1-651becd154b31-label"
                lang="form-field-checkbox-1-1-651becd154b31"
                className="form-checkbox form-checkbox-inline"
                title="Yes"
              >
                <input
                  type="checkbox"
                  name="checkbox-1[]"
                  value="Yes"
                  id="form-field-checkbox-1-1-651becd154b31"
                  aria-labelledby="form-field-checkbox-1-1-651becd154b31-label"
                  data-calculation="0"
                  aria-describedby="form-field-checkbox-1-651becd154b31-description"
                />
                <span className="form-checkbox-box" aria-hidden="true"></span>
                <span className="form-checkbox-label">Yes</span>
              </label>
              <label
                id="form-field-checkbox-1-2-651becd154b31-label"
                lang="form-field-checkbox-1-2-651becd154b31"
                className="form-checkbox form-checkbox-inline"
                title="Not Now"
              >
                <input
                  type="checkbox"
                  name="checkbox-1[]"
                  value="Not-Now"
                  className="yes-no-checkbox"
                  id="no-checkbox"
                  aria-labelledby="form-field-checkbox-1-2-651becd154b31-label"
                  data-calculation="0"
                  aria-describedby="form-field-checkbox-1-651becd154b31-description"
                />
                <span className="form-checkbox-box" aria-hidden="true"></span>
                <span className="form-checkbox-label">Not Now</span>
              </label>
            </div>
          </div>
        </Grid>

        <Grid item xs={12} className="form-row">
          <Grid container xs={12} columnSpacing={3} className="form-row">
            <Grid
              item
              xs={12}
              sm={4}
              id="name-3"
              className="form-col form-col-4 "
            >
              <div className="form-field">
                <label
                  lang="form-field-name-3_651becd154b31"
                  className="form-label"
                  id="form-field-name-3_651becd154b31-label"
                >
                  Full Name
                </label>
                <input
                  type="text"
                  name="name-3"
                  placeholder="E.g. Abdi Begna"
                  id="form-field-name-3_651becd154b31"
                  className="form-input form-name--field"
                  aria-required="false"
                />
              </div>
            </Grid>
            <Grid
              item
              xs={12}
              sm={4}
              id="email-2"
              className="form-col form-col-4 "
            >
              <div className="form-field">
                <label
                  lang="form-field-email-2_651becd154b31"
                  className="form-label"
                  id="form-field-email-2_651becd154b31-label"
                >
                  Email Address
                </label>
                <input
                  type="email"
                  name="email-2"
                  placeholder="E.g. abdi@gmail.com"
                  id="form-field-email-2_651becd154b31"
                  className="form-input form-email--field"
                  data-required=""
                  aria-required="false"
                />
              </div>
            </Grid>
            <Grid
              item
              xs={12}
              sm={4}
              id="phone-2"
              className="form-col form-col-4 "
            >
              <div className="form-field">
                <label
                  lang="form-field-phone-2_651becd154b31"
                  className="form-label"
                  id="form-field-phone-2_651becd154b31-label"
                >
                  Phone Number
                </label>
                <input
                  type="text"
                  name="phone-2"
                  placeholder="E.g. +1 300 400 5000"
                  id="form-field-phone-2_651becd154b31"
                  className="form-input form-field--phone"
                  data-required=""
                  aria-required="false"
                />
              </div>
            </Grid>
          </Grid>
        </Grid>

        <Grid item xs={12} className="form-row">
          <div className="form-field">
            <label
              lang="form-field-textarea-1_651becd154b31"
              id="form-field-textarea-1_651becd154b31-label"
              className="form-label"
            >
              Comment or message (optional)
            </label>
            <textarea
              name="textarea-1"
              placeholder=""
              id="form-field-textarea-1_651becd154b31"
              className="form-textarea"
              style={{ minHeight: "70px" }}
            ></textarea>
          </div>
        </Grid>

        <Grid item xs={12} className="form-row form-row-last">
          <div className="form-field">
            <button className="form-button form-button-submit" type="submit">
              Submit
            </button>
          </div>
        </Grid>
      </Grid>
    </form>
  );
}
