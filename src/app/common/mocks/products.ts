import { Product } from "../models/product.model";

export const PRODUCTS: Array<Product> = [
  {
    img: '../../../assets/images/products/01.png',
    code: '0001',
    title: 'Syltherine',
    type: 'Stylish cafe chair',
    price: '$1200',
    rate: 4,
    description: 'Setting the bar as one of the loudest speakers in its class, the Kilburn is a compact, stout-hearted hero with a well-balanced audio which boasts a clear midrange and extended highs for a sound.',
    sizes: [
      {
        s: 'L'
      },
      {
        s: 'XL'
      },
      {
        s: 'XS'
      },
    ],
    colors: [
      {
        c: '#816DFA',
      },
      {
        c: '#000',
      },
      {
        c: '#B88E2F',
      },
    ],
    productDetails: {
      general: [
        '1 sectional sofa',
        'TFCBLIGRBL6SRHS',
        'Solid Wood',
        'L - shaped',
        'Fabric + Cotton',
        'Bright Grey & Lion',
      ],
      product: [
        'Foam',
        'Bright Grey & Lion',
        'No',
        '280 KG',
        'India',

      ],
      dimensions: [
        '265.32 cm',
        '76 cm',
        '167.76 cm',
        '45 KG',
        '41.52 cm',
        '5.46 cm',
      ],
      warranty: [
        '1 Year Manufacturing Warranty',
        'For Warranty Claims or Any Product Related Issues Please Email at operations@trevifurniture.com.',
        'Warranty Against Manufacturing Defect',
        'The Warranty Does Not Cover Damages Due To Usage Of The Product Beyond Its Intended Use And Wear & Tear In The Natural Course Of Product Usage.',
        '1 Year'
      ],
    },
  },
  {
    img: '../../../assets/images/products/02.png',
    code: '0002',
    title: 'Not Syltherine',
    type: 'Stylish cafe chair',
    price: '$1200',
    rate: 4,
    description: 'Setting the bar as one of the loudest speakers in its class, the Kilburn is a compact, stout-hearted hero with a well-balanced audio which boasts a clear midrange and extended highs for a sound.',
    sizes: [
      {
        s: 'L'
      },
      {
        s: 'XL'
      },
      {
        s: 'XS'
      },
    ],
    colors: [
      {
        c: '#816DFA',
      },
      {
        c: '#000',
      },
      {
        c: '#B88E2F',
      },
    ],
    productDetails: {
      general: [
        '1 Three Seater, 2 Single Seater',
        'DTUBLIGRBL568',
        'Solid Wood',
        'L - shaped',
        'Fabric + Cotton',
        'Bright Grey & Lion',
      ],
      product: [
        'Matte',
        'Bright Grey & Lion',
        'yes',
        '300 KG',
        'India',

      ],
      dimensions: [
        '265.32 cm',
        '76 cm',
        '167.76 cm',
        '65 KG',
        '41.52 cm',
        '5.46 cm',
      ],
      warranty: [
        '1.2 Year Manufacturing Warranty',
        'For Warranty Claims or Any Product Related Issues Please Email at support@xyz.com',
        'Warranty of the product is limited to manufacturing defects only.',
        'The Warranty Does Not Cover Damages Due To Usage Of The Product Beyond Its Intended Use And Wear & Tear In The Natural Course Of Product Usage.',
        '3 Months',
      ],
    }
  },
]