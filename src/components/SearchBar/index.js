import React, { Component } from 'react'
import { StyleSheet, css } from 'aphrodite'
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
    borderBottom: 'solid 1px rgba(0,0,0,0.1)'
  },
  input: {
    height: 36,
    padding: '0 24',
    paddingLeft: 40
  },
  iconWrapper: {
    position: 'absolute',
    left: 8,
    top: 8,
    zIndex: 2
  }
})

export default SearchBar
