class Fruit extends React.Component{

  render(){

    const { fruit } = this.props;
    
    return(
      <div>
        <h1>{fruit.name}</h1>
        <p>{fruit.description}</p>
      </div>
    )
  }
}