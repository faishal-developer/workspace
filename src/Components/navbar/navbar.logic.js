import React from 'react'
import { useSelector } from 'react-redux'

const useNavbar = () => {
    const user = useSelector(store=>store.userSlice?.user)


    return {user}
}

export default useNavbar