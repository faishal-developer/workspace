// Wishlist.js

import React, { useState } from 'react';
import './wishList.scss';
import WishList from '../../Components/wishList/wishList.view';

const WishlistPage = () => {
  

  return (
    <div className="wishlist">
      <h1>My Wishlist</h1>
      <WishList/>
    </div>
  );
};

export default WishlistPage;
