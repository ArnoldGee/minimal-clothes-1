import React from 'react';

import CartIcon from '../cart-icon/cart-icon.component'
import CartDropdown from '../cart-dropdown/cart-dropdown.component'

import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect'
import {selectCurrentUser} from '../../redux/user/user.selectors'
import {selectCartHidden} from '../../redux/cart/cart.selectors'

import {ReactComponent as Logo} from '../../assets/logo.svg'
import {auth} from '../../firebase/firebase.utils'

import './header.styles.scss';

const Header = ({currentUser, hidden}) => (
  <div className="header">
    <Link className="logo-container" to="/">
      <Logo className="logo"/>
      <h1 className="title">Maximal Style <span className="subtitle">minimalist clothes retail</span></h1>
    </Link>
    
    <div className="options">
      <Link className="option" to="/shop">
        SHOP
      </Link>
      {/*<Link className="option" to="/contact">
        CONTACT
      </Link>*/}
      { 
        currentUser ? 
        <div className="option" onClick={() => auth.signOut()}>SIGN OUT</div>
        :<Link className="option" to="/signin">SIGN IN</Link>
      }
      { currentUser ?
        <div className='option'>{currentUser.displayName}</div>
        :null
      }
      <CartIcon/>
    </div>
    {!hidden?<CartDropdown/>:null}
  </div>
)

// createStructuredSelector passes state to each and every of these selector functions, i.e. selectCurrentUser and selectCartHidden.
const mapStateToProps = createStructuredSelector({ 
  currentUser: selectCurrentUser,
  hidden: selectCartHidden,
});

export default connect(mapStateToProps)(Header);