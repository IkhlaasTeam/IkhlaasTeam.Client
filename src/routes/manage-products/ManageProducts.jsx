import "./ManageProducts.scss";

const ManageProducts = () => {
  return (
    <div className="ManageProducts">
      <div className="title">
        <h1>Manage Products</h1>
      </div>
      <form>
        <input type="text" placeholder="Write product..." required="required"/>
        <button>Add Products</button>
      </form>
      <ul>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
      </ul>
    </div>
  );
};

export default ManageProducts;
