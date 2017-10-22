import React, { Component } from 'react'
import { StyleSheet, css } from 'aphrodite/no-important'
import Input from '../Input'
import SearchIcon from '../icons/Search'

/** Places (geo location) search bar */
class SearchBar extends Component {
  render() {
    const { placeholder } = this.props
    return (
      <form action="" className={css(styles.searchBar)}>
        <i className={css(styles.iconWrapper)}>
          <SearchIcon size={22} />
        </i>
        <Input type="search" name="geoSearch" styles={styles.input} placeholder={placeholder} />
      </form>
    )
  }
}

const styles = StyleSheet.create({
  searchBar: {
    height: 40,
    position: 'relative',
    borderBottom: 'solid 1px rgba(0,0,0,0.1)',
    backgroundColor: '#fff'
  },
  input: {
    height: 40,
    padding: '0 24px',
    paddingLeft: 40
  },
  iconWrapper: {
    position: 'absolute',
    left: 10,
    top: 9,
    zIndex: 2
  }
})

export default SearchBar
