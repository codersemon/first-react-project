import "./PageTitle.scss";

const PageTitle = ({title}) => {
  return (
    <section className="page-title">
        <div className="container">
            <h3>{title}</h3>
        </div>
    </section>
  )
}

export default PageTitle