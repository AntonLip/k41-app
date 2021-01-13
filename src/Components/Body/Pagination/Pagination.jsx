import { connect } from 'react-redux';
import React from 'react'
import { compose } from 'redux';
import { setCurrentPageThunkCreator, setCurrentPortion } from '../../../Redux/news-reduser';
import { GrLinkNext,  GrLinkPrevious} from "react-icons/gr";

const Pagination = (props) => {

    const MaxPage = Math.ceil(props.totalCount/props.itemsPerPage);
    const MaxPortion = Math.ceil(MaxPage/props.sizePortion);
    
    const [portion, setPortion]=React.useState(props.currentPortion)

    function decPort (){
        setPortion(portion-1);
    }
    function incPort (){
        setPortion(portion+1);
    }

    function setCurrentPage(num){
        props.setPage(num,props.itemsPerPage, props.sort);
        props.setCurrentPortion(portion);
    }

    const allPage =[];

    for(let index= 0; index< MaxPage; index++){
        allPage.push(index)
    }
    return (
        <div class="pagination">
            {portion != 0 ? <GrLinkPrevious class="pagination__prev" onClick={decPort}/> : <div></div>}
            <div class="pagination__page-wrapper">
                {allPage.map((i, index) =>{
                    return index >= portion*props.sizePortion && index < props.sizePortion * (portion+1) 
                    ? <span class={"pagination__page" + " " + (index+1 ==props.currentPage ? "pagination__page--active" : null)} 
                            onClick={()=>setCurrentPage(index+1)}>
                                {index+1}
                    </span>
                    : null
                })}
            </div>
            { portion == MaxPortion-1 ? <div></div> : <GrLinkNext class="pagination__next" onClick={incPort}/>}    
        </div>
    )
}

const mapStateToProps = (state) =>{
    return {    
        currentPage : state.newsReduser.currentPage,
        itemsPerPage: state.newsReduser.itemsPerPage,
        totalCount: state.newsReduser.totalCount,
        currentPortion: state.newsReduser.currentPortion,
        sort: state.newsReduser.sort
      }
}

const mapDispatchToProps = (dispatch) =>{
    return{
        setPage: (page, count, sort) => {
            dispatch(setCurrentPageThunkCreator(page, count, sort));
        },
        setCurrentPortion: (num) => {
            dispatch(setCurrentPortion(num));
        } 
    }    
}

export default compose(
    connect(mapStateToProps,mapDispatchToProps)
)(Pagination)
