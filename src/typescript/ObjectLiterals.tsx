interface Person {
  firstName: string
  lastName: string
  age: number
  address: Address
  isAlive?: boolean
}

interface Address {
  country: string
}

export const ObjectLiterals = () => {
  const person: Person = {
    age: 27,
    firstName: "Marco",
    lastName: "De la cruz",
    isAlive: true,
    address: {
      country: "Perú"
    }
  }
  return (
    <>
      <h3>Objectos literales</h3>

      <pre>
        {JSON.stringify(person, null, 2)}
      </pre>
    </>
  )
}
