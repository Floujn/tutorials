/** @odoo-module **/

import { Component, useState } from "@odoo/owl";
import { Layout } from "@web/search/layout";
import { registry } from "@web/core/registry";
import { useService } from "@web/core/utils/hooks";

import { DashboardItem } from "./dashboard_item/dashboard_item.js"
import { PieChart } from "./pie_chart/pie_chart.js"

class AwesomeDashboard extends Component {
    static template = "awesome_dashboard.AwesomeDashboard";

    setup() {
        this.action = useService("action");
        this.statistics = useState(useService("awesome_dashboard.statistics"));
    }

    viewCustomerKanban() {
        this.action.doAction("base.action_partner_form");
    }

    viewLeads() {
        this.action.doAction({
            type: 'ir.actions.act_window',
            name: 'Leads',
            res_model: 'crm.lead',
            views: [[false, 'list'], [false, 'form']],
        });
    }

    static components = { Layout, DashboardItem, PieChart };
}

registry.category("lazy_components").add("AwesomeDashboard", AwesomeDashboard);
