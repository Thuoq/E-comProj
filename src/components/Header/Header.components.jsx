import React from 'react';
import './header.styles.scss';
import { connect } from 'react-redux'; /*connect */
import { Link } from 'react-router-dom';
import { ReactComponent as Logo } from '../../assets/crown.svg';
import { auth } from '../../firebase/firebase.utils';
import CartIcon from '../cart-icon/cart-icon.components'
import CartDropdown from '../cart-dropdown/cart-dropdown.components'


const Header = ({ currentUser,hidden}) => {
    //console.log(currentUser);  
    return (
        <div className = 'header'>
				<Link to = '/' className = 'logo-container'>
					<Logo className='logo' />
				</Link>
				<div className ='options'>
					<Link  className = 'option' to = '/shop'>SHOP</Link>
					<Link  className = 'option' to = '/shop'>CONTACT</Link>
					{
						currentUser ? 
						(<div className = 'option' onClick = { ()=> auth.signOut()}>
						SIGN OUT
						</div>)
						:
						(<Link className = 'option' to = '/signIn'>SIGN IN</Link>)
					}
					<CartIcon/>
				</div>
				{
					hidden ? null : <CartDropdown/>
				}
				
			</div>

    )

}
 /* connect state of global redux to props*/
const mapStateToProps = ({user: {currentUser}, cart:{hidden}}) => ({
    currentUser,
    hidden
})
export default connect(mapStateToProps)(Header) /*HOC new*/ ;