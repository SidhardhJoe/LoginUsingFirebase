import { useEffect, useState } from 'react'
import { onAuthStateChanged } from 'firebase/auth'
import { auth } from '../config/Firebase'

export default function useAuth() {
    const [user, setUser] = useState(null)
    useEffect(() => {
        const unsub = onAuthStateChanged(auth, user => {
            if (user) {
                setUser(user);
            } else {
            console.log('got user: ', user)

                setUser(null)
            }
        })
    })
    return { user }
}
