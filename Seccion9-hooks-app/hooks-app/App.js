import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect, useReducer, useMemo, useCallback } from 'react';
import { StyleSheet, Text, View } from 'react-native';

/* const initalSate = {
  cont: 0
}
const reducer = (state, action) => {
  switch (action.type) {
    case 'incrementar': {
      return { cont: state.cont + 1 }
    }
    case 'descrementar': {
      return { cont: state.cont - 1 }
    }
    default: {
      return state
    }
  }
} */

/* const users = [{ name: 'Yosshi', age: 2 }, { name: 'Vlad', age: 6 }] */

export default function App() {

  //const [cont, setCont] = useState(0) //hooks [valorestado,funcionparaactualizarvalor]
  //const [loading, setLoading] = useState(true) //hooks [valorestado,funcionparaactualizarvalor]
  //const [users, setUsers] = useState([])
  /*   useEffect(() => {
      setTimeout(() => {
        setLoading(false)
      }, 1000)
    }, []) */

  /*   const fetchUsers= async () => {
      const response = await fetch('https://jsonplaceholder.typicode.com/users')
      const json = await response.json()
      setUsers(json)
      setLoading(false)
    } 
    useEffect(async () => {fetchUsers()}, []) */
  //const [state, dispatch] = useReducer(reducer, initalSate)

  //useCallBack
  const [cont, setCont] = useState(0)
  const incrementar = useCallback(() => {
    setCont(cont + 1)
  },[cont])
  const descrementar = useCallback(() => {
    setCont(cont - 1)
  })

  //UseMemo
/*   const totalAge = useMemo(() => {
    let age = 0
    console.log('Calculando..');
    users.forEach(x => {
      age = age + x.age
    })
    return age
  }, [users])//definiendo los argumentos han camabiado y siempre van hacer fijos
  console.log('Edad total', totalAge); */
  return (
    <View style={styles.container}>

      {/*       <Text onPress={() => setCont(cont + 1)} style={styles.text}>{cont}!</Text>
      <StatusBar style="auto" />

      <Text onPress={() => setCont(cont + 1)} style={styles.text}>{loading ? 'Cargando..' : cont}!</Text>
 */}
      <Text
        onPress={() => incrementar()}>+</Text>
      <Text
        style={styles.text}>
        {cont}
      </Text>
      <Text onPress={() => descrementar()}>-</Text>
    </View>


  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 30
  }
});
