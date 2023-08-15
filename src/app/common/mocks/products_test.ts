import { Product } from "../models/product.model";

export const PRODUCTS: Array<Product> = [
  {
    img: 'https://cdn4.jysk.com/getimage/wd2.medium/201611',
    code: '0001',
    title: 'HUNDESTED',
    type: 'chair',
    price: '199',
    rate: 4,
    description: {
      general: {
        slesPackage: '1 sectional sofa',
        modelNumber: 'TFCBLIGRBL6SRHS',
        SecondaryMaterial: 'Solid Wood',
        Configuration: 'L - shaped',
        UpholsteryMaterial: 'Fabric + Cotton',
        UpholsteryColor: 'Bright Grey & Lion',
      },
      product: {
        fillingMaterial: 'Foam',
        finishType: 'Bright Grey & Lion',
        adjustableHeadrest: 'No',
        maximumLoadCapacity: '280 KG',
        originManufacture: 'India',
      },
      dimensions: {
        width: '265.32 cm',
        height: '76 cm',
        depth: '167.76 cm',
        weight: '45 KG',
        seatHeight: '41.52 cm',
        legHeight: '5.46 cm',
      },
      warranty: {
        warrantySummary: '1 Year Manufacturing Warranty',
        warrantyServiceType: 'For Warranty Claims or Any Product Related Issues Please Email at operations@trevifurniture.com.',
        coveredWarranty: 'Warranty Against Manufacturing Defect',
        notCoveredWarranty: 'The Warranty Does Not Cover Damages Due To Usage Of The Product Beyond Its Intended Use And Wear & Tear In The Natural Course Of Product Usage.',
        domesticWarrant: '1 Year',
      }
    },
    sizes: undefined,
    colors: undefined,
    productDetails: '',
  },
]