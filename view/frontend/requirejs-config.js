/**
 * @category  Collab
 * @package   Collab\JqueryPassiveListenersPageSpeed
 * @author    Marcin Jędrzejewski <m.jedrzejewski@collab.pl>
 * @copyright 2024 Collab
 * @license   MIT
 */

var config = {
    waitSeconds: 0,
    config: {
        mixins: {
            'jquery': {
                'Collab_JqueryPassiveListenersPageSpeed/js/jquery-passive-scroll-mixin': true
            }
        }
    }
};
