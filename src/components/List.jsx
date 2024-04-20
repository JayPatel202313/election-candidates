import React from 'react'
import Card from './Card'

const List = () => {
  const candidateNames = [
    "William Cotter", "Patrick Denman", "George Devolder-Santos", "Ryan Kalata",
    "John Avlon", "Saint Jermaine Endeley", "Nancy Goroff", "Nicholas J. LaLota",
    "Rob Lubin", "Andrew Garbarino", "Daniel Goldman", "Yvette D. Clarke",
    "Nicole Malliotakis", "Alexandria Ocasio-Cortez", "Jerrold Nadler",
    "Tom Suozzi", "Grace Meng", "Hakeem Jeffries", "Ritchie Torres",
    "Jamaal Bowman", "Mondaire Jones", "Lee Zeldin", "Kathleen Rice",
    "Paul Tonko", "Elise Stefanik", "Mike Lawler", "Antonio Delgado",
    "Sean Patrick Maloney", "Chris Jacobs", "Joe Morelle"
  ];

  return (
    <div>
      <section>
        <div className="container">
          <h1> People</h1>
          <div className="cards">
            {
              candidateNames.map((item) => {
                return (
                  <div>
                    <Card name={item} />

                  </div>
                )
              })
            }
          </div>
        </div>
      </section>
    </div>
  )
}

export default List