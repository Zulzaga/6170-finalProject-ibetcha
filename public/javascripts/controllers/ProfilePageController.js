<!-- Profile page -->

<div ng-controller="HomePageController" id="home-container">
    <ng-include src="'partials/navbar.html'"></ng-include>

    <div class="form-group" id="home-search">
        <div class="input-group">
            <input class="form-control" type="text" placeholder="Search by keyword" ng-model="query">
            <div class="input-group-addon"><i class="fa fa-search"></i></div>
        </div>
    </div>

        <!-- Div that contains all the roadmaps -->
        <div class="roadmaps-container">
		    <div class="roadmap-box" ng-repeat="roadmap in roadmaps | filter:query">

                <div class="roadmap-info">
                    <div class="roadmap-name">
                        <div class="roadmap-fav-wrapper">
                            <div class="roadmap-favorited-button" ng-show="!isAlum && loggedIn && roadmap.isFavorite" ng-click="unfavorite(roadmap._id)">
                                <i class="fa fa-star"></i>
                            </div>
                            <div class="roadmap-unfavorited-button" ng-show="!isAlum && loggedIn && !roadmap.isFavorite" ng-click="favorite(roadmap._id)">
                                <i class="fa fa-star-o"></i>
                            </div>
                        </div>
                        <a href="#/roadmaps/{{roadmap._id}}">{{roadmap.name}}</a>
                    </div>
                    <div class="roadmap-author">taken by {{roadmap.author.username}}</div>
                    <div class="roadmap-contact" ng-show="roadmap.author.contact_permission">
                        <a href="mailto:{{roadmap.author.email}}"><button class="form-control btn btn-default">Contact</button></a> 
                    </div>
                    <div class="roadmap-tags" >
                        <div class="roadmap-single-tag" ng-repeat="tag in roadmap.tags" title="Click to search by tag" ng-click="getTagged(tag.content)">{{tag.content}}</div>
                    </div>
                </div>

                <!-- Div containing all the semesters for this roadmap -->
                <div class="roadmap-semesters-wrapper">
                    <div class="roadmap-semesters">
                        <div class="roadmap-single-semester" ng-repeat="semester in roadmap.semesters | orderBy:'index'">

                            <div class="roadmap-semester-info">
                                <div class="roadmap-semester-term">{{semester.term}}</div>
                                <div class="roadmap-semester-year">{{semester.year}}</div>
                            </div>
                            <div class="roadmap-single-course" ng-repeat="course in semester.courses">
                                <div class="roadmap-course-number">{{course.number}}</div>
                                <div class="roadmap-course-name">{{course.name}}</div>
                            </div>
                        </div>
                    </div>
                </div>
		    </div>

		</div>



</div>