import React, { createContext, useReducer, useContext } from 'react';

export const ProductContext = createContext();
const initialState = {
  products: [
    {
      id: 1,
      name: 'Áo ManCity 2023',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTiCdsrXtFUBIIieeFpFpg9Bzm0dfMN5RbFsA&usqp=CAU',
      image1: 'https://www.sporter.vn/wp-content/uploads/2017/06/Ao-bong-da-man-city-xanh-bien-hang-viet-nam-3.jpg',
      description: '150$',    
      size: 'ao',
    },
    {
      id: 2,
      name: 'Áo Arsenal 2023',
      image: 'https://static.bongda24h.vn/medias/standard/2020/7/23/ar4.PNG',
      image2: '',
      description: '150$',    
      size: 'ao',
    },
    {
      id: 3,
      name: 'Áo ManUnited 2023',
      image: 'https://obitosport.com/wp-content/uploads/2022/03/Mu-2.jpg',
      image2: '',
      description: '150$',
      size: 'ao',
    },
    {
      id: 4,
      name: 'Ao Chellsi 2023',
      image: 'https://fansport.vn/upload/product/16/56/74/2021-2022-home-chelsea-shirt-jersey-ao-dau-bong-da-blue-cd4230-496-image-20220702144930-318968.jpg',
      description: '150$',
      size: 'ao',
    },
    {
      id: 5,
      name: 'Ao Totanham 2023',
      image: 'https://rozaco.vn/wp-content/uploads/2022/07/tottenham-hotspur-home-jersey-soccer-uniform-mens-first-football-top-shirt-2022-2023-1-600x800-1.jpg',
      image1:'https://my-live-02.slatic.net/p/893f36d22e24d49305456e9d51379989.jpg',
      description: '150$',
      size: 'ao',
    },
    {
      id: 6,
      name: 'Ao Liverpool 2023',
      image: 'https://supersports.com.vn/cdn/shop/files/DX2692-688-1.jpg?v=1684308247',
      description: '150$',
      size: 'ao',
    },
    {
      id: 7,
      name: 'Ao xau vl 7',
      image: 'https://assets.adidas.com/images/w_600,f_auto,q_auto/7aed9d4f5b0d4e508356af5d0115be63_9366/Giay_DJa_Bong_Turf_X_Speedportal.1_Hong_GZ2440_22_model.jpg',
      description: '5100$.',
      size: 'Giay',
    },
    {
      id: 8,
      name: 'Ao xau vl 8',
      image: 'https://victeam.co/wp-content/uploads/2022/03/giay-da-banh-wika-galaxy-den-1.jpg',
      description: '5100$.',
      size: 'Giay',
    },  
    {
      id: 9,
      name: 'Ao xau vl 9',
      image: 'https://cdn.vuahanghieu.com/unsafe/0x900/left/top/smart/filters:quality(90)/https://admin.vuahanghieu.com/upload/product/2023/01/giay-da-bong-adidas-x-speedportal-3-multi-ground-boots-gw8478-mau-xanh-la-cay-size-48-63d77f0326c9b-30012023152539.jpg',
      description: '5100$.',
      size: 'Giay',
    },
    {
      id: 10,
      name: 'Ao xau vl 10',
      image: 'https://img.websosanh.vn/v10/users/review/images/tvrv7n48pm5an/giay-da-bong-nike-4.jpg?compress=85',
      description: '5100$.',
      size: 'Giay',
    },
    {
      id: 11,
      name: 'Ao xau vl 11',
      image: 'https://file.hstatic.net/1000230642/file/am-hunter-football-futsal-dsmh11_51fe315f13eb43149eabe4189125f3a9_grande.jpg',
      description: '5100$.',
      size: 'Giay',
    },
    {
      id: 12,
      name: 'Ao xau vl 12',
      image: 'https://thuhiensport.com/wp-content/uploads/2019/04/giay-da-bong-nike.jpg',
      description: '5100$.',
      size: 'Giay',
    },
    {
      id: 13,
      name: 'Ao xau vl 13',
      image: 'https://file3.qdnd.vn/data/images/0/2022/11/14/vietcuong/1-%201.jpg?dpi=150&quality=100&w=870',
      description: '5100$.',
      size: 'bong',
    },
    {
      id: 14,
      name: 'Ao xau vl 14 ',
      image: 'https://www.sport9.vn/images/thumbs/001/0015162_qua-bong-da-kamito-sakiro-s19102-size-5.jpeg?preset=large&watermark=default',
      description: '5100$.',
      size: 'bong',
    },
    {
      id: 15,
      name: 'Ao xau vl 15',
      image: 'https://contents.mediadecathlon.com/p1988891/38799a5738e9831524b768e3919612cf/p1988891.jpg?f=650x650&format=auto',
      description: '5100$.',
      size: 'bong',
    },
    {
      id: 16,
      name: 'Ao xau vl 15',
      image: 'https://product.hstatic.net/1000288768/product/b62ef8cf2145dd1b8454_8bd7ca39e6834d3caf900583ffecf70a_master.jpg',
      description: '5100$.',
      size: 'bong',
    },
    {
      id: 17,
      name: 'Ao xau vl 15',
      image: 'https://www.sport9.vn/images/thumbs/001/0015162_qua-bong-da-kamito-sakiro-s19102-size-5.jpeg?preset=large&watermark=default',
      description: '5100$.',
      size: 'bong',
    },
    {
      id: 18,
      name: 'Ao xau vl 15',
      image: 'https://thegioithethao.vn/images/products/2021/12/09/resized/qua-bong-da-vbe-paris-red_1639038739.jpg',
      description: '5100$.',
      size: 'bong',
    },
    {
      id: 19,
      name: 'Ao xau vl 15',
      image: 'https://cdn.yousport.vn/Media/Products/031022095718869/gang-tay-thu-mon-bat-bong-sieu-dinh-co-xuong-iwin-keepa-pro-yousport-den-1.jpg',
      description: '5100$.',
      size: 'gang',
    },
     {
      id: 20,
      name: 'Ao xau vl 15',
      image: 'https://salt.tikicdn.com/cache/280x280/ts/product/7e/57/42/eb7f843f2577c96f2ac755dc021b4857.jpg',
      description: '5100$.',
      size: 'gang',
    },
    {
      id: 21,
      name: 'Ao xau vl 15',
      image: 'https://www.thethaodaiviet.vn/upload/phu-kien/ava-gang-tay-thu-mon-zocker-dino.png?v=1.0.0',
      description: '5100$.',
      size: 'gang',
    },
    {
      id: 22,
      name: 'Ao xau vl 15',
      image: 'https://product.hstatic.net/1000061481/product/b9ee342e64d042d4befe657fab772c0b_babed6dc1cf4436a98427c8be2aaf98d_grande.jpg',
      description: '5100$.',
      size: 'gang',
    },
    {
      id: 23,
      name: 'Ao xau vl 15',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQT9AAuFXsXIs9LF_0ZUnduhPtjC3GbSTbQA&usqp=CAU',
      description: '5100$.',
      size: 'gang',
    },
    {
      id: 24,
      name: 'Ao xau vl 15',
      image: 'https://bizweb.dktcdn.net/100/017/070/products/pvn1480-82-gang-tay-kaiwin-spider-vang-3-1671511736.jpg?v=1671519455273',
      description: '5100$.',
      size: 'gang',
    },
    {
      id: 25,
      name: 'Ao xau vl 15',
      image: 'https://thethaotruonggiang.vn/wp-content/uploads/2019/06/bao-ve-ong-dong-co-chan-2.jpg',
      description: '5100$.',
      size: 'phukien',
    },
    {
      id: 26,
      name: 'Ao xau vl 15',
      image: 'https://chogym.vn/wp-content/uploads/2023/07/dai-quan-goi-co-day-chang-co-dinh-1-600x600.jpg',
      description: '5100$.',
      size: 'phukien',
    },
    {
      id: 27,
      name: 'Ao xau vl 15',
      image: 'https://cf.shopee.vn/file/7b55bc9d05a7c0ca678e5b62a9b60377',
      description: '5100$.',
      size: 'phukien',
    },
    {
      id: 28,
      name: 'Ao xau vl 15',
      image: 'https://iweb.tatthanh.com.vn/pic/12/thumb/medium/product/raze%20do.jpg',
      description: '5100$.',
      size: 'phukien',
    },
    {
      id: 29,
      name: 'Ao xau vl 15',
      image: 'https://iweb.tatthanh.com.vn/pic/12/product/images/bang-doi-truong(1).jpg',
      description: '5100$.',
      size: 'phukien',
    }, 
    {
      id: 30,
      name: 'Ao xau vl 15',
      image: 'https://thethaominhphu.com/wp-content/uploads/2018/11/nam-chien-thuat-1-360x360.jpg',
      description: '5100$.',
      size: 'phukien',
    },
    
  ],
};

const productReducer = (state, action) => {
  switch (action.type) {
    default:
      return state;
  }
};
export const ProductProvider = ({ children }) => {
  const [state, dispatch] = useReducer(productReducer, initialState);
  return (
    <ProductContext.Provider value={{ state, dispatch }}>
      {children}
    </ProductContext.Provider>
  );
};
export const useProductContext = () => {
  return useContext(ProductContext);
};
