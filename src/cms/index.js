import cmsSurveysRoutes from '../cms/surveys';
import cmsAnswersRoutes from '../cms/answers';
import cmsArtifactsRoutes from '../cms/artifacts';
import cmsLocationsRoutes from '../cms/locations';
import cmsSurveyorsRoutes from '../cms/surveyors';
import cmsProcessesRoutes from '../cms/processes';
import cmsPlanRoutes from '../cms/plans';
import cmsUserRoutes from '../cms/users';

export default [].concat(
  cmsSurveysRoutes,
  cmsAnswersRoutes,
  cmsArtifactsRoutes,
  cmsLocationsRoutes,
  cmsSurveyorsRoutes,
  cmsProcessesRoutes,
  cmsPlanRoutes,
  cmsUserRoutes,
);
