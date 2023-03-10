

import './Create.css'
function Create() {
  return (
    <div className="create">
      <h2 className="page-title">Add a New Project</h2>
      <form 
    //   onSubmit={handleSubmit}
      >
        <label>
          <span>Project title:</span>
          <input
            type="text"
            // onChange={(e) => setTitle(e.target.value)}
            // value={title}
            // required
          />
        </label>

        <label>
          <span>Project tag:</span>
          <div className="ingredients">
            <input
              type="text"
            //   onChange={(e) => setNewIngredient(e.target.value)}
            //   value={newIngredient}
            //   ref={ingredientInput}
            />
            <button 
            // onClick={handleAdd}
             className="btn">
              add
            </button>
          </div>
        </label>
        <p>
          Current ingredients:{" "}
          {/* {
            ingredients.map((i) => (
            <em key={i}>{i}, </em>
          ))} */}
        </p>

        <label>
          <span>Project description:</span>
          <textarea
            // onChange={(e) => setMethod(e.target.value)}
            // value={method}
            // required
          />
        </label>

        {/* <label>
          <span>Cooking time (minutes):</span>
          <input
            type="number"
            onChange={(e) => setCookingTime(e.target.value)}
            value={cookingTime}
            required
          />
        </label> */}

        <button className="btn">submit</button>
      </form>
    </div>
  )
}

export default Create