import './List.css'

function List(props) {

    return (
        props.data.map(e => {
           return (
            <div>
                <section>
                    <div>
                        <h3>{e}</h3>
                        <button onClick={props.Remove} value={e}>Remove</button>
                    </div>
                </section>
            </div>
           )
        })
    )
}

export default List;