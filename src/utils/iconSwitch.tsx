import Suplementos from '../assets/icons/white/alimentos-suplementares.png';
import GraosECereais from '../assets/icons/white/arroz.png';
import Bebidas from '../assets/icons/white/bebida-alcolica.png';
import BichosDeEstimacao from '../assets/icons/white/bicho-de-estimacao.png';
import Biscoitos from '../assets/icons/white/biscoitos.png';
import Doces from '../assets/icons/white/bolos-de-copo.png';
import Legumes from '../assets/icons/white/brocolis.png';
import Carne from '../assets/icons/white/carne.png';
import Congelados from '../assets/icons/white/comida-congelada.png';
import Enlatados from '../assets/icons/white/comida-enlatada.png';
import Massas from '../assets/icons/white/espaguete.png';
import FerramentasDeLimpeza from '../assets/icons/white/ferramentas-de-limpeza.png';
import Frutas from '../assets/icons/white/fruits.png';
import HigienePessoal from '../assets/icons/white/higiene-pessoal.png';
import Jardinagem from '../assets/icons/white/jardinagem.png';
import Laticinios from '../assets/icons/white/laticnios.png';
import PetFood from '../assets/icons/white/pet-food.png';
import ServicoAutomotivo from '../assets/icons/white/servico-automotivo.png';

export const iconSwitch = (icon: string) => {
  switch (icon) {
    case 'Serviço Automotivo':
      return ServicoAutomotivo;
    case 'Bebidas':
      return Bebidas;
    case 'Bichos de Estimação':
      return BichosDeEstimacao;
    case 'Biscoitos':
      return Biscoitos;
    case 'Congelados':
      return Congelados;
    case 'Enlatados':
      return Enlatados;
    case 'Ferramentas de Limpeza':
      return FerramentasDeLimpeza;
    case 'Higiene Pessoal':
      return HigienePessoal;
    case 'Jardinagem':
      return Jardinagem;
    case 'Pet Food':
      return PetFood;
    case 'Suplementos':
      return Suplementos;
    case 'Grãos e Cereais':
      return GraosECereais;
    case 'Doces':
      return Doces;
    case 'Legumes':
      return Legumes;
    case 'Carne':
      return Carne;
    case 'Massas':
      return Massas;
    case 'Laticinios':
      return Laticinios;
    case 'Frutas':
      return Frutas;
    default:
      return;
  }
};
