import React from 'react'
import {Link} from 'react-router-dom'

import Floor from '../Floor'

const Floor1 = () => {
    return (
        <Floor title="Этаж 1">
            <div id="et1" class="classrooms__etaj">
                <div class="classrooms__kor"></div>
                <Link to="/classrooms/200" id="k200" class="classrooms__kab classrooms__kab--Uch"><span>200</span></Link>
                <Link to="/classrooms/198" id="k198" class="classrooms__kab classrooms__kab--Uch"><span>198</span></Link>
                <div class="classrooms__kor"></div>
                <Link to="/classrooms/194" id="k194" class="classrooms__kab classrooms__kab--Uch"><span>194</span></Link>
                <Link to="/classrooms/192" id="k192" class="classrooms__kab classrooms__kab--Uch"><span>192</span></Link>
                <Link to="/classrooms/193" id="k193" class="classrooms__kab classrooms__kab--Prepod"><span>193</span></Link>
                <div class="classrooms__kor classrooms__kor--Full"></div>
                <div class="classrooms__kor classrooms__kor--Full"></div>
                <Link to="/classrooms/203" id="k203" class="classrooms__kab classrooms__kab--Uch"><span>203</span></Link>
                <Link to="/classrooms/201" id="k201" class="classrooms__kab classrooms__kab--Uch"><span>201</span></Link>
                <Link to="/classrooms/199" id="k199" class="classrooms__kab classrooms__kab--Prepod"><span>199</span></Link>
                <Link to="/classrooms/197" id="k197" class="classrooms__kab classrooms__kab--Uch"><span>197</span></Link>
                <Link to="/classrooms/195" id="k195" class="classrooms__kab classrooms__kab--Uch"><span>195</span></Link>
                <Link to="/classrooms/193" id="k193" class="classrooms__kab classrooms__kab--Uch"><span>193</span></Link>
                <Link to="/classrooms/191" id="k191" class="classrooms__kab classrooms__kab--Uch"><span>191</span></Link>
            </div>
        </Floor>
    )
}

export default Floor1
