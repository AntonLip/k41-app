import React from 'react'
import classes from './Users.module.css'
import { NavLink } from 'react-router-dom';
import { Field, reduxForm } from 'redux-form';


const UsersDisplay = (props) => {
    let delUser = () => {
        debugger;
        props.delUser(props.u.id)
    }
    
    return (
        <div>
            <div key={props.u.id}>
                <div className={classes.container}>
                    <div id="card" className={classes.card}>
                        <div className={classes.card__img}></div>
                        <div className={classes.card__descr}>
                            <div className={classes.card__descr_block}>{props.u.militaryRank}</div>
                            <div className={classes.card__descr_block}>{props.u.firstName}</div>
                            <div className={classes.card__descr_block}>{props.u.middleName}</div>
                            <div className={classes.card__descr_block}>{props.u.lastName}</div>
                            <div className={classes.card__descr_block}>{props.u.position}</div>
                            <div className={classes.card__descr_block}>{props.u.birthDay}</div>
                        </div>
                        <button id="btn-more" className={classes.card__more_btn}>подробнее</button>
                        <NavLink to={'/Profile/' + props.u.id}
                            className={classes.card__more_btn} >подробнее</NavLink>
                        <button id="btn-more" className={classes.card__update_btn}>изменить</button>
                        <NavLink to={'/updateUser/' + props.u.id}
                            className={classes.card__update_btn} >изменить</NavLink>
                        <button id="btn-more" className={classes.card__del_btn} onClick={delUser}>удалить</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

const SetFilter = (props) => {
    let militaryRankOptions = props.optionsMilitaryRank.map(u => {
        return (
            <option value={u.name}>{u.name}</option>
        )
    });
    let positionOptions = props.optionsPositions.map(u => {
        return (
            <option value={u.name}>{u.name}</option>
        )
    });
    let academicTitleOptions = props.optionsAcademicTitle.map(u => {
        return (
            <option value={u.name}>{u.name}</option>
        )
    });
    let academicDegreeOptions = props.optionsAcademicDegree.map(u => {
        return (
            <option value={u.name}>{u.name}</option>
        )
    });
    return (
        <form onSubmit={props.handleSubmit}>
            <div >
                <label>Фимилия  </label>
                <Field placeholder={"Enter number of lastname"} name={"lastName"} component={'input'} />
            </div>
            <div >
                <label>Имя  </label>
                <Field placeholder={"Enter number of name"} name={"firstName"} component={'input'} />
            </div>
            <div >
                <label>Отчество  </label>
                <Field placeholder={"Enter number of middleName"} name={"middleName"} component={'input'} />
            </div>

            <div>
                <label>воинское звание</label>
                <div>
                    <Field name="militaryRank" component="select">
                        {militaryRankOptions}
                    </Field>
                </div>
            </div>
            <div>
                <label>должность</label>
                <div>
                    <Field name="position" component="select">
                        {positionOptions}
                    </Field>
                </div>
            </div>
            <div>
                <label>Форма</label>
                <div>
                    <Field name="formSec" component="select">
                        <option value={1}>1</option>
                        <option value={2}>2</option>
                        <option value={3}>3</option>
                    </Field>
                </div>
            </div>
            <div>
                <label>Научная степень</label>
                <div>
                    <Field name="academicDegree" component="select">
                        {academicDegreeOptions}
                    </Field>
                </div>
            </div>
            <div>
                <label>Научное звание</label>
                <div>
                    <Field name="academicTitle" component="select">
                        {academicTitleOptions}
                    </Field>
                </div>
            </div>
            <button className={classes.button}>Show</button>
        </form>);
}

const SetFilterR = reduxForm({
    form: 'Filter'
})(SetFilter)


export class Users extends React.Component {

    componentDidMount() {
        this.props.getUser();
        this.getData();
    }
    componentShouldUpdate(nextProps, nextState){
        debugger
        return this.props.name !== nextProps.name ||
          this.state.count !== nextState.count;
      }
    getData() {
        this.props.setPosition();
        this.props.setMilitaryRank();
        this.props.setAcademicDegree();
        this.props.setAcademicTittes();
    }
    submit = values => {
        debugger
        console.log(values);
        values.FormSec = parseInt(values.FormSec);
        this.props.getFilteredUser(values)
    }
    render() {

        console.log(this.props);
        let AllUsers = this.props.users.map((u) => { return <UsersDisplay u={u} delUser={this.props.deleteUser} /> });
        debugger;
        if (!this.props.isAuth) {
            window.location = "/AccessDenided";
        }
        if (this.props.role === "cadet") {
            return (<div>{AllUsers}</div>)
        }
        return (
            <div className={classes.gridMain}>
                <div className={classes.gridLeftSide}>
                    <NavLink to="/newUser" className={classes.card__more_btn}>Добавить</NavLink>
                    <SetFilterR onSubmit={this.submit}
                        optionsMilitaryRank={this.props.militaryRank}
                        optionsPositions={this.props.position}
                        optionsAcademicTitle={this.props.academicTitle}
                        optionsAcademicDegree={this.props.academicDegree} />
                </div>
                <div>
                    {AllUsers}
                </div>
            </div>);
    }
}
