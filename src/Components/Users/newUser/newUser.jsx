import React from 'react'
import classes from './newUser.module.css'
import { NavLink } from 'react-router-dom';
import { Field, reduxForm } from 'redux-form';




export class NewUsers extends React.Component {
    
    
    componentDidMount() {
        this.getData();
    }
    getData() {
        this.props.setPosition();
        this.props.setMilitaryRank();
        this.props.setAcademicDegree();
        this.props.setAcademicTittes();
    }
    submit = values => {
         console.log(values)
         
         this.props.createUser(values)
    }
    render() {      
        debugger
        console.log(this.props);
        return (
            <div>
                <div >
                    <NewUserReduxFormR onSubmit={this.submit}
                     optionsMilitaryRank={this.props.militaryRank}
                     optionsPositions={this.props.position}
                     optionsAcademicTitle={this.props.academicTitle}
                     optionsAcademicDegree={this.props.academicDegree}
                     />
                </div>
            </div>);
    }
}

const NewUserReduxForm = (props) => {
    debugger;
    let militaryRankOptions = props.optionsMilitaryRank.map(u => {
        return(
            <option value={u.name}>{u.name}</option>
        )
    });
    let positionOptions = props.optionsPositions.map(u => {
        return(
            <option value={u.name}>{u.name}</option>
        )
    });
    let academicTitleOptions = props.optionsAcademicTitle.map(u => {
        return(
            <option value={u.name}>{u.name}</option>
        )
    });
    let academicDegreeOptions = props.optionsAcademicDegree.map(u => {
        return(
            <option value={u.name}>{u.name}</option>
        )
    });
    return (
        <form onSubmit={props.handleSubmit}>
            <div >
                <div >
                    <label>Фимилия  </label>
                    <Field placeholder={"Enter number of lastname"} name={"lastName"} component={'input'} />
                </div>
                <div >
                    <label>Имя  </label>
                    <Field placeholder={"Enter number of name"} name={"Name"} component={'input'} />
                </div>
                <div >
                    <label>Отчество  </label>
                    <Field placeholder={"Enter number of middleName"} name={"middleName"} component={'input'} />
                </div>
                <div>
                    <label>Дата рождения  </label>
                    <Field component={'input'} type="date" data-date="" data-date-format="DD MMMM YYYY" name={"birthDay"} />
                </div>
                <div>
                    <label htmlFor="isMarried">Холост/Замужем</label>
                    <div>
                        <Field name="isMarried" id="isMarried" component="input" type="checkbox" />
                    </div>
                </div>

                <div >
                    <label>Серия и номер пасспорта  </label>
                    <Field placeholder={"Enter number of middleName"} name={"serialAndNumderCivilyDocs"} component={'input'} />
                </div>
                <div >
                    <label>Кем выдан</label>
                    <Field placeholder={"Enter number of middleName"} name={"whoGetPassport"} component={'input'} />
                </div>
                <div>
                    <label>Даты выдачи </label>
                    <Field component={'input'} type="date" data-date="" data-date-format="DD MMMM YYYY" name={"dateOfIssue"} />
                </div>
                <div>
                    <label>До какого действует</label>
                    <Field component={'input'} type="date" data-date="" data-date-format="DD MMMM YYYY" name={"dateOfExpiry"} />
                </div>
            


                <div>
                    <label>Дата начало службы  </label>
                    <Field component={'input'} type="date" data-date="" data-date-format="DD MMMM YYYY" name={"dateOfStartService"} />
                </div>
                <div >
                    <label>Каким военкоматом призван</label>
                    <Field name={"nameOFVoinkom"} component={'input'} />
                </div>
                <div >
                    <label>Серия и номер служебного удостоверения  </label>
                    <Field  name={"serialAndNumderMilitaryDocs"} component={'input'} />
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
                    <label>До какого действует форма</label>
                    <Field component={'input'} type="date" data-date="" data-date-format="DD MMMM YYYY" name={"dateFormSec"} />
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
                <div>
                    <label>О себе</label>
                    <div>
                        <Field name="info" component="textarea" />
                    </div>
                </div>
            
               
               
                
            </div>
            <button className={classes.button}>Create</button>
        </form>
    );
}

const NewUserReduxFormR = reduxForm({
    form: 'newUser'
})(NewUserReduxForm)

