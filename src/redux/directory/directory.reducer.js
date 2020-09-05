const INITIAL_STATE = {
  sections: [
    {
      title: 'New Collection',
      imageUrl: 'https://sendeyo.com/up/d/44d9190f84',
      size: 'banner',
      id: 0,
      linkUrl: 'shop/',
    },
    {
      title: 'hats',
      imageUrl: 'https://sendeyo.com/up/d/8d7def3996',
      id: 1,
      linkUrl: 'shop/hats',
    },
    {
      title: 'jackets',
      imageUrl: 'https://sendeyo.com/up/d/61ea30fe0f',
      id: 2,
      linkUrl: 'shop/jackets',
    },
    {
      title: 'sneakers',
      imageUrl: 'https://sendeyo.com/up/d/2a3b9ef353',
      id: 3,
      linkUrl: 'shop/sneakers',
    },
    {
      title: 'womens',
      imageUrl: 'https://sendeyo.com/up/d/a9c9af1c12',
      size: 'large',
      id: 4,
      linkUrl: 'shop/womens',
    },
    {
      title: 'mens',
      imageUrl: 'https://sendeyo.com/up/d/685dbdb58c',
      size: 'large',
      id: 5,
      linkUrl: 'shop/mens',
    },
  ],
};

const directoryReducer = (state=INITIAL_STATE, action) => {
  switch(action.type){
    default:
      return state;
  }
}
export default directoryReducer