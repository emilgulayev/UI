import React,{useState} from 'react'
import { useSelector, useDispatch } from 'react-redux'
import CommonHeader from '../CommonHeader/CommonHeader'
import CommonTitle from '../CommonTitle/CommonTitle'
import CommonSearch from '../CommonSearch/CommonSearch'
import LabelsContainer from '../LabelsContainer/LabelsContainer'
import AddLabelBtn from '../AddLabelBtn/AddLabelBtn'
import LabelItem from '../LabelItem/LabelItem'
import LabelDummyItem from '../LabelDummyItem/LabelDummyItem'
// import actions from '../../Actions'



const Labels = (props) => {
    let dispatch = useDispatch();
    // const overAllState=useSelector(state=>state);
    // console.log("redux state:",overAllState);
    const [labels,setLabels]=useState({});
    const labelsIsVisible = useSelector(state => state.Toggles.labelsVisible);
    const labelsContainer = useSelector(state => state.Labels.container);
    const currentSelector = useSelector(state => state.Tools.currentSelector);
    const currentImage = useSelector(state => state.Tools[currentSelector].currentImage);
    const searchQuery = useSelector(state => state.Labels.searchQuery);
    const loadedLabels = useSelector(state => state.Tools[currentSelector].labels);
    let selectorLabels=[];
    if (loadedLabels.length > 0) {
        fetch(loadedLabels[0].preview)
            .then(res => res.json())
            .then(
                result => { setLabels(Object.assign({},labels,result)); console.log("selectorLabels:", labels) }
            );
    }
    // console.log("")
    // console.log("labelsContainer",labelsContainer);
    const labelsToDisplay = [

    ];
    

    if (currentImage!='' && selectorLabels.length>0 && selectorLabels[currentImage]) {
        selectorLabels[currentImage].forEach(label => {
            console.log("label:",label)
            if (label.indexOf(searchQuery) >= 0) {
                labelsToDisplay.unshift(
                    <LabelItem key={label} serial={label} text={label}
                        bgColor={label.bgColor} ></LabelItem>
                )
            }

        });
        // labelsContainer.forEach(label => {
        //     if(label.text.indexOf(searchQuery)>=0){
        //         labelsToDisplay.unshift(
        //             <LabelItem key={label.key} serial={label.key} text={label.text}
        //                             bgColor={label.bgColor} ></LabelItem>
        //         )
        //     }

        // });
    }


    labelsToDisplay.unshift(
        <LabelDummyItem key="-1"></LabelDummyItem>
    );

    return (
        <div className={labelsIsVisible ? 'main-labels' : 'main-labels hide'}>
            <CommonHeader></CommonHeader>
            <CommonTitle text="Labels"></CommonTitle>
            <CommonSearch></CommonSearch>
            <LabelsContainer></LabelsContainer>
            <AddLabelBtn></AddLabelBtn>
            <LabelsContainer>
                {labelsToDisplay}
            </LabelsContainer>
        </div>
    )



    // <div className="main-labels">



}

export default Labels;
