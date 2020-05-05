'use strict';


customElements.define('compodoc-menu', class extends HTMLElement {
    constructor() {
        super();
        this.isNormalMode = this.getAttribute('mode') === 'normal';
    }

    connectedCallback() {
        this.render(this.isNormalMode);
    }

    render(isNormalMode) {
        let tp = lithtml.html(`
        <nav>
            <ul class="list">
                <li class="title">
                    <a href="index.html" data-type="index-link">ever-val-angular documentation</a>
                </li>

                <li class="divider"></li>
                ${ isNormalMode ? `<div id="book-search-input" role="search"><input type="text" placeholder="Type to search"></div>` : '' }
                <li class="chapter">
                    <a data-type="chapter-link" href="index.html"><span class="icon ion-ios-home"></span>Getting started</a>
                    <ul class="links">
                        <li class="link">
                            <a href="overview.html" data-type="chapter-link">
                                <span class="icon ion-ios-keypad"></span>Overview
                            </a>
                        </li>
                        <li class="link">
                            <a href="index.html" data-type="chapter-link">
                                <span class="icon ion-ios-paper"></span>README
                            </a>
                        </li>
                                <li class="link">
                                    <a href="dependencies.html" data-type="chapter-link">
                                        <span class="icon ion-ios-list"></span>Dependencies
                                    </a>
                                </li>
                    </ul>
                </li>
                    <li class="chapter modules">
                        <a data-type="chapter-link" href="modules.html">
                            <div class="menu-toggler linked" data-toggle="collapse" ${ isNormalMode ?
                                'data-target="#modules-links"' : 'data-target="#xs-modules-links"' }>
                                <span class="icon ion-ios-archive"></span>
                                <span class="link-name">Modules</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                        </a>
                        <ul class="links collapse " ${ isNormalMode ? 'id="modules-links"' : 'id="xs-modules-links"' }>
                            <li class="link">
                                <a href="modules/AppModule.html" data-type="entity-link">AppModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-AppModule-0dce0f5973c8cc21f023d530eea1d5bc"' : 'data-target="#xs-components-links-module-AppModule-0dce0f5973c8cc21f023d530eea1d5bc"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-AppModule-0dce0f5973c8cc21f023d530eea1d5bc"' :
                                            'id="xs-components-links-module-AppModule-0dce0f5973c8cc21f023d530eea1d5bc"' }>
                                            <li class="link">
                                                <a href="components/AppComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">AppComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ContainerComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">ContainerComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/HeaderComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">HeaderComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/NotifComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">NotifComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/PageNotFoundComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">PageNotFoundComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/SideMenuComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">SideMenuComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/SideMenuElementComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">SideMenuElementComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/AppRoutingModule.html" data-type="entity-link">AppRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/CandidatesModule.html" data-type="entity-link">CandidatesModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-CandidatesModule-64b505f67bf209882137d55b4248bd1b"' : 'data-target="#xs-components-links-module-CandidatesModule-64b505f67bf209882137d55b4248bd1b"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-CandidatesModule-64b505f67bf209882137d55b4248bd1b"' :
                                            'id="xs-components-links-module-CandidatesModule-64b505f67bf209882137d55b4248bd1b"' }>
                                            <li class="link">
                                                <a href="components/AddCandidateComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">AddCandidateComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/CandidatesComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">CandidatesComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/EditCandidateComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">EditCandidateComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/NumberQuestionQuizComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">NumberQuestionQuizComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-CandidatesModule-64b505f67bf209882137d55b4248bd1b"' : 'data-target="#xs-injectables-links-module-CandidatesModule-64b505f67bf209882137d55b4248bd1b"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-CandidatesModule-64b505f67bf209882137d55b4248bd1b"' :
                                        'id="xs-injectables-links-module-CandidatesModule-64b505f67bf209882137d55b4248bd1b"' }>
                                        <li class="link">
                                            <a href="injectables/CandidateServiceService.html"
                                                data-type="entity-link" data-context="sub-entity" data-context-id="modules" }>CandidateServiceService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/CandidatesRoutingModule.html" data-type="entity-link">CandidatesRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/EmailModule.html" data-type="entity-link">EmailModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-EmailModule-61fcbbec7d3714de834e79a08bc7d941"' : 'data-target="#xs-components-links-module-EmailModule-61fcbbec7d3714de834e79a08bc7d941"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-EmailModule-61fcbbec7d3714de834e79a08bc7d941"' :
                                            'id="xs-components-links-module-EmailModule-61fcbbec7d3714de834e79a08bc7d941"' }>
                                            <li class="link">
                                                <a href="components/AddEmailComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">AddEmailComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/EditEmailComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">EditEmailComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/EmailComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">EmailComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/EmailRoutingModule.html" data-type="entity-link">EmailRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/HomeModule.html" data-type="entity-link">HomeModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-HomeModule-84083f845889d113de9bcb1e94b6c17d"' : 'data-target="#xs-components-links-module-HomeModule-84083f845889d113de9bcb1e94b6c17d"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-HomeModule-84083f845889d113de9bcb1e94b6c17d"' :
                                            'id="xs-components-links-module-HomeModule-84083f845889d113de9bcb1e94b6c17d"' }>
                                            <li class="link">
                                                <a href="components/HomeComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">HomeComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/HomeRoutingModule.html" data-type="entity-link">HomeRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/LoginModule.html" data-type="entity-link">LoginModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-LoginModule-15eb509e6927dd504c60a4198f57af1f"' : 'data-target="#xs-components-links-module-LoginModule-15eb509e6927dd504c60a4198f57af1f"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-LoginModule-15eb509e6927dd504c60a4198f57af1f"' :
                                            'id="xs-components-links-module-LoginModule-15eb509e6927dd504c60a4198f57af1f"' }>
                                            <li class="link">
                                                <a href="components/LoginComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">LoginComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/LoginRoutingModule.html" data-type="entity-link">LoginRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/QuestionsModule.html" data-type="entity-link">QuestionsModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-QuestionsModule-8643cac37d0f2136d5baa24f44106a9c"' : 'data-target="#xs-components-links-module-QuestionsModule-8643cac37d0f2136d5baa24f44106a9c"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-QuestionsModule-8643cac37d0f2136d5baa24f44106a9c"' :
                                            'id="xs-components-links-module-QuestionsModule-8643cac37d0f2136d5baa24f44106a9c"' }>
                                            <li class="link">
                                                <a href="components/AddQuestionComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">AddQuestionComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/DeleteQuestionComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">DeleteQuestionComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/EditQuestionComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">EditQuestionComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/QuestionsComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">QuestionsComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-QuestionsModule-8643cac37d0f2136d5baa24f44106a9c"' : 'data-target="#xs-injectables-links-module-QuestionsModule-8643cac37d0f2136d5baa24f44106a9c"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-QuestionsModule-8643cac37d0f2136d5baa24f44106a9c"' :
                                        'id="xs-injectables-links-module-QuestionsModule-8643cac37d0f2136d5baa24f44106a9c"' }>
                                        <li class="link">
                                            <a href="injectables/QuestionService.html"
                                                data-type="entity-link" data-context="sub-entity" data-context-id="modules" }>QuestionService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/QuestionsRoutingModule.html" data-type="entity-link">QuestionsRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/QuizzesModule.html" data-type="entity-link">QuizzesModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-QuizzesModule-333611ad17e51ad84e13e2fa41c232aa"' : 'data-target="#xs-components-links-module-QuizzesModule-333611ad17e51ad84e13e2fa41c232aa"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-QuizzesModule-333611ad17e51ad84e13e2fa41c232aa"' :
                                            'id="xs-components-links-module-QuizzesModule-333611ad17e51ad84e13e2fa41c232aa"' }>
                                            <li class="link">
                                                <a href="components/CandidateQuizComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">CandidateQuizComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/EvalQuizComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">EvalQuizComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/PassQuizComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">PassQuizComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/QuizzesComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">QuizzesComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-QuizzesModule-333611ad17e51ad84e13e2fa41c232aa"' : 'data-target="#xs-injectables-links-module-QuizzesModule-333611ad17e51ad84e13e2fa41c232aa"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-QuizzesModule-333611ad17e51ad84e13e2fa41c232aa"' :
                                        'id="xs-injectables-links-module-QuizzesModule-333611ad17e51ad84e13e2fa41c232aa"' }>
                                        <li class="link">
                                            <a href="injectables/QuizService.html"
                                                data-type="entity-link" data-context="sub-entity" data-context-id="modules" }>QuizService</a>
                                        </li>
                                    </ul>
                                </li>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#pipes-links-module-QuizzesModule-333611ad17e51ad84e13e2fa41c232aa"' : 'data-target="#xs-pipes-links-module-QuizzesModule-333611ad17e51ad84e13e2fa41c232aa"' }>
                                            <span class="icon ion-md-add"></span>
                                            <span>Pipes</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="pipes-links-module-QuizzesModule-333611ad17e51ad84e13e2fa41c232aa"' :
                                            'id="xs-pipes-links-module-QuizzesModule-333611ad17e51ad84e13e2fa41c232aa"' }>
                                            <li class="link">
                                                <a href="pipes/FormatTimePipe.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">FormatTimePipe</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/QuizzesRoutingModule.html" data-type="entity-link">QuizzesRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/ResultsModule.html" data-type="entity-link">ResultsModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-ResultsModule-70d940a791b161bf78357cbce8ebec98"' : 'data-target="#xs-components-links-module-ResultsModule-70d940a791b161bf78357cbce8ebec98"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-ResultsModule-70d940a791b161bf78357cbce8ebec98"' :
                                            'id="xs-components-links-module-ResultsModule-70d940a791b161bf78357cbce8ebec98"' }>
                                            <li class="link">
                                                <a href="components/ResultSendmailComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">ResultSendmailComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ResultsComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">ResultsComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/ResultsRoutingModule.html" data-type="entity-link">ResultsRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/StaffModule.html" data-type="entity-link">StaffModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-StaffModule-1d1c925d40e33b9e7e88e51201dfecab"' : 'data-target="#xs-components-links-module-StaffModule-1d1c925d40e33b9e7e88e51201dfecab"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-StaffModule-1d1c925d40e33b9e7e88e51201dfecab"' :
                                            'id="xs-components-links-module-StaffModule-1d1c925d40e33b9e7e88e51201dfecab"' }>
                                            <li class="link">
                                                <a href="components/AddStaffComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">AddStaffComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/DeleteStaffComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">DeleteStaffComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/EditStaffComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">EditStaffComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/StaffComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">StaffComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-StaffModule-1d1c925d40e33b9e7e88e51201dfecab"' : 'data-target="#xs-injectables-links-module-StaffModule-1d1c925d40e33b9e7e88e51201dfecab"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-StaffModule-1d1c925d40e33b9e7e88e51201dfecab"' :
                                        'id="xs-injectables-links-module-StaffModule-1d1c925d40e33b9e7e88e51201dfecab"' }>
                                        <li class="link">
                                            <a href="injectables/StaffService.html"
                                                data-type="entity-link" data-context="sub-entity" data-context-id="modules" }>StaffService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/StaffRoutingModule.html" data-type="entity-link">StaffRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/TestModule.html" data-type="entity-link">TestModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-TestModule-72a6503bc6589eca9b90c191fe7cc733"' : 'data-target="#xs-components-links-module-TestModule-72a6503bc6589eca9b90c191fe7cc733"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-TestModule-72a6503bc6589eca9b90c191fe7cc733"' :
                                            'id="xs-components-links-module-TestModule-72a6503bc6589eca9b90c191fe7cc733"' }>
                                            <li class="link">
                                                <a href="components/TestComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">TestComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/TestRoutingModule.html" data-type="entity-link">TestRoutingModule</a>
                            </li>
                </ul>
                </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#classes-links"' :
                            'data-target="#xs-classes-links"' }>
                            <span class="icon ion-ios-paper"></span>
                            <span>Classes</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="classes-links"' : 'id="xs-classes-links"' }>
                            <li class="link">
                                <a href="classes/Answer.html" data-type="entity-link">Answer</a>
                            </li>
                            <li class="link">
                                <a href="classes/Candidate.html" data-type="entity-link">Candidate</a>
                            </li>
                            <li class="link">
                                <a href="classes/Email.html" data-type="entity-link">Email</a>
                            </li>
                            <li class="link">
                                <a href="classes/Email-1.html" data-type="entity-link">Email</a>
                            </li>
                            <li class="link">
                                <a href="classes/Notification.html" data-type="entity-link">Notification</a>
                            </li>
                            <li class="link">
                                <a href="classes/ProposedResponse.html" data-type="entity-link">ProposedResponse</a>
                            </li>
                            <li class="link">
                                <a href="classes/Question.html" data-type="entity-link">Question</a>
                            </li>
                            <li class="link">
                                <a href="classes/Quiz.html" data-type="entity-link">Quiz</a>
                            </li>
                            <li class="link">
                                <a href="classes/QuizQuestion.html" data-type="entity-link">QuizQuestion</a>
                            </li>
                            <li class="link">
                                <a href="classes/Result.html" data-type="entity-link">Result</a>
                            </li>
                            <li class="link">
                                <a href="classes/SideMenu.html" data-type="entity-link">SideMenu</a>
                            </li>
                            <li class="link">
                                <a href="classes/Staff.html" data-type="entity-link">Staff</a>
                            </li>
                        </ul>
                    </li>
                        <li class="chapter">
                            <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#injectables-links"' :
                                'data-target="#xs-injectables-links"' }>
                                <span class="icon ion-md-arrow-round-down"></span>
                                <span>Injectables</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                            <ul class="links collapse " ${ isNormalMode ? 'id="injectables-links"' : 'id="xs-injectables-links"' }>
                                <li class="link">
                                    <a href="injectables/CandidateServiceService.html" data-type="entity-link">CandidateServiceService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/EmailService.html" data-type="entity-link">EmailService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/HomeService.html" data-type="entity-link">HomeService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/InMemoryDataBase.html" data-type="entity-link">InMemoryDataBase</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/LoginService.html" data-type="entity-link">LoginService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/NotificationService.html" data-type="entity-link">NotificationService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/QuestionService.html" data-type="entity-link">QuestionService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/QuizService.html" data-type="entity-link">QuizService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/ResultsService.html" data-type="entity-link">ResultsService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/SideMenuService.html" data-type="entity-link">SideMenuService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/StaffService.html" data-type="entity-link">StaffService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/TestService.html" data-type="entity-link">TestService</a>
                                </li>
                            </ul>
                        </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#guards-links"' :
                            'data-target="#xs-guards-links"' }>
                            <span class="icon ion-ios-lock"></span>
                            <span>Guards</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="guards-links"' : 'id="xs-guards-links"' }>
                            <li class="link">
                                <a href="guards/AdminGuard.html" data-type="entity-link">AdminGuard</a>
                            </li>
                            <li class="link">
                                <a href="guards/EvalGuard.html" data-type="entity-link">EvalGuard</a>
                            </li>
                            <li class="link">
                                <a href="guards/HrGuard.html" data-type="entity-link">HrGuard</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#miscellaneous-links"'
                            : 'data-target="#xs-miscellaneous-links"' }>
                            <span class="icon ion-ios-cube"></span>
                            <span>Miscellaneous</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="miscellaneous-links"' : 'id="xs-miscellaneous-links"' }>
                            <li class="link">
                                <a href="miscellaneous/enumerations.html" data-type="entity-link">Enums</a>
                            </li>
                            <li class="link">
                                <a href="miscellaneous/variables.html" data-type="entity-link">Variables</a>
                            </li>
                        </ul>
                    </li>
                        <li class="chapter">
                            <a data-type="chapter-link" href="routes.html"><span class="icon ion-ios-git-branch"></span>Routes</a>
                        </li>
                    <li class="chapter">
                        <a data-type="chapter-link" href="coverage.html"><span class="icon ion-ios-stats"></span>Documentation coverage</a>
                    </li>
                    <li class="divider"></li>
                    <li class="copyright">
                        Documentation generated using <a href="https://compodoc.app/" target="_blank">
                            <img data-src="images/compodoc-vectorise.png" class="img-responsive" data-type="compodoc-logo">
                        </a>
                    </li>
            </ul>
        </nav>
        `);
        this.innerHTML = tp.strings;
    }
});