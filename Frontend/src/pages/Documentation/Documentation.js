import React from 'react';
import { motion } from 'framer-motion';

const Documentation = () => {
  return (
    <div className="min-h-screen bg-black text-white py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-10 text-center"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Documentation</h1>
          <p className="text-gray-300 text-lg">
            Technical and operational reference for Swypora platform capabilities.
          </p>
        </motion.div>

        <div className="space-y-6">
          <section className="bg-gray-900 border border-purple-900/30 rounded-xl p-6">
            <h2 className="text-2xl font-semibold mb-3 text-purple-300">Platform Overview</h2>
            <p className="text-gray-300 leading-relaxed">
              Swypora is a cloud-based POS and payment ecosystem designed for retail, food service,
              and multi-location businesses. It combines payment acceptance, inventory, reporting,
              customer engagement, and employee controls in one unified experience.
            </p>
          </section>

          <section className="bg-gray-900 border border-purple-900/30 rounded-xl p-6">
            <h2 className="text-2xl font-semibold mb-3 text-purple-300">Core Modules</h2>
            <ul className="text-gray-300 space-y-2">
              <li>- Advanced inventory management with low-stock alerts and reordering workflows.</li>
              <li>- Real-time analytics and KPI reporting across products, teams, and locations.</li>
              <li>- Employee permissions, payroll support insights, and operational controls.</li>
              <li>- CRM, loyalty, promotions, and discount engines.</li>
              <li>- eCommerce and multi-platform integration support.</li>
            </ul>
          </section>

          <section className="bg-gray-900 border border-purple-900/30 rounded-xl p-6">
            <h2 className="text-2xl font-semibold mb-3 text-purple-300">Hardware Compatibility</h2>
            <p className="text-gray-300 leading-relaxed">
              Swypora supports a range of terminals, scanners, printers, and kiosk-style deployments.
              Hardware can be configured by role and location, with centralized management from a
              single admin account.
            </p>
          </section>

          <section className="bg-gray-900 border border-purple-900/30 rounded-xl p-6">
            <h2 className="text-2xl font-semibold mb-3 text-purple-300">API & Integration Notes</h2>
            <p className="text-gray-300 leading-relaxed">
              Swypora provides API-ready architecture for data exchange, integrations, and automation
              use cases. Typical implementations include accounting connectors, online ordering, loyalty
              tools, and location-based marketing systems.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Documentation;

