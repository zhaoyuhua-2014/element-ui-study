<template>
   <div class="">
       <el-container>
           <el-header>
               Button+Icon
           </el-header>
           <el-main>
               <el-container>
                   <el-aside>
                    <ul>
                        <li>size - （string）</li>
                        <li>type - （string）</li>
                        <li>plain - （boolean）</li>
                        <li>round - （boolean）</li>
                        <li>circle - （boolean）</li>
                        <li>loading - （boolean）</li>
                        <li>disabled - （boolean）</li>
                        <li>icon- （string）</li>
                        <li>autofocus - （boolean）</li>
                        <li>native-type - （string）</li>
                    </ul>
                </el-aside>
                <el-main>
                    <ul>
                        <li>medium / small / mini&& --</li>
                        <li>primary / success / warning / danger / info / text &&-- </li>
                        <li>-- && false</li>
                        <li>-- && false</li>
                        <li>-- && false</li>
                        <li>-- && false</li>
                        <li>-- && false</li>
                        <li>-- && --</li>
                        <li>-- && false</li>
                        <li>button / submit / reset  && button</li>
                    </ul>
                </el-main>
               </el-container>
                <el-button-group>
                    <el-button>default</el-button>
                    <el-button size="medium">default medium</el-button>
                    <el-button size="small">default small</el-button>
                    <el-button size="mini">default mini</el-button>
                </el-button-group>
                <el-row>
                    <el-button type='primary'>primary</el-button>
                    <el-button type="success">success</el-button>
                    <el-button type="warning">warning</el-button>
                    <el-button type="danger">danger</el-button>
                    <el-button type="info">info</el-button>
                    <el-button type="text">text</el-button>
                </el-row>
                <el-row>
                    <el-button >default</el-button>
                    <el-button pain> default pain</el-button>
                    <el-button round>default round</el-button>
                    <el-button circle>default circle</el-button>
                    <el-button loading>default loading</el-button>
                    <el-button disabled>default disabled</el-button>
                </el-row>
                <el-row>
                    <el-button icon='el-icon-info'>info</el-button>
                    <el-button icon='el-icon-error'>error</el-button>
                    <el-button icon='el-icon-success'>success</el-button>
                    <el-button icon='el-icon-warning'>warning</el-button>
                    <el-button icon='el-icon-question'>question</el-button>
                    <el-button icon='el-icon-back'>back</el-button>
                </el-row>
                <el-row>
                    <el-button icon='el-icon-arrow-left'>arrow-left/right/top/bottom</el-button>
                    <el-button icon='el-icon-caret-bottom'>caret-left/right/top/bottom</el-button>
                    <el-button icon='el-icon-d-arrow-let'>d-arrow-let</el-button>
                    <el-button icon='el-icon-minus'>minus</el-button>
                    <el-button icon='el-icon-plus'>plus</el-button>
                    <el-button icon='el-icon-remove'>remove</el-button>
                    <el-button icon='el-icon-circle-plus'>caret-plus</el-button>
                    <el-button icon='el-icon-remove-outline'>remove-outline</el-button>
                    <el-button icon='el-icon-circle-plus-outline'>caret-plus-outline</el-button>
                </el-row>
                <el-row>
                    <el-button icon='el-icon-close'>close</el-button>
                    <el-button icon='el-icon-circle-close'>circle-close</el-button>
                    <el-button icon='el-icon-circle-close-outline'>circle-close-outline</el-button>
                    <el-button icon='el-icon-check'>check</el-button>
                    <el-button icon='el-icon-zoom-out'>zoom-out</el-button>
                    <el-button icon='el-icon-zoom-in'>zoon-in</el-button>
                    <el-button icon='el-icon-d-caret'>d-caret</el-button>
                    <el-button icon='el-icon-sort'>sort</el-button>
                    <el-button icon='el-icon-sort-down'>sort-down</el-button>
                    <el-button icon='el-icon-sort-up'>sort-up</el-button>
                </el-row>
                <el-row>
                    <el-button icon='el-icon-tickets'>tickets</el-button>
                    <el-button icon='el-icon-document'>document</el-button>
                    <el-button icon='el-icon-goods'>goods</el-button>
                    <el-button icon='el-icon-sold-out'>sold-out</el-button>
                    <el-button icon='el-icon-news'>news</el-button>
                    <el-button icon='el-icon-message'>message</el-button>
                    <el-button icon='el-icon-data'>data</el-button>
                    <el-button icon='el-icon-printer'>printer</el-button>
                    <el-button icon='el-icon-time'>time</el-button>
                    <el-button icon='el-icon-bell'>bell</el-button>
                </el-row>
                <el-row>
                    <el-button icon='el-icon-mobile-phone'>mobile-phone</el-button>
                    <el-button icon='el-icon-service'>service</el-button>
                    <el-button icon='el-icon-view'>view</el-button>
                    <el-button icon='el-icon-ment'>ment</el-button>
                    <el-button icon='el-icon-star-on'>star-on</el-button>
                    <el-button icon='el-icon-star-off'>star-off</el-button>
                    <el-button icon='el-icon-more'>more</el-button>
                    
                    <el-button icon='el-icon-location'>location</el-button>
                    <el-button icon='el-icon-phone'>phone</el-button>
                    <el-button icon='el-icon-picture'>picture</el-button>
                    <el-button icon='el-icon-more-outline'>more-outline</el-button>
                </el-row>
                <el-row>
                    <el-button icon='el-icon-search'>search</el-button>
                    <el-button icon='el-icon-edit'>edit/outline</el-button>
                    <el-button icon='el-icon-rank'>rank</el-button>
                    <el-button icon='el-icon-refresh'>refresh</el-button>
                    <el-button icon='el-icon-share'>stare</el-button>
                    <el-button icon='el-icon-setting'>setting</el-button>
                    <el-button icon='el-icon-more'>more</el-button>
                    
                    <el-button icon='el-icon-upload'>upload/uppload2</el-button>
                    <el-button icon='el-icon-download'>download</el-button>
                    <el-button native-type='submit' icon='el-icon-loading'>loading</el-button>
                </el-row>
                <p>circle 表示圆 round 表示半圆  plain 小圆角  loading 加载图标</p>
            </el-main>
                
           
       </el-container>
   </div>
</template>

<script>
export default {
   name: 'Button',
   data() {
       return {}
   },
  components: {}
}
</script>

<style scoped >

aside{
    text-align: left;
}
</style>
