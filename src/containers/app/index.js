import React from 'react'
import Header from '../../components/header/index'
import { Main, UsersList } from './styles'
import InputSearch from '../../components/inputSearch/index'
import { connect } from 'react-redux'
import {
  inputSearchSetValue,
  inputSearchPress,
} from '../../actions/inputSearchAction'
import { setUsers } from '../../actions/usersListAction'
import ItemList from '../../components/itemList/index'
import Preloader from '../../components/preloader/index'
import ErrorContainer from '../../components/error/index'
import { hideError, alertError } from '../../actions/errorAction'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      preloader: 'none',
    }
  }

  getUsersTop = () => {
    const { inputSearch, setUsers, alertError } = this.props
    const value = inputSearch.value
    const location = value.replace(' ', '-')
    this.setState({ preloader: 'inline-block' })
    fetch(
      `https://api.github.com/search/users?q=location:${location}+repos:%3E9+followers:%3E10`
    )
      .then(res => {
        if (res.status === 200) {
          inputSearchSetValue('')
          return res.json()
        }
        throw new Error(res.status)
      })
      .then(usersInfoObj => {
        if (usersInfoObj.items.length) {
          return usersInfoObj.items
        }
        throw new Error('Нет пользователей')
      })
      .then(usersArr => {
        if (usersArr.langth < 10) {
          setUsers(usersArr)
        } else {
          setUsers(usersArr.slice(0, 10))
        }
      })
      .catch(alertError)
      .finally(() => {
        this.setState({
          preloader: 'none',
        })
        inputSearchSetValue('')
      })
  }

  render() {
    const {
      inputSearch,
      inputSearchSetValue,
      inputSearchPress,
      users,
      error,
      alertError,
      hideError,
    } = this.props
    const { preloader } = this.state
    return (
      <>
        <ErrorContainer
          display={error.display}
          handleClickErrorButton={hideError}
        />
        <Header />
        <Main>
          <InputSearch
            value={inputSearch.value}
            setValue={inputSearchSetValue}
            inputSearchPress={inputSearchPress}
            getUsersTop={this.getUsersTop}
          />
          <Preloader style={{ display: preloader }} />
          <UsersList>
            {users.usersArr.map(user => (
              <ItemList alertError={alertError} key={user.id} user={user} />
            ))}
          </UsersList>
        </Main>
      </>
    )
  }
}

const mapStateToProps = store => {
  console.log(store)
  return {
    inputSearch: store.inputSearch,
    users: store.users,
    error: store.error,
  }
}

const mapDispatchToProps = dispatch => ({
  inputSearchSetValue: value => dispatch(inputSearchSetValue(value)),
  inputSearchPress: () => dispatch(inputSearchPress()),
  setUsers: users => dispatch(setUsers(users)),
  alertError: () => dispatch(alertError()),
  hideError: () => dispatch(hideError()),
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App)
